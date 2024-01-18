import React from "react";
import "../HeaderWrapper/HeaderWrapper.scss";
const HeaderWrapper = () => {
  return (
    <div>
      <div className="WrapperHeader">
        <div className="WrapperCard">
          <span>New Arrival</span>
          <h2>Discover Our New Collection</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis
          </p>
          <button>BUY Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
