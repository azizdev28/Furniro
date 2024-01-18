import React from "react";
import OurProduct1 from "../../../assets/img/OurProduct1.png";
import OurProduct2 from "../../../assets/img/OurProduct2.png";
import OurProduct3 from "../../../assets/img/OurProduct3.png";
import OurProduct4 from "../../../assets/img/OurProduct4.png";
import OurProduct5 from "../../../assets/img/OurProduct5.png";
import OurProduct6 from "../../../assets/img/OurProduct6.png";
import OurProduct7 from "../../../assets/img/OurProduct7.png";
import OurProduct8 from "../../../assets/img/OurProduct8.png";
import "../OurProducts/OurProducts.scss";

const OurProducts = () => {
  return (
    <div>
      <div className="container">
        <div className="OurProduct">
          <h3>Our Products</h3>

          <div className="OurProductCards">
            <div className="OurProductCard">
              <img src={OurProduct1} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="OurProductCard">
              <img src={OurProduct2} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="OurProductCard">
              <img src={OurProduct3} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="OurProductCard">
              <img src={OurProduct4} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="OurProductCard">
              <img src={OurProduct5} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="OurProductCard">
              <img src={OurProduct6} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="OurProductCard">
              <img src={OurProduct7} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="OurProductCard">
              <img src={OurProduct8} alt="" />

              <h4>Syltherine</h4>
              <span>Stylish cafe chair</span>
              <div>
                <p>Rp 2.500.000</p>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
          </div>
          <button>Show More</button>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
