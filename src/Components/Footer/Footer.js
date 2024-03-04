import React, { useContext } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Footer = () => {
  const { SetMenufunction } = useContext(ShopContext);
  return (
    <div className="footer">
      <div className="goto-top">
        <IoMdArrowDropup />
        <button onClick={() => window.scrollTo(0, 0)}>Top of page</button>
      </div>
      <ul className="footer-links">
        <li
          onClick={() => {
            SetMenufunction("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            SetMenufunction("womens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/womens">
            Women's
          </Link>
        </li>
        <li
          onClick={() => {
            SetMenufunction("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/mens">
            Men's
          </Link>
        </li>
        <li
          onClick={() => {
            SetMenufunction("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/kids">
            Kid's
          </Link>
        </li>
        <li
          onClick={() => {
            SetMenufunction("traditionals");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/traditionals"
          >
            Traditional
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>SHOOPPER</p>
        </div>
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - ALL Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
