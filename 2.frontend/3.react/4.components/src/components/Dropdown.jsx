import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(); 
  
  // Refer EOP

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        // So whats happening here?
        // The issue is when the dropdown is open and when you click anywhere outisde of the clickable element, it will not close. That is not a good user experience. 
        // This is where useRef comes into picture.  
          // With useRef(), 'divEl' becomes that mutable object that will change with re-renders.  It has a property named current. 
          // event.target refers to the DOM element that fired the event. (In our case it is the element that was clicked).
          // The contains() method is a standard DOM API method that checks whether a node is a descendant of another node. In other words, it checks if one element is contained inside another.
          // The ! operator negates the result. 
        // So, !divEl.current.contains(event.target) will be true if the clicked element is not inside divEl.current, and false otherwise.
          // Simply, we close the dropdown when clicked outside the dropdown element
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);
    // the third argumnent is called useCapture. Refer to it at EOP.

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
  // So why have we used useEffect here.? Very simple. We want this event to be triggered only once (That is why we passing an empty array). Once the click event kicks in it will exist as long as the component exist. When we dont wrap it under useEffect, we will have multiple click events. 

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        {/* 'value?.label' has a unique feature. */}
        {/* See the default value that we have given to select is 'null' in app component. When you assign a variable null value and tried to read its property (like select.length) we will encounter an error as "cannot read null properties". The same is true for undefined */}
        {/* Here 'value' will hold the selected value from the dropdown. Since they are defined objects which has label property associated with it (we are trying to read label here), first statement will be evaluated as true and that will be displayed. If the user hasn't selected anything, second statement will be evaluated (which is true as it is a string with some content. Only the empty string will be false) and this string will displayed on the screen. */}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
      {/* if 'isOpen' is true, next statement will be executed */}
    </div>
  );
}

export default Dropdown;

// Lets learn about eventListener in detail
// Syntax: element.addEventListener(event, function, useCapture);
// In the DOM, all elements are nested within the document object, forming a tree-like structure. When an event occurs, it doesn’t just happen on that one element, it happens on the entire tree, from the top (document) down to the target element and back up again. This is known as event propagation.
// The capturing phase is the first part of this process. It’s the journey from the top of the tree (document) down to the target element. The reason it starts from the top is to allow for more complex interactions. For example, we might have a click event on a button, but also a separate click event on the entire window or a parent element. By starting from the top, JS can trigger any events that exist on parent elements before reaching the target.
// After the capturing phase comes the target phase, where the event has reached the target element. Any event handlers on the target element itself are triggered.
// Finally, the bubbling phase is the journey back up the tree, from the target element to the top (document). Again, this allows for more complex interactions, as we might have different events triggered on the way back up the tree.

// Explanation with respect to our project
// useCapture is a boolean value that specifies whether to use event bubbling or event capturing. By default its value is false (which is associated with event capturing)
// In your dropdown menu code, useCapture is set to true, which means the event handler is set during the capturing phase. This is done to ensure that the click event handler runs before any other click events that might be set on the page. This way, if a click happens outside the dropdown menu, the dropdown will close before any other click events are processed.
// Example: 
  // Let’s consider a webpage where we have a dropdown menu inside a div container. The div container also has a click event listener that changes the background color of the div when it’s clicked. 
  // Now, let’s say we open the dropdown menu and then click somewhere inside the div container but outside the dropdown menu. Without the useCapture parameter set to true, the click event on the div container would run before the click event on the document that checks if the dropdown menu should be closed. This could lead to unexpected behavior, such as the div container’s background color changing while the dropdown menu is still open.

// useRef()
// It is a hook that allows us to create a ‘ref’ (reference) to a DOM element or a JS object. This ref can then be used to access the current value it’s pointing to.
// Eventhough the usecase is completely different, you can draw parallels with pointer variable in C. 
// You know that with useState() hook we try to re-render everytime there is a change and we dont directly manipulate with DOM. But useRef() is used  for accessing and interacting with the DOM. It creates a mutable object (it can change) called a "ref" that can persist across renders and updates without causing re-renders. It is commonly used to reference and interact with DOM elements directly. But still it doesn't break the principle of react. Because it can only read elements by interacting with DOM. It cannot change write any values directly to DOM.
// Use cases: To manage focus, text selection, or media playback; trigger imperative animations; integrate with third-party DOM libraries, etc.
// It’s important to note that while useRef can be used to access and interact with DOM nodes directly, this should be done sparingly and only for cases where it’s necessary.
// So, while useRef might seem like it’s violating React’s principles at first glance, it’s actually a tool provided by React for cases where direct interaction with the DOM is necessary. It’s a way to ‘escape’ from React’s declarative world when you need to, but it should be used judiciously. 