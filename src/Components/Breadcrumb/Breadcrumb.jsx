import React from "react";
import "./Breadcrumb.css";
import forward_arrow from "../Assets/breadcrum_arrow.png";

function Breadcrumb(props) {
  const { product } = props;
  return (
    <div className="breadcrumb">
      HOME <img src={forward_arrow} alt="" />
      SHOP <img src={forward_arrow} alt="" />
      {product.category} <img src={forward_arrow} alt="" />
      {product.name}
    </div>
  );
}

export default Breadcrumb;
