// for creating an element h1 using react
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello world using react from external file!");

// creating nested elements
/* 
<div id="parent">
    <div id="chile">
        <h1>I am h1 tag<h1>
    <div/>
<div/>

*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "clild"},
        [
            React.createElement("h1",{},"I am a h1 tag"),
            React.createElement("h2",{},"I am a h2 tag")
        ]
    )
)

// for creating a root for react 
const root = ReactDOM.createRoot(document.getElementById("root"));

// randering root and injecting the element we created "heading".
// root.render(heading)

console.log(parent)
root.render(parent)