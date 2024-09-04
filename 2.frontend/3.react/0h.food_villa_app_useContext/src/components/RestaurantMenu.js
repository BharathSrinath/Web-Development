import { useParams } from "react-router-dom"; // import useParams to read `resId`
import { MenuShimmer } from "./Shimmer";
import useRestaurantmenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring

  const { restaurant, menuItems } = useRestaurantmenu(resId); // Our first custom hook

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu m-5">
      <div className="restaurant-summary">
        <img
          className="restaurant-img w-80 h-72 rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurant?.cloudinaryImageId
          }
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="font-bold text-xl">{restaurant?.name}</h2>
          <p className="font-semibold text-sm">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="restaurant-details">
            <div>
              <span>
                {restaurant?.avgRating} | {restaurant?.sla?.slaString} |{" "}
                {restaurant?.costForTwoMessage}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content m-auto">
        <div className="menu-items-container">
          <div className="menu-title-wrap text-center">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">({menuItems.length} ITEMS)</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item w-[80%] mx-auto my-5 p-3 grid grid-cols-[15%_85%] shadow-lg rounded-lg" key={item?.id}>
                <div className="menu-img-wrapper m-2">
                  {item?.imageId && (
                    <img
                      className="menu-item-img w-36 h-24 rounded-md"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                        item?.imageId
                      }
                      alt={item?.name}
                    />
                  )}
                  {/* <button className="add-btn"> ADD +</button> */}
                </div>
                <div className="menu-item-details flex flex-wrap m-2">
                  <h3 className="item-title font-bold">{item?.name}</h3>
                  <p className="item-cost text-right w-20">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
