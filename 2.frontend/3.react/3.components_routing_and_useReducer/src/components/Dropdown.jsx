import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef(); 
  
  // Refer EOP

  useEffect(() => {
    const handler = (event) => {
      console.log(event);
      console.log(divEl.current);
      if (!divEl.current) {
        return;
      }
      // This line checks if divEl.current is null or undefined. This could happen if the ref hasn't been attached to a DOM element yet, possibly due to the component not being mounted. If the ref is not yet assigned, the function returns early to prevent any further execution.
      if (!divEl.current.contains(event.target)) {
        // Here, the code checks if the click event occurred outside the dropdown.
        // divEl.current.contains(event.target) checks whether the clicked element (event.target) is inside the div element referenced by divEl.
        // If the click occurred outside the dropdown (contains returns false), the setIsOpen(false) function is called to close the dropdown menu.
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);
    // the third argumnent is called useCapture. Refer to it at EOP.

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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
      {/* The ref={divEl} assigns the divEl ref to the div element that wraps the dropdown. This means that divEl.current will point to this div DOM element after the component mounts. */}
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
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