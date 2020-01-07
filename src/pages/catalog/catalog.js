import React from "react";
import "./catalog.css";
import p1 from "../../assets/images/product.jfif";
import p2 from "../../assets/images/product1.jfif";
import p3 from "../../assets/images/product2.jfif";
import p4 from "../../assets/images/product3.jfif";
const ConsumerDashboard = () => {
  return (
    <div>
      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">New Messages</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
              <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p3})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p2})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">Mp3 Series</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p4})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">Conference messages</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p2})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p3})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">Single messages</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p3})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p2})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p4})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Thanksgiving</div>
              <span style={{ color: "rgb(122, 120, 120)", fontWeight: 100, fontSize: 13 }}>
                by{" "}
              </span>
              <span className="productOwner">CeCe Ekwuagana</span>
              <div className="productPrice">&#8358;100.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
