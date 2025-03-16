import React from "react";
import ReactDOM from "react-dom/client"

// for creating an element h1 using react
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello world using react from external file!");


// adding multiple childs
const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "clild1"},
            [
                React.createElement("h1",{},"I am a h1 tag"),
                React.createElement("h2",{},"I am a h2 tag for nested")
            ]
        ),
        React.createElement(
            "div",
            {id: "clild2"},
            [
                React.createElement("h1",{},"I am a h1 tag"),
                React.createElement("h2",{},"I am a h2 tags")
            ]
        )
    ]
)

// for creating a root for react 
const root = ReactDOM.createRoot(document.getElementById("root"));

// randering root and injecting the element we created "heading".
// root.render(heading)

console.log(parent)
root.render(parent)