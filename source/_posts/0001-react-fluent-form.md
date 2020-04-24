---
title: "react-fluent-form: How to write forms with validation in few steps"
date: 2020-03-26 19:18:18
featured_image: "images/featured-images/react-fluent-form-logo.svg"
tags: 
  - react
  - webdev
  - react-hooks
  - forms
  - typescript
---

## Background

Maybe you know how complicated react state handling for forms - including validation - can be and you already researched for a library that fits to your use case. To make things more complicated we often implement **custom fields** or use third party libraries like [react-select](https://www.npmjs.com/package/react-select).

I was not satisfied (at least not 100%) with any solution on npm so I developed a form library myself:

<div class="github-card" data-github="ysfaran/react-fluent-form" data-width="400" data-height="" data-theme="default"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

&emsp;

**_Why are you not satisfied with existing solutions?_**

> **DISCLAIMER:**
> Of course every library has its up- and downsides (also mine..) and there are for sure great form libraries out there! But I just want to highlight the topics that annoyed me personally.

- The libraries I found and also used in some of my projects were **not intuitive** enough. I'm a simple guy who wants a simple API!
- Some libraries came with a lot of **boilerplate code**.
- I used **a lot of custom fields** and all libraries forced me to something I didn't like (e.g. wrap my custom field in another component) or didn't support customization in the level I would like it.
- Many libraries had **no easy-to-use validation** approach.
- **Missing features** like form arrays.

**_Why is react-fluent-form satisfying your needs?_**

- It (hopefully) provides a **more intuitive fluent API**.
- It comes with a **easy-to-use validation** approach using [yup](https://www.npmjs.com/package/yup) schemes. If you don't like `yup`, you can also write your **custom validator**!
- Customization is made fairly easy, because you can add as many **reusable custom fields** as required, **without touching any component**. 
- It **reduces boilerplate code** by enabling a simple API.

## Stop talking. Let's code!

Talking is good, showing is better! The next section will go step by step through the creation proccess of a form using `react-fluent-form`.

### 1. Configuring the form

The heart of `react-fluent-form` is the form config since it's the part of it that actually provides the _fluent_ API:

> **NOTE:**
> All code snippets will be in typescript, because the library is also written in typescript!

```ts
import * as yup from "yup";
import { createForm, field } from "react-fluent-form";

interface RegistrationForm {
  username: string;
  password: string;
}

const formConfig = createForm<RegistrationForm>()({
  username: field.text("user0"),
  password: field.password().validateOnSubmitOnly(),
}).withValidation({
  username: yup.string().required().min(4),
  password: yup.string().required().min(8)
})
```

**STOP! Try to understand the code without ever seeing it before!**

Okay, so we just specified how our registration form will look like:

- It will have two input fields: Username and Password
  - Username will have the default value `user0`
  - Password will be an empty string
  - It will also trigger validation for Password only when a submit has been initiated. There are more validation triggers available but the default is `validateAfterTouchOnChange`, which means once the field lost focus it will be validated after each change.
  - `field.text()` and `field.password()` actually represent the options for the `type` property of the HTML input element
- We added validation for each field using `yup` schemes. Those schemes perfectly fit into `react-fluent-form` since `yup` also provides a _fluent_ API!
  - Username is a required string and must have at least length of 4 characters
  - Password is required string and must have at least length of 8 characters

### 2. Initializing the form

Cool, we configured our form but that was just plain typescript, no react involved. `react-fluent-form` comes with a set of react hooks, but the most important one is `useFluentForm`:

```jsx
const RegistrationForm = () => {
  // We just used the config we created before and that's all we need!
  const { values, touched, validity, errors /* and more */ } = useFluentForm(formConfig);

  // ...
}
```

Among other things `useFluentForm` returns:

- **`values`**: it's an object that contains the current values entered to the form. In this example it would look like `{username: "user0", password: ""}` in the beginning.
- **`touched`**: it's an object that stores information about the touched state of each field. A field is _touched_ once it had focus and then lost it, so from a technical perspective if the `onBlur` event of an input field was triggert. An example object could be `{username: true, password: undefined}` (`undefined` means it was not touched yet).
- **`validity`**: it's an object that stores information about the validation state of each field. It could look like `{username: false, password: undefined}` (`undefined` means it was not validated yet).
- **`errors`**: it's an object that contains the current errors of each field in the form. In case of an error the evaluation of `yup` schemes will result in a `string[]` type, so the errors object could look like `{username: ["username is a required field"], password: undefined }` (`undefined` means the field was not validated yet or that it's valid).

### 3. Rendering the form

We set up all logic, let's start rendering our form now:

```jsx
function RegistrationForm() {
  const { values, fields, errors, handleSubmit } = useFluentForm(formConfig);
 
  const handleSubmitSuccess = () => console.log(values);
 
  const handleSubmitFailure = () => console.log(errors);
 
  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>
      <label>
        Username*:
        <input {...fields.username} />
      </label>
      <label>
        Password*:
        <input {...fields.password} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```
And that's it! But wait we have two new properties here:

- **`fields`**: is an object that contains the props for the to render component. As you might remember `react-fluent-form` exports a `field` variable that allowed us to specify the type of the input field (e.g. `field.password()`). It supports every reasonable HTML input type like checkboxes or radio buttons and also the HTML elements `textarea` and `select`. So in our example `fields` would have following type:
```ts
{
  username: {
    type: "text";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  },
  password: {
    type: "password";
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  },
}
```

- **`handleSubmit`**: is a function that returns a callback for the form submission. Optionally it allows us to pass a `success` and `failure` callback, which are called dependent on the validation result of the whole form. If at least one field is invalid, `failure` will be called, otherwise `success`.

### 4. Displaying feedback messages

This is actually not mandatory but it surly improves UX! For simple error displays you can just add a check on the errors object and display it if there is one:

```jsx
const RegistrationForm = () => {
 //...

  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>
      <label>
        Username*:
        <input {...fields.username} />
        {errors.username && <div> {errors.username[0]} </div>}
      </label>
      <label>
        Password*:
        <input {...fields.password} />
        {errors.password && <div> {errors.password[0]} </div>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

If the feedback process is more complex (e.g. you want to show if a field is valid, not just if it's invalid) you can take advantage of information stored in `validity` and `touched`.
I'm sure you will find a good solution for your needs!

## Customization

So we talked a lot about a very simple form, but **until here I would just hate my own library**. _Why?_ Because every project is different and every application has different requirements. It's cool and very useful that standard HTML elements are supported, but when did you use a standard HTML `select` element or an standard HTML datepicker the last time? I mean they are very hard to customize (sometimes it's not even possible) and they don't support features mandatory for professional UX.

Okay, I calmed down. Let's focus on the code again!

### Customizing fields

For simple components like [`react-datepicker`](https://www.npmjs.com/package/react-datepicker) `react-fluent-form` provides `field.raw()`.

**_What means simple component in this context?_**

- it has `value`-like and a `onChange`-like prop
- `value` has the same type as the first parameter of `onChange` handler
- it optionally has a `onBlur`-like prop to indicate when the field is touched

*-like means it must not have the same name, but the same type. E.g. the `value` prop in `react-datepicker` is called `selected`.  
For raw fields it's required to pass an initial value, otherwise it will be undefined:

```jsx
type DateValue = Date | null;

const formConfig = createForm()({
  dateOfBirth: field.raw<DateValue>(null).withValueProp("selected")
});
```

The type of `fields` object would look like this:

```ts
type FieldsType = {
  dateOfBirth: {
    selected: Date | null;
    onChange: (newValue: Date | null) => void;
    onBlur: () => void; // will just set the "touched" state to true
  };
};
```

On default `field.raw` will be mapped to properties `value`, `onChange` and `onBlur`. Names of these properties can easily be changed using `withValueProp` (as in the example), `withOnChangeProp` and `withOnBlurProp`.
But, oh boy, I would not like to write

```ts
field.raw<DateValue>(null).withValueProp("selected")
```

each time I need a datepicker.

A simple approach is to wrap it in a function:

```ts
const datePicker = (initialValue: DateValue = null) => {
  return field.raw<DateValue>(initialValue).withValueProp("selected")
}

const formConfig = createForm()({
  dateOfBirth: datePicker()
});
```

But to me that looks kind of odd if put next to other fields:

```ts
const formConfig = createForm<RegistrationForm>()({
  username: field.text("user0"),
  dateOfBirth: datePicker(),
  password: field.password().validateOnSubmitOnly()
})
```

Ideally I would like to have `field.datePicker()` so it fits perfectly to the rest of the library. For this purpose `react-fluent-form` exports a utility function `addField`:

```ts
import { addField, RawField, field } from "react-fluent-form";

addField("datePicker", (initialValue: DateValue = null) =>
  field.raw(initialValue).withValueProp("selected")
);
```

and then you can just use `field.datePicker()` anywhere you want!

But wait, there are few things to note down here:

- `addField` needs to be called in a top level file, which means `addField` statements need to be executed before e.g. `field.datePicker()` is used somewhere.
- For Typescript users (like me) this gets a bit more complicated. Typescript will not know about `field.datePicker()` until we tell the compiler about it. Since types always need to be known at compile time, this part can't be handled by the library itself.

```ts
import { RawField } from "react-fluent-form";

declare module "react-fluent-form" {
  interface FieldCreator {
    datePicker: (initialValue?: DateValue) => RawField<DateValue, "selected">;
    // add more custom fields here
  }
}
```

For customization of configurable/complex fields please have a look at [official `react-fluent-form` docs](https://ysfaran.github.io/react-fluent-form-docs/docs/getting-started/customization/#adding-custom-fields).

### Customizing validation

Equally to form state handling, form validation handling is really important topic on modern websites. So it's important to have a flexible and easy to use validation approach.

That's why `react-fluent-form` makes validation customizable.
Instead of a `yup` schema you can also provide a function which receives:

- the current `value` of the to validate field
- the current `values` of the form
- the `context` object (we will see what that means later)

If the validate function returns **anything** beside of `undefined` the validated field will be marked as invalid. Also the return value will be the error:

```ts
const formConfig = createForm<RegistrationForm>()({
  username: field.text("user0"),
  dateOfBirth: field.datePicker(),
  password: field.password().validateOnSubmitOnly()
}).withValidation({
  // ...
  password: (value, values, context) => {
     if(!value) return "password is mandatory";
     if(!value.length < 8) return "password must be 8 characters long";
  }
})
```

We could possibly return very complex objects here to add more details to the error itself (and it will be typesafe!).

If we return a `yup` schema though, it will be a special case:

```ts
const formConfig = createForm<RegistrationForm>()({
  username: field.text("user0"),
  dateOfBirth: field.datePicker(),
  password: field.password().validateOnSubmitOnly()
}).withValidation({
  // ...
  // we just destructured username from values object so it looks a bit cleaner!
  password: (value, { username }, context) => {
     if(username && value.includes(username)){
       /**
        * It's an array since yup schema below will
        * also result in a error of type string[]
        * So it's easier to handle errors 
        * if they all have the same type
        */
       return ["password can't contain username"];
     } else {
       return yup.string().required().min(8);
     }
  }
})
```

I think you already know what's happening here. When we return a `yup` schema in a validate function it will not be treated as the error type, it will evaluate the the schema instead, so the error type will be `string[]`. And we actually just implemented **conditional validation**! Password is now validated based on the username field.

But whats about fields outside of the form? That's exactly why we have **validation context**. The initial context can be set via config while you can adapt the context at any time with `setContext` returned by `useFluentForm`.
The validation context needs to be **any object**, so it can not be a plain number or a string.

Let's assume that we have a country select which is outside of our registration form. The current country will be passed to the `RegistrationForm` component via props. Dependent on the selected country the minimum age for the `Date of Birth` field will vary (for USA 16, for the rest 18):

```jsx
interface RegistrationFormProps {
  country: string;
}

const formConfig = createForm<RegistrationForm>()({
  /* fields.. */}
).withContext({
  country: "USA",
})

const RegistrationForm: React.FC<RegistrationFormProps> = ({country}) => {
  const { setContext } = useFluentForm(formConfig);

  useEffect(() => setContext({ country }), [country]);

  //...
}
```

As we can see it's pretty easy to update the context when it changes with `useEffect`. Now we can implement conditional validation based on the current context value:

```ts
// using validate function 
formConfing.withValidation({
  dateOfBirth: (value, values, { country }) => {
    if (country === "USA") {
      return yup.date().required().max(yearsBack16, "you must be at least 16");
    } else {
      return yup.date().required().max(yearsBack18, "you must be at least 18");
    }
  }
});

// using yup
formConfing.withValidation({
  dateOfBirth: yup.date().when("$country", {
    is: "USA",
    then: yup.date().required().max(yearsBack16, "you must be at least 16"),
    otherwise: yup.date().required().max(yearsBack18, "you must be at least 18")
  })
});
```

For customization of the validator please have a look at [official `react-fluent-form` docs](https://ysfaran.github.io/react-fluent-form-docs/docs/getting-started/customization/#adding-custom-validator).

## Play around and see how it works!

Following code sandbox contains the implementation of the previous examples in typescript! Just check it out:

<iframe
     src="https://codesandbox.io/embed/practical-hertz-pgcxl?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="practical-hertz-pgcxl"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

If you are not clear with something or you want to know about other features like  **form arrays** just checkout the [official `react-fluent-form` docs](https://ysfaran.github.io/react-fluent-form-docs/)

## Conclusion

There a lot of form libraries out there and I simply tried to put all the good approached I observed so far in one library. You saw the things through my eyes and I'm sure you will totally agree on some points, but also totally disagree on others. And that's okay! I'm always open for constructive feedback, so feel free to [file an issue or improvement on GitHub](https://github.com/ysfaran/react-fluent-form/issues)!

**Every contribution is welcome!**