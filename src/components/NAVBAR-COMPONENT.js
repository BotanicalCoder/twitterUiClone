import React from "react";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaEnvelope,
  FaUser,
  FaBookmark,
  FaListUl,
  FaBell,
  FaHashtag,
  FaTwitter,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <Mynav>
      <ul className="col-md-4 col-lg-4 d-none d-xl-inline-block d-lg-inline-block d-md-inline-block">
        <li id="bird">
          {" "}
          <FaTwitter
            style={{ fontSize: "xx-large", color: "#1DA1F2" }}
            className="pl-1"
          />
        </li>
        <NavLink to="/" exact>
          <li>
            {" "}
            <FaHome className="icon" /> Home
          </li>
        </NavLink>

        <li>
          <FaHashtag className="icon" /> Explore
        </li>

        <NavLink to="/Notifications">
          <li>
            <FaBell className="icon" />
            Notifications
          </li>
        </NavLink>

        <NavLink
          to="/Messages"
          activeStyle={{ backgroundColor: "#1DA1F2", color: "white" }}
        >
          <li>
            <FaEnvelope className="icon" />
            Messages
          </li>
        </NavLink>

        <li>
          <FaBookmark className="icon" />
          Bookmarks
        </li>

        <li>
          <FaListUl className="icon" />
          Lists
        </li>

        <li>
          <FaUser className="icon" />
          Profile
        </li>

        <li>
          <FaHome className="icon" />
          More
        </li>
      </ul>
    </Mynav>
  );
};

const Mynav = Styled.nav`
  ul li{
    list-style-type: none;
    color:#f5f8fa;
    padding:0.5em 1em;
    font-size:large;
    width:200px;
  }
  li:hover {
    background-color: #1DA1F2;
    color:white;
    border-radius:20px 20px;
  }
  .icon{
    font-size:larger;
    margin-right:2px;
    color:white;
  }
  #bird:hover {
    background-color: black;
   
    border-radius:20px 20px;
  }
  
 
`;

export default Navbar;
