import { useEffect, useState } from "react";

const useRestaurantmenu = (resId) => {

    const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
      getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
    }, []);
  
    async function getRestaurantInfo() {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await response.json();
  
        // Set restaurant data
        const restaurantData =
          json?.data?.cards?.map((x) => x.card)?.find((x) => x &&
                x.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.info || null;
        setRestaurant(restaurantData);
  
        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
            ?.filter(
              (x) =>
                x["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];
  
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems);
      } catch (error) {
        setMenuItems([]);
        setRestaurant(null);
      }
    }
    return {
        restaurant,
        menuItems
    }
}

export default useRestaurantmenu;