import React from "react";
import { Link } from "react-router-dom";
import Dp from "../../assets/images/product1.jfif";
import "./cart.css";
const Cart = () => {
  return (
    <div>
      <div>
        <Link to="/catalog">
          <span
            className="fa fa-arrow-left mx-4 my-4"
            style={{ color: "yellow", fontSize: 26 }}
          ></span>
        </Link>
      </div>

      <div className="row mt-5" style={{ margin: 0 }}>
        <div className="col-md-8" style={{ overflow: "auto" }}>
          <div className="row" style={{ margin: 0, marginTop: "2.5rem" }}>
            <div className="col-4">
              <div className="cartItemImg d-flex align-items-center">
                <img src={Dp} alt="product" width="100%" />
              </div>
            </div>
            <div className="col-8 cartItem">
              <div>Item name: HeadSet</div>
              <div>
                Quantity:{" "}
                <input
                  type="number"
                  value={1}
                  style={{ width: "5vw", display: "inline" }}
                  className="form-control"
                />
              </div>
              <div>Item Price: $100</div>
            </div>
          </div>
          <hr style={{ background: "rgb(255,173,0)" }} />
          <div className="row" style={{ margin: 0, marginTop: "2.5rem" }}>
            <div className="col-4">
              <div className="cartItemImg d-flex align-items-center justify-content-center">
                <img src={Dp} alt="product" width="100%" />
              </div>
            </div>
            <div className="col-8 cartItem">
              <div>Item name: HeadSet</div>
              <div>
                Quantity:{" "}
                <input
                  type="number"
                  value={1}
                  style={{ width: "5vw", display: "inline" }}
                  className="form-control"
                />
              </div>
              <div>Item Price: $100</div>
            </div>
          </div>
          <hr style={{ background: "yellow" }} />
          <div className="row" style={{ margin: 0, marginTop: "2.5rem" }}>
            <div className="col-4">
              <div className="cartItemImg d-flex align-items-center justify-content-center">
                <img src={Dp} alt="product" width="100%" />
              </div>
            </div>
            <div className="col-8 cartItem">
              <div>Item name: HeadSet</div>
              <div>
                Quantity:{" "}
                <input
                  type="number"
                  value={1}
                  style={{ width: "5vw", display: "inline" }}
                  className="form-control"
                />
              </div>
              <div>Item Price: $100</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="checkOutCard">
            <p className="orderSum text-center pt-2">Order Summary</p>
            <div className="mt-5 px-3">
              <span>Subtotal:</span>
              <span style={{ float: "right" }}>$300</span>
              <hr style={{ background: "black" }} />
            </div>
            <div className="mt-5 px-3">
              <span>Delivery cost:</span>
              <span style={{ float: "right" }}>$50</span>
              <hr style={{ background: "black" }} />
            </div>
            <div className="px-3" style={{ fontSize: 22, marginTop: "3.5rem" }}>
              <span>
                <b>Total:</b>
              </span>
              <span style={{ float: "right" }}>
                <b>$350</b>
              </span>
              <hr style={{ background: "black" }} />
            </div>

            <div className="text-center" style={{ marginTop: "3.5rem" }}>
              <button className="btn btn-success" style={{ width: "90%" }}>
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
