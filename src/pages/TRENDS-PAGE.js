import React from "react";
import styled from "styled-components";
import Trend from "../components/TREND-COMPONENT";
import { FaSearch } from "react-icons/fa";

const Trends = () => {
  return (
    <Mysection className="col-md-4 col-lg-4 d-none d-xl-inline-block d-lg-inline-block d-md-inline-block">
      <div className="searchComponent my-2 col-md-4">
        <p>
          <FaSearch className="icon" />
          <input type="text" value="Search twitter" readOnly />
        </p>
      </div>

      <div className="trends col-md-4">
        <h6>Trends for you</h6>
        <hr />

        <Trend />
      </div>
    </Mysection>
  );
};

const Mysection = styled.section`
  .searchComponent {
    padding: 2px 5px;
  }
  .searchComponent input,
  .searchComponent p {
    background: rgb(75, 73, 73);
    border-radius: 20px 20px;
    margin-left: 12px;
  }

  .searchComponent p {
    margin-left: -1em;
    width: 210px;
  }
  .icon {
    margin-left: 2px;
  }
  .searchComponent input {
    border: none;
  }
  .icon,
  .searchComponent input {
    color: lightgray;
  }
  .trends h6 {
    background: rgb(75, 73, 73);
    padding: 2px 5px;
    width: 215px;
    margin-left: -2em;
    margin-right: 1em;
    margin-bottom: -2em;
    border-radius: 20px 20px 0px 0px;
  }

  .trends p {
    color: white;
  }
  .trends div {
    background: rgb(75, 73, 73);
    width: 200px;
    margin-left: -1em;
  }
  .rule {
    margin-left: 0em !important;
    margin-right: 0em !important;
    border: 0.1px solid #d3d3d3 !important;
    max-width: 30vw !important;
  }
  .last-p {
    margin-bottom: 0em;
  }
`;

export default Trends;
