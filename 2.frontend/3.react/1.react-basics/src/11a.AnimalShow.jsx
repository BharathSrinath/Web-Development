import './11a.AnimalShow.css';
import { useState } from 'react';
import bird from './assets/svg/bird.svg';
import cat from './assets/svg/cat.svg';
import cow from './assets/svg/cow.svg';
import dog from './assets/svg/dog.svg';
import gator from './assets/svg/gator.svg';
import heart from './assets/svg/heart.svg';
import horse from './assets/svg/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
// This is same as writing bird: 'bird', cat: 'cat', etc. That is both key and value are same.

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1); 
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      {/* Why the need for svgMap object here? Can't we simply use src={type}? */}
      {/* We can't. Because the data type of 'type' is String. src={"cow"} is different from src={cow} isn't it? */}
      {/* we dont want the string "cow" as a source, rather an image file that is imported in the name of cow. To achieve this we have  to use this way.*/}
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ 
          width: 10 + 10 * clicks + 'px',
          maxWidth: 200 + 'px'
       }}
      />
    </div>
  )
}

export default AnimalShow;

// Issue with this code:
  // setClicks(clicks + 1);
// Eventhough the code works as expected, it is not recommended to write code where the new value depends on old value when updating state in React. 
  // Here we can see that 'clicks' is the old value, 'clicks + 1' is the new value.
// When we call the setClicks function, it schedules an update to the component's state. However, React doesn't guarantee that state updates are applied immediately. Instead, it batches state updates for performance reasons.
// If multiple state updates are scheduled in rapid succession, React groups them into a single update to avoid unnecessary re-renders to improves its efficiency. In such a case, if we depend on the previous state value there is a risk that the updates will not be applied in the order we expect. This can lead to unexpected behavior, particularly when dealing with asynchronous updates.
// To overcome this, 
  // setClicks(prevClicks => prevClicks + 1);
  // Here we are using functional form of the state update in React. 
  // Above line is the concise way of writing that. Expanded syntax is
    // setClicks(prevClicks) { 
    //   return prevClicks + 1; 
    // }
// When we pass a function to setClicks, React ensures that this function receives the latest state as an argument. 
  // Example: Consider the scenario where we have multiple state updates in a React component, and they are triggered in quick succession.
    // setClicks(clicks + 1);
    // setClicks(clicks + 1);
  // React state updates are asynchronous. That is other lines of code are executed without waiting for the completion of updating the state.
  // Since state updates are batched together, both calls to setClicks might use the same, not-yet-updated clicks value. 
    // Just imagine this. When the first setClicks is executed, we are not re-rendering immediately. Rather next setClicks will executed. Since react has not re-rendered, here the value of clicks is still 0. Once all the state updates are done, react will re-render the latest updated value. 
    // Lets imagine the same with functional form of state update. See in functional form, you are always returning a value.  This returned value will be used by the next setClick function. This is why functional form guarantees the latest value. 
// So the bottom line is "The decision of whether to use a callback function within the setter function (setState) in React depends on whether our new state depends on the previous state. If it depends use a callback."

