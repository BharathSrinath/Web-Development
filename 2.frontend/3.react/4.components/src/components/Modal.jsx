import ReactDOM from 'react-dom';
import { useEffect } from 'react';

// Challenges
// The background of the modal needs to cover the entire screen
// The modal needs to cover up all existing content
// When we create two div elements with position being absolute with styling as inset-0 (top, bottom, left and right - 0 to cover the entire screen) for both where first div will have somewhat transparent see through styling and the next div (with content to display) will have a solid background color, it will seem to work as expected.  
// But there is an issue with this approach.
  // inset-0 with position being absolute will cover the entire screen only when its parent is static. This is because inset-0 works relative to its parent. When its parent is static, absolute positioning by default will place the element at the top-left corner of the screen. If its parent has a position, absolute will be based in that position and will not fill the entire screen (Just fills the entire parent element).
  // Since Modal element's parent in our application doesn't have any aprents being positioned we were lucky that the Modal worked. But in real world projects, that is not the case. We can will always have parents that are positioned.
  // To tackle we use portal.
function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    // Prevents scrolling when the modal is active.
    // If we scroll without 'overflow-hidden' Modal will not appear through out the end of the page. (Modal is applied only to the visible screen and not to the entire webpage)
    // Hope you remember that when a component being mounted and unmounted, useEffect() will be reset.   
    // You know that we dont directly manipulate the DOM in react (one of the react's principles). But here, the div element that we altering is outside the scope of the React application. As you can see, the entire Modal component itself renders separately. So technially we are not violating the react's principles. 

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    // ReactDOM.createPortal() is a method in React that allows you to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
      // Look at the index.html. We have an id named 'root'. All the components gets executed under this div (with id 'root').
      // Now we will declare another div with a classname 'modal-container'
    // So as one can see, this can be useful when we want to render components on top of another component, such as modals, dialogs, tooltips, etc.
    // There is no removal of the child rather it is just rendered under the container rather than rendering it in the normal flow of document.
    // Syntax: ReactDOM.createPortal(child, container, key?)
      // It accepts two arguments and an optional third argument called key (which is not necessary at this point).
      // child - It is the actual Modal here
      // container - It is the reference to the element in index.html (We are using querySelector to select that) 
    <div>
      <div
        onClick={onClose}
        // Clicking on the first div (semi-transaparent part), should close the modal. 
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
