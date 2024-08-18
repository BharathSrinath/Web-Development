import React from "react";
import ReactDOM from "react-dom/client";

// create an element using JSX
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}

// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/>  {/* Here we have used one component inside another - Known as component composition. */}
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);
// root.render(HeaderComponent()); This is also right