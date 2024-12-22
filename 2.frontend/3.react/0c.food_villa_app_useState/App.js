import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import restaurantList from "./utils/constants";
import { useState } from "react";

const AppLayout = () => {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  const handleSearch = (searchText) => {
    const filteredData = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Body restaurantList={filteredRestaurants} />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/
// Flow of the application until this point:
// In Header, we use useState to manage the searchText value.
// Based on the searchText, we need to filter the contents displayed in Body.
// When you need to update one component's content based on changes in another component, you should lift the shared state to a common ancestor component (From where both the components are called). In our case, both Header and Body are called from App.js.
// Body should not display data directly from the static restaurantList. Instead, declare a useState in App.js with restaurantList as the default value.
// When the searchText changes, filter the restaurant list and update the state.
// The filtered list is then passed to Body as a prop, allowing it to render the updated restaurant list.
// The searchText is obtained from Header to App.js using a callback function, allowing App.js to manage the filtered state.
