// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
// React.createElement syntax:
// React.createElement(tags, {props}, [children])
  // tags - Name of the tags that we want to create
  // props - attributes of the tags like className, id, etc. When no props, just pass an empty object. But apart from the existing attributes, we can create our own attributes also.
  // children - text or any nested element
// It returns an object
const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title"
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
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
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // The root element is typically a <div> in your index.html file, where your entire React application will be rendered.
  // This is the mounting point for the React component tree, meaning all your React components will be rendered inside this root element.
  // It returns an object called 'ReactDOMRoot'
  console.log(root);
  root.render(container);

  // Note:
  // We can inject react into exisiting projects too. 
  // Lets say you have couple of div elements before and after the div with id="root", those div's are not affected by the react code. 
    // Example: Lets say you have created your header and footer as normal html/css/js project. Now you can sandwich the body content as a react project. 