import React from "react";
import FuniroFurniture1 from "../../../assets/img/FuniroFurniture1.png";
import FuniroFurniture2 from "../../../assets/img/FuniroFurniture2.png";
import FuniroFurniture3 from "../../../assets/img/FuniroFurniture3.png";
import FuniroFurniture6 from "../../../assets/img/FuniroFurniture6.png";
import FuniroFurniture7 from "../../../assets/img/FuniroFurniture7.png";
import FuniroFurniture8 from "../../../assets/img/FuniroFurniture8.png";
import FuniroFurniture9 from "../../../assets/img/FuniroFurniture9.png";
import FuniroFurniture4 from "../../../assets/img/FuniroFurniture4.png";
import FuniroFurniture5 from "../../../assets/img/FuniroFurniture5.png";
import "../FuniroFurniture/FuniroFurniture.scss";
const FuniroFurniture = () => {
  return (
    <div className="container">
      <div className="FuniroFurniture">
        <p>Share your setup with</p>
        <h3>FuniroFurniture</h3>
      </div>
      <div className="FuniroFurnitureCards">
        <div className="four">
          <img className="fourth" src={FuniroFurniture4} alt="" />
          <img className="fiveth" src={FuniroFurniture5} alt="" />
        </div>
        <div className="two">
          <img className="first" src={FuniroFurniture2} alt="" />
          <img className="second" src={FuniroFurniture3} alt="" />
        </div>
        <div className="one">
          <img src={FuniroFurniture1} alt="" />
        </div>
        <div className="three">
          <img className="six" src={FuniroFurniture6} alt="" />
          <img className="seven" src={FuniroFurniture7} alt="" />
        </div>
        <div className="five">
          {/* <img className="eight" src={FuniroFurniture8} alt="" /> */}
          {/* <img className="nine" src={FuniroFurniture9} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default FuniroFurniture;
