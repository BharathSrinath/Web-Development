import RestaurantCard from "./RestaurantCard";

const Body = ({ restaurantList }) => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
      ))}
    </div>
  );
};

export default Body;
