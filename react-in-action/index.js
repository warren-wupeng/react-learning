import React, {Component} from "react";
import ReactDOM from "react-dom";
const node = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World!",
        React.createElement("a", {href: "https://www.google.com"},
                React.createElement("p", {}, "This is a paragraph"),
                React.createElement("em", {}, "This is an em")  
)));

ReactDOM.createRoot(root).render(node);
