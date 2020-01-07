import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import p1 from "../../assets/images/product.jfif";
import p2 from "../../assets/images/product1.jfif";
import p3 from "../../assets/images/product2.jfif";
import p4 from "../../assets/images/product3.jfif";
import Catalog from "../../pages/catalog/catalog";
const Home = props => {
  console.log("props", props);
  const GotoSignUp = () => {
    props.history.push({ pathname: "/signup" });
  };
  return (
    <div>
      <div className="text-center" style={{ color: "white" }}>
        <h2 className="slogan">Shopping just got Zuper Eazy</h2>
        <p className="subtext mx-auto">
          Shopping at the lowest price you can get
        </p>
      </div>
      {/* <Link to='/signup'> */}
      <div className="text-center mt-4" onClick={GotoSignUp}>
        <button className="btn signUpBtn">Join now</button>
      </div>
      {/* </Link> */}

      <div>
        <Catalog />
      </div>
    </div>
  );
};

export default Home;
