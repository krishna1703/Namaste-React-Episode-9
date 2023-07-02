import React, { useEffect } from "react";
import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link, To } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Networkconnection from "../utils/Networkconnection";
const Header = () => {

  const [login, Setlogin] = useState("Login")

  const OnlineStatus = useOnlineStatus(true)

  return (
    <div className="header">
      <div className="food-logo">
        <img src={LOGO_LINK} />
      </div>
      <div>

      </div>
      <div className="nav-item">
        <ul>
          <li>
          Online Status : {OnlineStatus ? "✅" :<Networkconnection/> }
          </li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/InstaMart">InstaMart</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>


          <button className="log-in" onClick={() => {
            login == "Login" ? Setlogin("Logout") : Setlogin("Login")

          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
