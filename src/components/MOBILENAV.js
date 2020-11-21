import React from "react";
import styled from "styled-components";

import { FaHome, FaEnvelope, FaBell, FaSearch } from "react-icons/fa";

const MobileNavigation = () => {
  return (
    <Mnav className=" d-lg-none d-xl-none d-md-none d-sm-inline">
      <div className="rule"></div>
      <ul className="navmobile d-sm-inline" id="navmobile">
        <li>
          <FaHome className="navicon one" />
        </li>
        <li>
          <FaSearch className="navicon" />
        </li>
        <li>
          <FaBell className="navicon" />
        </li>
        <li>
          <FaEnvelope className="navicon" />
        </li>
      </ul>
    </Mnav>
  );
};

const Mnav = styled.nav`
  position: fixed;
  bottom: 0;
  ul {
    list-style-type: none;
  }
  ul li {
    font-size: xx-large;
    display: inline-block;
    padding: 0em 1em 0em 0.7em;
  }
  .one {
    margin-left: -2em;
    color: #1da1f2;
  }
  .rule {
    border: 0.1px solid #ececec;
    width: 100%;
    margin-left: -1.3em;
  }
`;

export default MobileNavigation;
