import foodFireLogo from "../../public/images/foodFireLogo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className=" w-14 h-14" src={foodFireLogo} alt="Food Fire Logo" />
  </a>
);

const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const cartItems = useSelector((state) => {
    // I have just obtained the state of cartSlice (name of the cartSlice is 'cart')
    // items property inside the cartSlice holds the state.
    return state.cart.items;
  });

  return (
    <div className="flex justify-between bg-green-300 shadow-lg w-full">
      <Title />
      <div className="mr-2">
        <h1></h1>
        <ul className="flex py-5">
          <Link to={"/"}>
            <li className="px-2">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="px-2">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="px-2">Contact</li>
          </Link>
          <Link to={"/instamart"}>
            <li className="px-2">Instamart</li>
          </Link>
          <Link to={"/cart"}>
            <li className="px-2" data-testid="cart">Cart - {cartItems.length} items</li>
          </Link>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
