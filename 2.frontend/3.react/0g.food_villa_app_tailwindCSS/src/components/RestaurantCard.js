const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  lastMileTravelString,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-green-100">
      {/* To give a precise value we have to use bracket notation as w-[200px]. It will always be 200px irrespective of the screen sizes */}
      <img className="w-48 h-48 m-auto" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h3 className="font-bold text-xl">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4>{avgRating}</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;