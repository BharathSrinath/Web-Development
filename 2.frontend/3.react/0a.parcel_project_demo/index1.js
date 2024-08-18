import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title",
      key: "h1"
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
      key: "h2"
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);