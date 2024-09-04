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

export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate">
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            { Array(10).fill("").map( (element, index)  => 
            <div className="shimmer-menu-card" key={index.toString() + 1}>
              <div className="shimmer-item-details">
                <h3 className="shimmer-w40  stroke animate"></h3>
                <p className="shimmer-w20  stroke animate"> </p>
                <p className="shimmer-w60  stroke animate"></p>
              </div>
              <div className="shimmer-img-wrapper">
                <img className="shimmer-img stroke animate" /> 
                <div className="shimmer-btn stroke animate"> </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

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