import React from "react";
import ReactDOM from "react-dom/client";

/*
React Elements
const heading = React.createElement("h1", {id:"root"}, "I am created using React.creareElement")

JSX => javascript syntax, which can create the react element eaisier that React.createElement()
JSX is not HTML inside javascript. It is HTML Like syntax
console.log(heading)
*/

// React Element
const jsxHeading = (
  <h1 id="root" className="head">
    I am created using JSX
  </h1>
);

// above line is not pure JS, JS Engine will not understand html code directly.
/*
* JSX will be transpiled before it reaches to browser ( ie, root.render()) - Parcel gives this job to Babel
Babel - Trasnpiler
JSX => React.createElement() => object => HTML 
* Bable - is a node library - can transpile the ES6 code to older browser's compatible code
we use camelCasing for giving attribute into the JSX
H.W. -> how to write different tags (a, img, src etc) inside jsx
*/

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

// React Component
/*
two types of components
Class based - Old way of writing code
Functional based - New way of writing code
components naming shouls always start with capital letter
functional component is a JS function which returns a piece of JSX or react element
*/

const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

// way to write the components in different ways
const fn1 = () => {
  return true;
};

const fn2 = () => true;

// const Title = () => (
//   <h1 className="randomName" id="randomID">
//     Title Componened details
//   </h1>
// );

const Title = function () {
  return (
    <h1 className="randomName" id="randomID">
      Title Componened details
    </h1>
  );
};

//inserting a react element inside a component
// we can insert this react element into component using "{}" curly braces.
const reactEl = (
  <h1 className="randomName" id="randomID">
    react Element
  </h1>
);

// inserting a react element into another react element
// we can insert this react element into another react element using "{}" curly braces.
const finalElement = (
  <>
    {reactEl}
    <h1>creating finalElement</h1>
  </>
);

// component composition (composing multiple component inside 1 component)
// inserting a component inside another component
const HeadingComponnet2 = () => (
  <div className="container">
    {finalElement}
    {/* below 3 lines are same */}
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="headingTagh1">Heading2 component</h1>
  </div>
);

// to render a component

root.render(<HeadingComponnet2 />);

/*
? what is the difference between react element and react functional component ?
*/
