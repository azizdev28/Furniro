import React from "react";
import "../Navbar/Navbar.scss";
import Logo from "../../../assets/img/Logo.png";
import { IoMdContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="container">
      <div className="NavbarClass">
        <div className="Logo">
          <img src={Logo} alt="Mebel" />
          <h2>Furniro</h2>
        </div>
        <div className="NavbarItem">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="NavbarIcon">
          <ul>
            <li>
              <a href="#">
                <IoMdContact />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSearch />
              </a>
            </li>
            <li>
              <a href="#">
                <FaRegHeart />
              </a>
            </li>
            <li>
              <a href="#">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
