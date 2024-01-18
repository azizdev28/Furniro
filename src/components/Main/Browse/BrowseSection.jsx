import React from "react";
import "../../Main/Browse/BrowseSection.scss";
import Browse1 from "../../../assets/img/Browse1.png";
import Browse2 from "../../../assets/img/Browse2.png";
import Browse3 from "../../../assets/img/Browse3.png";
const BrowseSection = () => {
  return (
    <div className="container">
      <div className="BrowseWrapper">
        <h3>Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="BrowseCard">
          <div>
            <img src={Browse1} alt="" />
            <h4>Dining</h4>
          </div>
          <div>
            <img src={Browse2} alt="" />
            <h4>Living</h4>
          </div>
          <div>
            <img src={Browse3} alt="" />
            <h4>Bedroom</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;
