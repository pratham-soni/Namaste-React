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

const resObj = [
  {
    type: "restaurent",
    data: {
      id: "334475",
      name: "KFC",
      cuisines: ["Indian", "Biriyani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "http://b.zmtcdn.com/data/pictures/chains/4/10624/24697b617bb8aaf5b1c7df9a7074a662.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334476",
      name: "Red Chilli",
      cuisines: [
        "Burers",
        "Chinese",
        "Mexican",
        "Chicken and Rice",
        "Guac Omelette",
      ],
      costForTwo: 60000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://content.jdmagicbox.com/comp/sonbhadra/c4/9999p5445.5445.230814141224.u8c4/catalogue/radhe-radhe-dhaba-and-shri-ji-family-restaurant-robertsganj-robertsganj-restaurants-i7es679l6e-250.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334477",
      name: "Olive Bar And Kitchen",
      cuisines: [
        "Burers",
        "Biriyani",
        "American",
        "Burers",
        "Chinese",
        "Mexican",
      ],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/olive-qutub1574232660289.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334478",
      name: "Sevilla, The Claridges",
      cuisines: ["American", "Snacks", "Burers", "Biriyani", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/sevilla1.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334479",
      name: "Tonino Ristorante",
      cuisines: ["American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/tonino1574232660871.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334480",
      name: "Ottimo At Westview",
      cuisines: ["Burers", "Biriyani", "American", "Japanise"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/otimo22.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334481",
      name: "Thai High",
      cuisines: ["Burers", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/thai-high1574232660148.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334482",
      name: "Music & Mountains - Hillside Cafe",
      cuisines: ["Burers", "Biriyani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/sakleys-the-mountain-cafe3%2Cjpg456.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334483",
      name: "The Piano Man ",
      cuisines: ["Burers", "Biriyani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/the-paino-man-jazz-club%2Cjpg99.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334484",
      name: "Rose Cafe",
      cuisines: ["Burers", "Biriyani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/rose-cafe1574232660863.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334485",
      name: "Ladera",
      cuisines: ["Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/ladera1574232660612.jpg",
    },
  },
  {
    type: "restaurent",
    data: {
      id: "334486",
      name: "Diggin",
      cuisines: ["Burers", "Biriyani", "Snacks"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      img: "https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/diggin11608291096550.jpg",
    },
  },
];

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
        <RestaurentCard resData={resObj[0]} />
        <RestaurentCard resData={resObj[1]} />
        <RestaurentCard resData={resObj[2]} />
        <RestaurentCard resData={resObj[3]} />
        <RestaurentCard resData={resObj[4]} />
        <RestaurentCard resData={resObj[5]} />
        <RestaurentCard resData={resObj[6]} />
        <RestaurentCard resData={resObj[7]} />
        <RestaurentCard resData={resObj[8]} />
        <RestaurentCard resData={resObj[9]} />
        <RestaurentCard resData={resObj[10]} />
        <RestaurentCard resData={resObj[11]} />
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
