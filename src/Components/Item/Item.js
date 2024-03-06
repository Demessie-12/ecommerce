import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item" id={`ID${props.id}`}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/product/${props.id}`}>
        <p onClick={window.scrollTo(0, 0)}>{props.name}</p>
      </Link>
      <div className="item-footer">
        <div className="item-prices">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
        <div className="item-detail">
          <Link to={`/product/${props.id}`}>
            <button onClick={window.scrollTo(0, 0)}>Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
