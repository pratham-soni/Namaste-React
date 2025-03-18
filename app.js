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

const styleCard = {
  backgroundColor: "#F0F0F0",
};

const RestaurentCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-logo"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/5c6d3a34-1ac1-44ca-94cf-7e9122459ebc_945448.jpg"
      ></img>
      <h3 className="res-name">{props.resName}</h3>
      <h5 className="res-cuisine">{props.resCuisine}</h5>
      <h5 className="res-rating"> 4.4 ⭐️</h5>
      <h5 className="res-ETA">38 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard
          resName="Megana Foods"
          resCuisine="Gravy Fish, North Indian"
        />
        <RestaurentCard resName="KFC" resCuisine="Fast Food, potato chips" />
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
