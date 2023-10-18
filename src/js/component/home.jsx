import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <Card />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
