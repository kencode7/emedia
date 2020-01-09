import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import p1 from "../../assets/images/product.jfif";
import p2 from "../../assets/images/product1.jfif";
import p3 from "../../assets/images/product2.jfif";
import p4 from "../../assets/images/product3.jfif";
import view from "../../assets/images/view.jpg";

import Catalog from "../../pages/catalog/catalog";


const Home = props => {
  console.log("props", props);
  const GotoSignUp = () => {
    props.history.push({ pathname: "/signup" });
  };
  return (
    <div>
      <div className='landingView' >
      <div className="text-center" style={{ color: "#ffffff" }}>
        <h2 className="slogan">To Territorially Dominate, You need Speed</h2>
        <p className="subtext mx-auto">
          To Maintain Speed, You need <b>GOD'S WORD</b>
        </p>
      </div>
      {/* <Link to='/signup'> */}
      <div className="text-center mt-4" onClick={GotoSignUp}>
        <button className="btn signUpBtn">Subscribe now</button>
      </div>
      {/* </Link> */}
      </div>
      <div>
        <Catalog />
      </div>
    </div>
  );
};

export default Home;
