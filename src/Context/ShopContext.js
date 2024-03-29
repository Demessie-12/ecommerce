import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import { showAlert } from "../Components/Alert/Alert";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [menu, setMenu] = useState("shop");
  const [tradition, setTradition] = useState("ethiopia");
  const [delivery, setDelivery] = useState("Addis Ababa");
  //   const [navVisibility, setNavVisibility] = useState(false);

  const SetMenufunction = (i) => {
    setMenu(i);
  };

  const Settradition = (i) => {
    setTradition(i);
  };

  const addToCart = (itemId) => {
    showAlert("success", "Item added to cart");
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    SetMenufunction,
    menu,
    Settradition,
    tradition,
    setDelivery,
    delivery,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
