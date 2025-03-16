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

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

// React Component
