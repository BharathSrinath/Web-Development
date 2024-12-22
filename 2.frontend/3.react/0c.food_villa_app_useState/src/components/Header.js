import foodFireLogo from "../../fire_logo.png";
import { useState } from "react";

const Title = () => (
  <a href="/">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
  </a>
);

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  
  return (
    <div className="header">
      <Title />
      <input
        className="searchBar"
        type="text"
        placeholder="Search your favourite food"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={() => onSearch(searchText)}>Search</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
