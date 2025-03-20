import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
  - Logo
  - Nav-Items
* Body
  - Search
  - RestaurentContainer
    - RestaurentCard
      - img
      - name of res, star rating, cuisine etc, delivery time
      
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

/*
id
resName
cuisines
avgRating
costForTwo
deliveryTime
*/

const resObj = {
  type: "restaurent",
  data: {
    id: "334475",
    name: "KFC",
    cuisines: ["Burers", "Biriyani", "American", "Snacks", "Fast Food"],
    costForTwo: 40000,
    deliveryTime: 36,
    avgRating: "3.8",
    img: "http://b.zmtcdn.com/data/pictures/chains/4/10624/24697b617bb8aaf5b1c7df9a7074a662.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
  },
};

const RestaurentCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#F0F0F0" }}>
      <img alt="res-logo" className="res-logo" src={resData.data.img}></img>
      <h3 className="res-name">{resData.data.name}</h3>
      <h5 className="res-cuisine">{resData.data.cuisines.join(", ")}</h5>
      <h5 className="res-rating"> {resData.data.avgRating} ⭐️</h5>
      <h5 className="res-ETA">{resData.data.deliveryTime} minutes</h5>
      <h5 className="res-ETA">{resData.data.costForTwo / 100}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard resData={resObj} />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="res-copyright-container">
        <div className="copyright-item">
          <h1>©</h1>
        </div>
        <div className="copyright-item-name">
          <h3>Pratham</h3>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
