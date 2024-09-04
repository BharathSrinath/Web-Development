// Tryng to create an accordion on my own

import { useState } from "react";

// 1. Accordion affecting their own states. That is when you click an accordion either that particular accordion will expand/collpase. They doesn't affect other accordions.

// const Section = ({title, description}) => {
//   const [isVisible, setIsVisible] = useState(false);
//   return(
//     <div className="p-2 m-2 border border-black">
//       <h3 className="font-bold text-xl">{title}</h3>
//       <button onClick={()=>{
//         setIsVisible(!isVisible);
//       }}>{isVisible ? "Hide" : "Show"}</button>
//       {isVisible && <p>{description}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">This is my accordion</h1>
//       <Section title="About Instamart" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa ea eos quisquam illo iure autem, incidunt fuga libero laudantium optio rem. Necessitatibus porro voluptatibus ipsum animi consequuntur sint sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates itaque voluptatum consequuntur, ex enim quo nobis corporis consequatur nisi? Minus aliquam nam quod repellat dolore adipisci culpa, iusto reprehenderit?"/>
//       <Section title="About Instamart" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa ea eos quisquam illo iure autem, incidunt fuga libero laudantium optio rem. Necessitatibus porro voluptatibus ipsum animi consequuntur sint sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates itaque voluptatum consequuntur, ex enim quo nobis corporis consequatur nisi? Minus aliquam nam quod repellat dolore adipisci culpa, iusto reprehenderit?"/>
//       <Section title="About Instamart" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa ea eos quisquam illo iure autem, incidunt fuga libero laudantium optio rem. Necessitatibus porro voluptatibus ipsum animi consequuntur sint sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates itaque voluptatum consequuntur, ex enim quo nobis corporis consequatur nisi? Minus aliquam nam quod repellat dolore adipisci culpa, iusto reprehenderit?"/>
//     </div>
//   )
// }

// export default Instamart;

// 2. Accordion affecting other accordions. Clicking on one not just expand/collapse them but also collapse others. That is at any given point we can have all accordions in its collapsed state or any one of them in their expanded state.

// Passing them as array of objects so that we can iterate through them.
const Section = ({ title, description, isVisible, onClick }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <p>{title}</p>
      <button onClick={onClick} className="underline font-semibold">{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const items = [
    {
      title: "About Instamart1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa ea eos quisquam illo iure autem, incidunt fuga libero laudantium optio rem. Necessitatibus porro voluptatibus ipsum animi consequuntur sint sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates itaque voluptatum consequuntur, ex enim quo nobis corporis consequatur nisi? Minus aliquam nam quod repellat dolore adipisci culpa, iusto reprehenderit?",
    },
    {
      title: "About Instamart2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa ea eos quisquam illo iure autem, incidunt fuga libero laudantium optio rem. Necessitatibus porro voluptatibus ipsum animi consequuntur sint sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates itaque voluptatum consequuntur, ex enim quo nobis corporis consequatur nisi? Minus aliquam nam quod repellat dolore adipisci culpa, iusto reprehenderit?",
    },
    {
      title: "About Instamart3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa ea eos quisquam illo iure autem, incidunt fuga libero laudantium optio rem. Necessitatibus porro voluptatibus ipsum animi consequuntur sint sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates itaque voluptatum consequuntur, ex enim quo nobis corporis consequatur nisi? Minus aliquam nam quod repellat dolore adipisci culpa, iusto reprehenderit?",
    },
  ];

  const handleClick = (index) => {
    // If the clicked section is already visible, collapse it
    // Otherwise, set it as the visible section
    setVisibleIndex(visibleIndex === index ? null : index);
    // visibleIndex is null initially. Lets say we clicked 0th index. 
    // null === 0? False. So visible index's new value will be 0.
    // When you click the same index (0th) again, now 0 === 0 ? True.  visibleIndex's new value will be null again.
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">My Accordion</h1>
      {items.map((item, index) => (
        <Section
          key={index}
          title={item.title}
          description={item.description}
          isVisible={visibleIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Instamart;

// Lifting the state up:
  // When multiple components need to access or modify the same piece of state, it's better to keep that state in their common ancestor component. This way, the state can be passed down as props to each of the child components.
  // Suppose you have two sibling components that both need to interact with the same piece of data. If each component maintains its own state, keeping them in sync can become complicated. Instead, you lift the state up to their common parent component, allowing the parent to manage the state and pass it down as needed.

// Example: 
// Without Lifting State Up (Separate State):

  // function ComponentA() {
  //   const [count, setCount] = useState(0);

  //   return (
  //     <div>
  //       <p>Component A Count: {count}</p>
  //       <button onClick={() => setCount(count + 1)}>Increment A</button>
  //     </div>
  //   );
  // }

  // function ComponentB() {
  //   const [count, setCount] = useState(0);

  //   return (
  //     <div>
  //       <p>Component B Count: {count}</p>
  //       <button onClick={() => setCount(count + 1)}>Increment B</button>
  //     </div>
  //   );
  // }

  // function ParentComponent() {
  //   return (
  //     <div>
  //       <ComponentA />
  //       <ComponentB />
  //     </div>
  //   );
  // }

// With Lifting State Up:

  // function ParentComponent() {
  //   const [count, setCount] = useState(0);

  //   return (
  //     <div>
  //       <ComponentA count={count} onIncrement={() => setCount(count + 1)} />
  //       <ComponentB count={count} onIncrement={() => setCount(count + 1)} />
  //     </div>
  //   );
  // }

  // function ComponentA({ count, onIncrement }) {
  //   return (
  //     <div>
  //       <p>Component A Count: {count}</p>
  //       <button onClick={onIncrement}>Increment</button>
  //     </div>
  //   );
  // }

  // function ComponentB({ count, onIncrement }) {
  //   return (
  //     <div>
  //       <p>Component B Count: {count}</p>
  //       <button onClick={onIncrement}>Increment</button>
  //     </div>
  //   );
  // }

