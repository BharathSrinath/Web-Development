import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

// An Accordion is an UI pattern or widget that allows you to organize and display content in a collapsible and expandable manner. We will recreate that from scratch with some dummy content.

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  // In accordion we are trying to click an element which will lead to expansion and any other element will collpase.
  // Items being an array, we are making use of their indices. They start from 0. When we click the 0th index (which will expand), other indices (like 1,2,3,etc.) should collapse. Hence, we are setting the defualt indice value to be -1.

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      // We are using an arrow function primarily because, functional set state return the values to the next render. That is the render will have most updated value. In this application we actually do not need it. But we are using to practice. 
      if (currentExpandedIndex === nextIndex) {
        // Checking whether the user clicks the index that is already expanded. If that is the case we have to collpase by setting the default value (-1).
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  // Mind you this is where you will actually start writing the code and then fill in the other details of the component.
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    // Lets picture whats exactly happening. 
    // index will be 0. But the user has clicked 1 or 2, isExpanded will be false.
    // Look at the this statement in return.
      // {isExpanded && <div className="border-b p-5">{item.content}</div>}
      // When isExpanded is false, the next statement will not even be executed. Hence content will not be displayed.
      // To understand this in detail, you have to understand JS Boolean expressions. (Lool at EOP) 

    return (
      <div key={item.id}>
        {/* Top most element will have the key prop. Again generally we wont make use of this when we are getting data using API */}
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
          // You can define the entire handleclick within the map function also. For better readability we are defining outside.
          // Also rather than onClick = {handleClick}, we are using the approach (defining the handleClick function under another function) because,
            // We want the index value (of the element which has been clicked) to be passed.
          // Generally with eventHandlers we will make use of the 'event' properties. Here we are not doing that. (Just know it)
        >
          {item.label}
          <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
  // renderedItems is an array of objects. But as you can see we are not iterating and but still everything is getting displayed properly on the screen.  
  // This is because when you place an array of React elements inside curly braces {}, React automatically iterates over this array and renders each element. This is a built-in behavior of React.
}

export default Accordion;

// JS Boolean Expressions:
// 1. LOGICAL OR (||) gives you first truthy value among the comparisons
  // Example:
    // 'hi'||  'there' => 'hi'
    // 'false'||  'there'=> 'there'
    // 0 || true => true
    // 50 || null => 50
    // 100 || 200 => 100

// 2. LOGICAL AND (&&) gives back first falsey value or last truthy value
  // Example:
    // 'hi' && 'there' => there
    // false && 'there'=> false
    // 0 && true => 0
    // 50 && null => null
    // 100 && 200 => 200