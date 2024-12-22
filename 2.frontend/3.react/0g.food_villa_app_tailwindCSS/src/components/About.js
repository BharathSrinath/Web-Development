import burgerImage from "../../public/Images/burgerImage.png";
// import User from "./User";
// import UserClass1 from "./UserClass1";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={burgerImage} alt="Food Image" />
      </div>
      {/* <div>
        <User name="Bharath"/>
        <UserClass1 name="Srinath" location="Kannur"/>
      </div> */}
    </div>
  );
};

export default About;
