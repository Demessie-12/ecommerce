import React, { useContext } from "react";
import "./Delivery.css";
import { ShopContext } from "../../Context/ShopContext";
import { IoLocation } from "react-icons/io5";

const Delivery = () => {
  const { delivery, setDelivery } = useContext(ShopContext);
  const hadledelivery = (event) => {
    const { value } = event.target;
    setDelivery(value);
  };
  return (
    <div className="delivery">
      <div className="locationIcon">
        <IoLocation />
      </div>
      <p>Delivery to</p>
      <form>
        <select
          id="delivery"
          value={delivery}
          onChange={hadledelivery}
          name="delivery"
        >
          <option value="Addis Ababa">Addis Ababa</option>
          <option value="Hawasa">Hawasa</option>
          <option value="BahirDar">BahirDar</option>
          <option value="Jimma">Jimma</option>
        </select>
      </form>
    </div>
  );
};

export default Delivery;
