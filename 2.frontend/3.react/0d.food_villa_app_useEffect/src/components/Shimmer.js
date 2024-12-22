// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(20).fill(0).map((element, index) => {
        // Creating a new array and we are iterating over it
        return <CardShimmer key={index.toString() + 1} />;
      })}
    </div>
  );
};
export default Shimmer;

// Shimmer UI:
  // It is a loading animation or placeholder that simulates the layout of content while the actual content is being loaded. 
  // It’s often used in modern web and mobile applications to improve user experience by giving a visual indication that content is being loaded, rather than showing a blank or empty space.
  // The "shimmer" effect typically involves a gradient animation that moves across the placeholder elements, simulating a light shining over them.