import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";

import styled from "styled-components";

const SearchBar = () => {
  const openSideNav = () => {
    document.getElementById("mySideNav").style.display = "block";
  };
  const closeSideNav = () => {
    document.getElementById("mySideNav").style.display = "none";
  };
  return (
    <div className="d-lg-none d-xl-none d-md-none">
      <MySection>
        <span>
          <FaUserCircle className="userIcon" onClick={openSideNav} />
        </span>
        <span className="head">Home</span>
        <div className="rule"></div>
        <div id="mySideNav" className="mySideNav">
          <p className="SDHeader">
            Account info{" "}
            <span className="close" id="close" onClick={closeSideNav}>
              X
            </span>
          </p>
          <div className="rule"></div>
          <FaUserCircle className="userIcon" />
          <p>USERNAME</p>
          <p className="greytext smalltext">@username</p>
          <p>
            {" "}
            1000<span className="greytext smalltext"> Following</span> 1800
            <span className="greytext smalltext">Followers</span>
          </p>
          <p className="sdmitem">
            {" "}
            <FaRegUser className="sdicon" /> Profile
          </p>
          <p className="sdmitem">
            <FaRegListAlt className="sdicon" />
            Lists
          </p>
          <p className="sdmitem">
            <FaRegComments className="sdicon" /> Topics
          </p>
          <p className="sdmitem">
            <FaRegBookmark className="sdicon" /> Bookmarks
          </p>
          <p className="sdmitem"> Moments</p>
        </div>
      </MySection>
    </div>
  );
};

const MySection = styled.section`
  margin-top: 0.5em;
  .userIcon {
    font-size: xx-large;
    margin: 0em 0.5em 0.3em 0.2em !important;
  }
  .head {
    font-size: x-large;
    padding: 1em 1em 0em 0em !important;
    margin-top: 2em;
    margin-left: 0.3em;
  }
  .rule {
    border: 0.1px solid #ececec;
    width: 100vw;
  }
  .greytext {
    color: #ececec;
  }
  .smalltext {
    margin-top: -1em;
    font-weight: 200;
  }
  .mySideNav {
    width: 80%;
    background-color: black;
    padding: 1em 1em 0em 1em;
    display: none;
    position: relative;
    z-index: 9;
    margin-top: -4em;
    position: absolute;
  }
  .mySideNav .rule {
    width: 100%;
    margin-bottom: 0.5em;
    margin-left: -1em;
    padding: 0em;
  }
  .SDHeader {
    padding: 1em 1em 0em 1em;
  }
  .sdmitem {
    margin-bottom: 2em;
    font-size: large;
    font-weight: 200;
  }
  .sdicon {
    font-size: x-large;
  }
  .close {
    margin-left: -2em;
    color: #1da1f2;
    font-size: large;
    font-weight: 100;
  }
`;
export default SearchBar;
