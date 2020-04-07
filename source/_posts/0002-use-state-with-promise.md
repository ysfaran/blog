---
title: "useStateWithPromise: a custom hook to await state updates of useState"
date: 2020-04-06 17:08:01
featured_image: "images/featured-images/await-use-state.png"
tags:
  - react
  - webdev
  - react-hooks
  - state
  - typescript
---

## The Problem

The general problem is that we want to wait for a state update an then do something afterwards. Unfortunatly we can not write sequential code, because every state update is asynchronous.
In "old" react  we could simply pass a callback. As an example we will look at a class component, that contains filters for an article list view:

```jsx
class FilterSidebar extends React.Component {
  constructor(){
    this.state ={
      filters: {},
      articles: []
    }
  }

  fetchArticles = async () => {
    const fetchedArticles = await API.getArticles(this.state.filters);
    this.setState({articles: fetchedArticles})
  }

  reset = () => {
    this.setState({filters: {}}, this.fetchArticles);
  }

  setColorFilter = (color) =>  {
    this.setState(state => ({filters: {...state.filters, color}));
  }

  // more filters & render ...
}
```

- `fetchArticles`: fetch `articles` from an API service based on the `filters` in the state.
- `reset`: clear all `filters` and then fetch `articles`, by passing `fetchArticles` as callback to `setState`. This will guarantee that the state of `filters` is cleared before calling `fetchArticles`
- `setColorFilter`: sets filter for `articles` to have a specific color (just an example to help your imagination!)

Using functional components this would look a bit different:

```jsx
const FiltersSidebar = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchArticles = async () => {
    const fetchedArticles = await API.getArticles(filters);
    setArticles(fetchedArticles)
  }

  const reset = () => {
    setFilters({});

    // uuhh, ouhh .. fetchArticles will use old state of "filters"
    fetchArticles();
  }

  const setColorFilter = (color) =>  {
   setFilters(currentFilters => ({...currentFilters, color}));
  }

  // more filters & return ..
}
```

The problem here is that the setter, which is returned by `useState` (here `setFilters`), doesn't allow us to pass a callback function as second argument. But in this case we can use `useEffect` and `useRef` to handle the problem:

```jsx
const FiltersSidebar = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({});
  const resettingRef = useRef(false);

  const fetchArticles = async () => {
    const fetchedArticles = await API.getArticles(filters);
    setArticles(fetchedArticles)
  }

  const reset = () => {
    resettingRef.current = true;
    setFilters({});
  }

  useEffect(() => {
    if(resettingRef.current){
      resettingRef.current = false;
      fetchArticles();
    }
  },[filters])

  // ...
}
```

Okay, that looks a bit ugly but at least it works..
But what happens if the filter logic gets much more complicated and we want to extract logic for filters in custom hooks:

```jsx
const useStringFilter = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  // maybe more complex stuff here

  const reset = () => {
    setValue(initialValue)
  }

  return {
    value,
    setValue,
    reset
  }
}

// and filters for other types like useDateFilter etc..
```

Then our component could look like this:

```jsx
const FiltersSidebar = () => {
  const [articles, setArticles] = useState([]);

  const colorFilter = useStringFilter();
  const nameFilter = useStringFilter();
  const releaseDateFilter = useDateFilter();

  const fetchArticles = async () => {
    const filters = {
      color: colorFilter.value,
      name: nameFilter.value,
      releaseDate: releaseDateFilter.value
    }
    const fetchedArticles = await API.getArticles(filters);
    setArticles(fetchedArticles)
  }

  const reset = () => {
    colorFilter.reset(); // will trigger a state update inside of useStringFilter
    nameFilter.reset(); // will trigger a state update inside of useStringFilter
    releaseDateFilter.reset(); // will trigger a state update inside of useDateFilter

    // fetchArticles will use old state of colorFilter, nameFilter and releaseDateFilter
    fetchArticles();
  }

  // ...
}
```

**_What to do now?_**  
There is no straightforward way when using `useEffect` and `useRef` anymore, because we need to wait for multiple state updates to be completed. And that exactly is the actual problem!

## The Solution

With a custom hook - namely `useStateWithPromise` - this problem can be solved:

```jsx
const useStateWithPromise = (initialState) => {
  const [state, setState] = useState(initialState);
  const resolverRef = useRef(null);

  useEffect(() => {
    if (resolverRef.current) {
      resolverRef.current(state);
      resolverRef.current = null;
    }
    /**
     * Since a state update could be triggered with the exact same state again,
     * it's not enough to specify state as the only dependency of this useEffect.
     * That's why resolverRef.current is also a dependency, because it will guarantee,
     * that handleSetState was called in previous render
     */
  }, [resolverRef.current, state]);

  const handleSetState = useCallback((stateAction) => {
    setState(stateAction);
    return new Promise(resolve => {
      resolverRef.current = resolve;
    });
  }, [setState])

  return [state, handleSetState];
};
```

It's not important to fully understand this hook. But what you should understand is that `useStateWithPromise` returns, just like `useState`, a getter and setter with a small important difference:  
**the setter returns a `Promise`, which we can `await`!**

