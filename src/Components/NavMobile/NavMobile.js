import React from "react";
import "./NavMobile.css";
import banner1 from "../Assets/banner 1.jpg";
import banner2 from "../Assets/banner 2.jpg";
import banner3 from "../Assets/banner 3.jpg";
import banner4 from "../Assets/banner 4.jpg";
import banner5 from "../Assets/banner 5.jpg";
import banner6 from "../Assets/banner 6.jpg";
import { IoHome } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavMobile = ({ isopen, setIsOpen }) => {
  return (
    <div className="navMobile">
      <div className="navMobile-main">
        <div className="top">
          <div className="wrapper">
            <img src={banner1} alt="banner1" />
            <img src={banner2} alt="banner2" />
            <img src={banner3} alt="banner3" />
            <img src={banner4} alt="banner4" />
            <img src={banner5} alt="banner5" />
            <img src={banner6} alt="banner6" />
          </div>
        </div>
        <div className="home">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <div>
              <p>ShopIt Home</p>
              <IoHome />
            </div>
          </Link>
        </div>
        <hr />
        <div className="topCategory">
          <h2>Top Category</h2>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/mens"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Male
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/womens"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Female
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/kids"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Kids
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/traditionals"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Traditional
          </Link>
        </div>
      </div>
      <div
        className="navMobile-side"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div
          className="icon"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <IoCloseSharp />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
