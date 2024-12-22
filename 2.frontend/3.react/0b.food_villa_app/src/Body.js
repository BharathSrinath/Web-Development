import RestaurantCard from "./RestaurantCard";
import restaurantList from "../constants";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
      })}
    </div>
  );
};

export default Body;
