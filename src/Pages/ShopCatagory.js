import React, { useContext } from "react";
import "./CSS/ShopCatagory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

export const ShopCatagory = (props) => {
  const { all_product, Settradition, tradition } = useContext(ShopContext);

  const hadletradition = (event) => {
    const { value } = event.target;
    Settradition(value);
  };
  let numOfProduct = 0;
  all_product.map((item, i) => {
    if (props.category === item.category) {
      return numOfProduct++;
    }
    return numOfProduct;
  });

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{numOfProduct}</span> out of 60 products
        </p>
        {props.dropdown === "yes" && (
          <select
            id="tradition"
            value={tradition}
            onChange={hadletradition}
            name="tradition"
          >
            <option value="ethiopia">Ethiopia</option>
            <option value="indian">Indian</option>
            <option value="nigeria">Nigeria</option>
            <option value="arab">Arab</option>
          </select>
        )}
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        }, console.log(tradition))}
      </div>
      {/* <div className="shopcategory-loadmore">
            Explore More
          </div> */}
    </div>
  );
};
