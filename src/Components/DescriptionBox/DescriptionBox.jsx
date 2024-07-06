import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to Fashion Hub, your ultimate destination for stylish and
          trendy clothing for the entire family. We specialize in offering a
          diverse range of high-quality fashion wear for men, women, and
          children, ensuring that everyone can find something they love.
        </p>
        <p>
          At Fashion Hub, we are committed to providing you with an exceptional
          shopping experience and the latest in fashion for men, women, and
          children. Start exploring our collections today and find your perfect
          style!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
