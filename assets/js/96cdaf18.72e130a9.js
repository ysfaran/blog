"use strict";(self.webpackChunkysfaran_blog=self.webpackChunkysfaran_blog||[]).push([[315],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"react-fluent-form: How to write forms with validation in few steps",date:new Date("2020-03-26T00:00:00.000Z"),authors:["ysfaran"],image:"./react-fluent-form-logo.svg",tags:["react","webdev","react-hooks","forms","typescript"]},s=void 0,u={permalink:"/2020/03/26/react-fluent-form",source:"@site/blog/2020-03-26-react-fluent-form/index.mdx",title:"react-fluent-form: How to write forms with validation in few steps",description:"react-fluent-form logo",date:"2020-03-26T00:00:00.000Z",formattedDate:"March 26, 2020",tags:[{label:"react",permalink:"/tags/react"},{label:"webdev",permalink:"/tags/webdev"},{label:"react-hooks",permalink:"/tags/react-hooks"},{label:"forms",permalink:"/tags/forms"},{label:"typescript",permalink:"/tags/typescript"}],readingTime:11.84,truncated:!1,authors:[{name:"Yusuf Aran",url:"https://avatars.githubusercontent.com/u/13695230",imageURL:"https://avatars.githubusercontent.com/u/13695230",key:"ysfaran"}],prevItem:{title:"useStateWithPromise: a custom hook to await state updates of useState",permalink:"/2020/04/06/await-use-state"}},d={image:n(3898).Z,authorsImageUrls:[void 0]},p=[{value:"Background",id:"background",children:[],level:2},{value:"Stop talking. Let&#39;s code!",id:"stop-talking-lets-code",children:[{value:"1. Configuring the form",id:"1-configuring-the-form",children:[],level:3},{value:"2. Initializing the form",id:"2-initializing-the-form",children:[],level:3},{value:"3. Rendering the form",id:"3-rendering-the-form",children:[],level:3},{value:"4. Displaying feedback messages",id:"4-displaying-feedback-messages",children:[],level:3}],level:2},{value:"Customization",id:"customization",children:[{value:"Customizing fields",id:"customizing-fields",children:[],level:3},{value:"Customizing validation",id:"customizing-validation",children:[],level:3}],level:2},{value:"Play around and see how it works!",id:"play-around-and-see-how-it-works",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],m={toc:p};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"react-fluent-form logo",src:n(3898).Z})),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Maybe you know how complicated react state handling for forms - including validation - can be and you already researched for a library that fits to your use case. To make things more complicated we often implement ",(0,r.kt)("strong",{parentName:"p"},"custom fields")," or use third party libraries like ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-select"},"react-select"),"."),(0,r.kt)("p",null,"I was not satisfied (at least not 100%) with any solution on npm so I developed a form library myself:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ysfaran/react-fluent-form"},(0,r.kt)("img",{parentName:"a",src:"https://gh-card.dev/repos/ysfaran/react-fluent-form.svg",alt:"ysfaran/react-fluent-form - GitHub"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Why are you not satisfied with existing solutions?"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"DISCLAIMER")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Of course every library has its up- and downsides (also mine..) and there are for sure great form libraries out there! But I just want to highlight the topics that annoyed me personally."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The libraries I found and also used in some of my projects were ",(0,r.kt)("strong",{parentName:"li"},"not intuitive")," enough. I'm a simple guy who wants a simple API!"),(0,r.kt)("li",{parentName:"ul"},"Some libraries came with a lot of ",(0,r.kt)("strong",{parentName:"li"},"boilerplate code"),"."),(0,r.kt)("li",{parentName:"ul"},"I used ",(0,r.kt)("strong",{parentName:"li"},"a lot of custom fields")," and all libraries forced me to something I didn't like (e.g. wrap my custom field in another component) or didn't support customization in the level I would like it."),(0,r.kt)("li",{parentName:"ul"},"Many libraries had ",(0,r.kt)("strong",{parentName:"li"},"no easy-to-use validation")," approach."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Missing features")," like form arrays.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Why is react-fluent-form satisfying your needs?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It (hopefully) provides a ",(0,r.kt)("strong",{parentName:"li"},"more intuitive fluent API"),"."),(0,r.kt)("li",{parentName:"ul"},"It comes with a ",(0,r.kt)("strong",{parentName:"li"},"easy-to-use validation")," approach using ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/yup"},"yup")," schemes. If you don't like ",(0,r.kt)("inlineCode",{parentName:"li"},"yup"),", you can also write your ",(0,r.kt)("strong",{parentName:"li"},"custom validator"),"!"),(0,r.kt)("li",{parentName:"ul"},"Customization is made fairly easy, because you can add as many ",(0,r.kt)("strong",{parentName:"li"},"reusable custom fields")," as required, ",(0,r.kt)("strong",{parentName:"li"},"without touching any component"),"."),(0,r.kt)("li",{parentName:"ul"},"It ",(0,r.kt)("strong",{parentName:"li"},"reduces boilerplate code")," by enabling a simple API.")),(0,r.kt)("h2",{id:"stop-talking-lets-code"},"Stop talking. Let's code!"),(0,r.kt)("p",null,"Talking is good, showing is better! The next section will go step by step through the creation proccess of a form using ",(0,r.kt)("inlineCode",{parentName:"p"},"react-fluent-form"),"."),(0,r.kt)("h3",{id:"1-configuring-the-form"},"1. Configuring the form"),(0,r.kt)("p",null,"The heart of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-fluent-form")," is the form config since it's the part of it that actually provides the ",(0,r.kt)("em",{parentName:"p"},"fluent")," API:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All code snippets will be in typescript, because the library is also written in typescript!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as yup from "yup";\nimport { createForm, field } from "react-fluent-form";\n\ninterface RegistrationForm {\n  username: string;\n  password: string;\n}\n\nconst formConfig = createForm<RegistrationForm>()({\n  username: field.text("user0"),\n  password: field.password().validateOnSubmitOnly(),\n}).withValidation({\n  username: yup.string().required().min(4),\n  password: yup.string().required().min(8),\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STOP! Try to understand the code without ever seeing it before!")),(0,r.kt)("p",null,"Okay, so we just specified how our registration form will look like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It will have two input fields: Username and Password",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username will have the default value ",(0,r.kt)("inlineCode",{parentName:"li"},"user0")),(0,r.kt)("li",{parentName:"ul"},"Password will be an empty string"),(0,r.kt)("li",{parentName:"ul"},"It will also trigger validation for Password only when a submit has been initiated. There are more validation triggers available but the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"validateAfterTouchOnChange"),", which means once the field lost focus it will be validated after each change."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"field.text()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"field.password()")," actually represent the options for the ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," property of the HTML input element"))),(0,r.kt)("li",{parentName:"ul"},"We added validation for each field using ",(0,r.kt)("inlineCode",{parentName:"li"},"yup")," schemes. Those schemes perfectly fit into ",(0,r.kt)("inlineCode",{parentName:"li"},"react-fluent-form")," since ",(0,r.kt)("inlineCode",{parentName:"li"},"yup")," also provides a ",(0,r.kt)("em",{parentName:"li"},"fluent")," API!",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username is a required string and must have at least length of 4 characters"),(0,r.kt)("li",{parentName:"ul"},"Password is required string and must have at least length of 8 characters")))),(0,r.kt)("h3",{id:"2-initializing-the-form"},"2. Initializing the form"),(0,r.kt)("p",null,"Cool, we configured our form but that was just plain typescript, no react involved. ",(0,r.kt)("inlineCode",{parentName:"p"},"react-fluent-form")," comes with a set of react hooks, but the most important one is ",(0,r.kt)("inlineCode",{parentName:"p"},"useFluentForm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const RegistrationForm = () => {\n  // We just used the config we created before and that's all we need!\n  const { values, touched, validity, errors /* and more */ } =\n    useFluentForm(formConfig);\n\n  // ...\n};\n")),(0,r.kt)("p",null,"Among other things ",(0,r.kt)("inlineCode",{parentName:"p"},"useFluentForm")," returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"values")),": it's an object that contains the current values entered to the form. In this example it would look like ",(0,r.kt)("inlineCode",{parentName:"li"},'{username: "user0", password: ""}')," in the beginning."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"touched")),": it's an object that stores information about the touched state of each field. A field is ",(0,r.kt)("em",{parentName:"li"},"touched")," once it had focus and then lost it, so from a technical perspective if the ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur")," event of an input field was triggert. An example object could be ",(0,r.kt)("inlineCode",{parentName:"li"},"{username: true, password: undefined}")," (",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," means it was not touched yet)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"validity")),": it's an object that stores information about the validation state of each field. It could look like ",(0,r.kt)("inlineCode",{parentName:"li"},"{username: false, password: undefined}")," (",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," means it was not validated yet)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"errors")),": it's an object that contains the current errors of each field in the form. In case of an error the evaluation of ",(0,r.kt)("inlineCode",{parentName:"li"},"yup")," schemes will result in a ",(0,r.kt)("inlineCode",{parentName:"li"},"string[]")," type, so the errors object could look like ",(0,r.kt)("inlineCode",{parentName:"li"},'{username: ["username is a required field"], password: undefined }')," (",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," means the field was not validated yet or that it's valid).")),(0,r.kt)("h3",{id:"3-rendering-the-form"},"3. Rendering the form"),(0,r.kt)("p",null,"We set up all logic, let's start rendering our form now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function RegistrationForm() {\n  const { values, fields, errors, handleSubmit } = useFluentForm(formConfig);\n\n  const handleSubmitSuccess = () => console.log(values);\n\n  const handleSubmitFailure = () => console.log(errors);\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>\n      <label>\n        Username*:\n        <input {...fields.username} />\n      </label>\n      <label>\n        Password*:\n        <input {...fields.password} />\n      </label>\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n')),(0,r.kt)("p",null,"And that's it! But wait we have two new properties here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"fields")),": is an object that contains the props for the to render component. As you might remember ",(0,r.kt)("inlineCode",{parentName:"li"},"react-fluent-form")," exports a ",(0,r.kt)("inlineCode",{parentName:"li"},"field")," variable that allowed us to specify the type of the input field (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"field.password()"),"). It supports every reasonable HTML input type like checkboxes or radio buttons and also the HTML elements ",(0,r.kt)("inlineCode",{parentName:"li"},"textarea")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"select"),". So in our example ",(0,r.kt)("inlineCode",{parentName:"li"},"fields")," would have following type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  username: {\n    type: "text";\n    value: string;\n    onChange: (e: ChangeEvent<HTMLInputElement>) => void;\n    onBlur: () => void;\n  },\n  password: {\n    type: "password";\n    value: string;\n    onChange: (e: ChangeEvent<HTMLInputElement>) => void;\n    onBlur: () => void;\n  },\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"handleSubmit")),": is a function that returns a callback for the form submission. Optionally it allows us to pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"success")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"failure")," callback, which are called dependent on the validation result of the whole form. If at least one field is invalid, ",(0,r.kt)("inlineCode",{parentName:"li"},"failure")," will be called, otherwise ",(0,r.kt)("inlineCode",{parentName:"li"},"success"),".")),(0,r.kt)("h3",{id:"4-displaying-feedback-messages"},"4. Displaying feedback messages"),(0,r.kt)("p",null,"This is actually not mandatory but it surly improves UX! For simple error displays you can just add a check on the errors object and display it if there is one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const RegistrationForm = () => {\n  //...\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>\n      <label>\n        Username*:\n        <input {...fields.username} />\n        {errors.username && <div> {errors.username[0]} </div>}\n      </label>\n      <label>\n        Password*:\n        <input {...fields.password} />\n        {errors.password && <div> {errors.password[0]} </div>}\n      </label>\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n')),(0,r.kt)("p",null,"If the feedback process is more complex (e.g. you want to show if a field is valid, not just if it's invalid) you can take advantage of information stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"validity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"touched"),".\nI'm sure you will find a good solution for your needs!"),(0,r.kt)("h2",{id:"customization"},"Customization"),(0,r.kt)("p",null,"So we talked a lot about a very simple form, but ",(0,r.kt)("strong",{parentName:"p"},"until here I would just hate my own library"),". ",(0,r.kt)("em",{parentName:"p"},"Why?")," Because every project is different and every application has different requirements. It's cool and very useful that standard HTML elements are supported, but when did you use a standard HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," element or an standard HTML datepicker the last time? I mean they are very hard to customize (sometimes it's not even possible) and they don't support features mandatory for professional UX."),(0,r.kt)("p",null,"Okay, I calmed down. Let's focus on the code again!"),(0,r.kt)("h3",{id:"customizing-fields"},"Customizing fields"),(0,r.kt)("p",null,"For simple components like ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-datepicker"},(0,r.kt)("inlineCode",{parentName:"a"},"react-datepicker"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"react-fluent-form")," provides ",(0,r.kt)("inlineCode",{parentName:"p"},"field.raw()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"What means simple component in this context?"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it has ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),"-like and a ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange"),"-like prop"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," has the same type as the first parameter of ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange")," handler"),(0,r.kt)("li",{parentName:"ul"},"it optionally has a ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur"),"-like prop to indicate when the field is touched")),(0,r.kt)("p",null,"*","-like means it must not have the same name, but the same type. E.g. the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," prop in ",(0,r.kt)("inlineCode",{parentName:"p"},"react-datepicker")," is called ",(0,r.kt)("inlineCode",{parentName:"p"},"selected"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For raw fields it's required to pass an initial value, otherwise it will be undefined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'type DateValue = Date | null;\n\nconst formConfig = createForm()({\n  dateOfBirth: field.raw < DateValue > null.withValueProp("selected"),\n});\n')),(0,r.kt)("p",null,"The type of ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," object would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type FieldsType = {\n  dateOfBirth: {\n    selected: Date | null;\n    onChange: (newValue: Date | null) => void;\n    onBlur: () => void; // will just set the "touched" state to true\n  };\n};\n')),(0,r.kt)("p",null,"On default ",(0,r.kt)("inlineCode",{parentName:"p"},"field.raw")," will be mapped to properties ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onBlur"),". Names of these properties can easily be changed using ",(0,r.kt)("inlineCode",{parentName:"p"},"withValueProp")," (as in the example), ",(0,r.kt)("inlineCode",{parentName:"p"},"withOnChangeProp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"withOnBlurProp"),".\nBut, oh boy, I would not like to write"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'field.raw<DateValue>(null).withValueProp("selected");\n')),(0,r.kt)("p",null,"each time I need a datepicker."),(0,r.kt)("p",null,"A simple approach is to wrap it in a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const datePicker = (initialValue: DateValue = null) => {\n  return field.raw<DateValue>(initialValue).withValueProp("selected");\n};\n\nconst formConfig = createForm()({\n  dateOfBirth: datePicker(),\n});\n')),(0,r.kt)("p",null,"But to me that looks kind of odd if put next to other fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const formConfig = createForm<RegistrationForm>()({\n  username: field.text("user0"),\n  dateOfBirth: datePicker(),\n  password: field.password().validateOnSubmitOnly(),\n});\n')),(0,r.kt)("p",null,"Ideally I would like to have ",(0,r.kt)("inlineCode",{parentName:"p"},"field.datePicker()")," so it fits perfectly to the rest of the library. For this purpose ",(0,r.kt)("inlineCode",{parentName:"p"},"react-fluent-form")," exports a utility function ",(0,r.kt)("inlineCode",{parentName:"p"},"addField"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { addField, RawField, field } from "react-fluent-form";\n\naddField("datePicker", (initialValue: DateValue = null) =>\n  field.raw(initialValue).withValueProp("selected")\n);\n')),(0,r.kt)("p",null,"and then you can just use ",(0,r.kt)("inlineCode",{parentName:"p"},"field.datePicker()")," anywhere you want!"),(0,r.kt)("p",null,"But wait, there are few things to note down here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addField")," needs to be called in a top level file, which means ",(0,r.kt)("inlineCode",{parentName:"li"},"addField")," statements need to be executed before e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"field.datePicker()")," is used somewhere."),(0,r.kt)("li",{parentName:"ul"},"For Typescript users (like me) this gets a bit more complicated. Typescript will not know about ",(0,r.kt)("inlineCode",{parentName:"li"},"field.datePicker()")," until we tell the compiler about it. Since types always need to be known at compile time, this part can't be handled by the library itself.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { RawField } from "react-fluent-form";\n\ndeclare module "react-fluent-form" {\n  interface FieldCreator {\n    datePicker: (initialValue?: DateValue) => RawField<DateValue, "selected">;\n    // add more custom fields here\n  }\n}\n')),(0,r.kt)("p",null,"For customization of configurable/complex fields please have a look at ",(0,r.kt)("a",{parentName:"p",href:"https://www.react-fluent-form.com/docs/getting-started/customization/#adding-custom-fields"},"official ",(0,r.kt)("inlineCode",{parentName:"a"},"react-fluent-form")," docs"),"."),(0,r.kt)("h3",{id:"customizing-validation"},"Customizing validation"),(0,r.kt)("p",null,"Equally to form state handling, form validation handling is really important topic on modern websites. So it's important to have a flexible and easy to use validation approach."),(0,r.kt)("p",null,"That's why ",(0,r.kt)("inlineCode",{parentName:"p"},"react-fluent-form")," makes validation customizable.\nInstead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"yup")," schema you can also provide a function which receives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the current ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," of the to validate field"),(0,r.kt)("li",{parentName:"ul"},"the current ",(0,r.kt)("inlineCode",{parentName:"li"},"values")," of the form"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"context")," object (we will see what that means later)")),(0,r.kt)("p",null,"If the validate function returns ",(0,r.kt)("strong",{parentName:"p"},"anything")," beside of ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," the validated field will be marked as invalid. Also the return value will be the error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const formConfig = createForm<RegistrationForm>()({\n  username: field.text("user0"),\n  dateOfBirth: field.datePicker(),\n  password: field.password().validateOnSubmitOnly(),\n}).withValidation({\n  // ...\n  password: (value, values, context) => {\n    if (!value) return "password is mandatory";\n    if (!value.length < 8) return "password must be 8 characters long";\n  },\n});\n')),(0,r.kt)("p",null,"We could possibly return very complex objects here to add more details to the error itself (and it will be typesafe!)."),(0,r.kt)("p",null,"If we return a ",(0,r.kt)("inlineCode",{parentName:"p"},"yup")," schema though, it will be a special case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const formConfig = createForm<RegistrationForm>()({\n  username: field.text("user0"),\n  dateOfBirth: field.datePicker(),\n  password: field.password().validateOnSubmitOnly(),\n}).withValidation({\n  // ...\n  // we just destructured username from values object so it looks a bit cleaner!\n  password: (value, { username }, context) => {\n    if (username && value.includes(username)) {\n      /**\n       * It\'s an array since yup schema below will\n       * also result in a error of type string[]\n       * So it\'s easier to handle errors\n       * if they all have the same type\n       */\n      return ["password can\'t contain username"];\n    } else {\n      return yup.string().required().min(8);\n    }\n  },\n});\n')),(0,r.kt)("p",null,"I think you already know what's happening here. When we return a ",(0,r.kt)("inlineCode",{parentName:"p"},"yup")," schema in a validate function it will not be treated as the error type, it will evaluate the the schema instead, so the error type will be ",(0,r.kt)("inlineCode",{parentName:"p"},"string[]"),". And we actually just implemented ",(0,r.kt)("strong",{parentName:"p"},"conditional validation"),"! Password is now validated based on the username field."),(0,r.kt)("p",null,"But whats about fields outside of the form? That's exactly why we have ",(0,r.kt)("strong",{parentName:"p"},"validation context"),". The initial context can be set via config while you can adapt the context at any time with ",(0,r.kt)("inlineCode",{parentName:"p"},"setContext")," returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useFluentForm"),".\nThe validation context needs to be ",(0,r.kt)("strong",{parentName:"p"},"any object"),", so it can not be a plain number or a string."),(0,r.kt)("p",null,"Let's assume that we have a country select which is outside of our registration form. The current country will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegistrationForm")," component via props. Dependent on the selected country the minimum age for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date of Birth")," field will vary (for USA 16, for the rest 18):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'interface RegistrationFormProps {\n  country: string;\n}\n\nconst formConfig = createForm<RegistrationForm>()({\n  /* fields.. */}\n).withContext({\n  country: "USA",\n})\n\nconst RegistrationForm: React.FC<RegistrationFormProps> = ({country}) => {\n  const { setContext } = useFluentForm(formConfig);\n\n  useEffect(() => setContext({ country }), [country]);\n\n  //...\n}\n')),(0,r.kt)("p",null,"As we can see it's pretty easy to update the context when it changes with ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),". Now we can implement conditional validation based on the current context value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// using validate function\nformConfing.withValidation({\n  dateOfBirth: (value, values, { country }) => {\n    if (country === "USA") {\n      return yup.date().required().max(yearsBack16, "you must be at least 16");\n    } else {\n      return yup.date().required().max(yearsBack18, "you must be at least 18");\n    }\n  },\n});\n\n// using yup\nformConfing.withValidation({\n  dateOfBirth: yup.date().when("$country", {\n    is: "USA",\n    then: yup.date().required().max(yearsBack16, "you must be at least 16"),\n    otherwise: yup\n      .date()\n      .required()\n      .max(yearsBack18, "you must be at least 18"),\n  }),\n});\n')),(0,r.kt)("p",null,"For customization of the validator please have a look at ",(0,r.kt)("a",{parentName:"p",href:"https://www.react-fluent-form.com/docs/getting-started/customization/#adding-custom-validator"},"official ",(0,r.kt)("inlineCode",{parentName:"a"},"react-fluent-form")," docs"),"."),(0,r.kt)("h2",{id:"play-around-and-see-how-it-works"},"Play around and see how it works!"),(0,r.kt)("p",null,"Following code sandbox contains the implementation of the previous examples in typescript! Just check it out:"),(0,r.kt)("p",null,"If you are not clear with something or you want to know about other features like ",(0,r.kt)("strong",{parentName:"p"},"form arrays")," just checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://www.react-fluent-form.com/"},"official ",(0,r.kt)("inlineCode",{parentName:"a"},"react-fluent-form")," docs")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"There a lot of form libraries out there and I simply tried to put all the good approached I observed so far in one library. You saw the things through my eyes and I'm sure you will totally agree on some points, but also totally disagree on others. And that's okay! I'm always open for constructive feedback, so feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ysfaran/react-fluent-form/issues"},"file an issue or improvement on GitHub"),"!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Every contribution is welcome!")))}c.isMDXComponent=!0},3898:function(e,t,n){t.Z=n.p+"assets/images/react-fluent-form-logo-614e9ee13775c2bbd35c961e3a937a89.svg"}}]);