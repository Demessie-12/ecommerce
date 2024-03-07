import React, { useContext } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import RemoveCookie from "../../hooks/RemoveCookie";
import { ShopContext } from "../../Context/ShopContext";

function Dropdown(props) {
  const { SetMenufunction } = useContext(ShopContext);

  const logout = () => {
    props.onClick();
    RemoveCookie("user");
    SetMenufunction("shop");
  };
  return (
    <div className="dropDownProfile">
      <ul className="">
        <li onClick={logout}>
          <Link to="/" style={{ textDecoration: "none" }}>
            LogOut
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