Now we can replace the `useState` statements in our custom filter hooks with `useStateWithPromise`:

```jsx
const useStringFilter = (initialValue = "") => {
  const [value, setValue] = useStateWithPromise(initialValue);

  const reset = () => {
    // this will return a promise containing the updated state
    return setValue(initialValue);
  }

  return {
    value,
    setValue,
    reset
  }
}
```

And then we can finally `await` state updates:

```jsx
const FiltersSidebar = () => {
  // ...
  
  const reset =  async () => {
    // wait for all state updates to be completed
    await Promise.all([
      colorFilter.reset(),
      nameFilter.reset(),
      releaseDateFilter.reset()
    ]);

    // fetchArticles will STILL use old state of colorFilter, nameFilter and releaseDateFilter
    fetchArticles();
  }

  // ...
}
```

Well, that was a WT.. moment for me, but it makes sense if you really think about how functional components work.

Viewing the code from plain JavaScript side (without react) **`reset` is just a function inside of a function(al component)**. So each time the function is called (in the react terms: the functions is **rerendered**), **`reset` will be a new function with a new reference**. After we `await` the state updates of the filters with `Promise.all`, `reset` will still point to the exact same "old" `fetchArticles` reference, **which is still pointing to "old" state**! But in the meantime multiple state updates happend and there is much "newer" version of `reset` and also `fetchArticles`, **which is pointing to the updated state**.

{% asset_img rerendered-functions.png  rerendered functions example %}

With one additional state property, here `resetted`, this can be fixed:

```jsx
const FiltersSidebar = () => {
  // ...
  const [resetted, setResetted] = useState(false)
  
  useEffect(() => {
    if(resetted){
      fetchArticles();
      setResetted(false);
    }
  },[resetted]);

  const reset =  async () => {
    await Promise.all([
      colorFilter.reset(),
      nameFilter.reset(),
      releaseDateFilter.reset()
    ]);

    setResetted(true);
  }

  // ...
}
```

Now `setResetted(true)` will trigger a rerender of the component and it's guaranteed that the `fetchArticles` call inside of the `useEffect` statement will use the latest state for the API call.

## The Solution ?

When I implemented `useStateWithPromise` I really thought that's the perfect solution and also questioned why there is no build-in solution for this in react? But after my WT.. moment I really understood why react didn't include such functionality:

**It simply doesn't fit to the general design of functional components!**

When you use class components, you work a lot with mutable references (e.g. `this.state` is reference that constantly gets updated by `this.setState` calls). But that's an anti pattern for functional components, because here you always try to work with immutable data and there is a reason for that:

**Mutable references tend to cause unwanted side effects!**

If your state has a non-primitive type (e.g. an object or array) it's recommended create new references instead of keeping the old one:

```jsx
const MyComponent = () => {
  const [immutableData, setImmutableData] = useState({a: "a", b: "b"});
  let [mutableData, setMutableData] = useState({a: "a", b: "b"});


  const setNewData = () => {
    // good: new reference!
    setImmutableData({a: "new a", b: "new b"})

    // bad: same reference!
    mutableData.a = "new a";
    mutableData.b = "new b";
    setMutableData(mutableData)
  }

  useEffect(() => { console.log("immutable data changed") }, [immutableData])

  // will never be called because mutableData will always have same reference
  useEffect(() => { console.log("mutable data changed") }, [mutableData])

  return (
    <>
      <ChildComponent data={immutableData} />
      {/**
        * changing mutableData without the state setter, (e.g. mutableData.a = "new a")
        * could cause unwanted side effects, because ChildComponent wouldn't be rerendered,
        * so e.g. no useEffect statements inside ChildComponent would be triggered
        */}
      <ChildComponent data={mutableData} />
    </>
  )
}
```

To come back to the example: 

- each state update (e.g. `reset` of filter) causes a rerender
- each rerender creates a new reference for `reset` and `fetchArticles`
- each `fetchArticles` reference will point to a different immutable state
- after the `await` in `reset` the `fetchArticles` call will use "old" state, because it's an "old" version of `fetchArticles`

So the general issue is that we have multiple `fetchArticles` versions (after each render) which all point to different states, because states in functional components are/should be immutable.

## Conclusion

There is a reason why react didn't implement this feature for functional components. If you have the time and the ability to (re-)build the architecture of your app, you should really think about using `useStateWithPromise`.

I used it once in production, but only because the time was limited and my customer didn't want to spent to much time refactoring the code. For the next project I had a similiar problem but was able to switch the approach and solve this problem differently. E.g. in our example the actual problem was that we had multiple states in multiple hooks but could not reset them easily all at once (we needed to call `reset` on each filter). If the state of all filters would be in one place, it would be much easier to reset them all together. A different approach would be to store inital values in a ref so you it's not even necessary to wait for the state to be updated.

As final conclusion: If you have the necessarity to `await` state updates in a manner like with `useStateWithPromise` you either have a non-ideal architechture, your requirments have changed or you have a really special case. 😉