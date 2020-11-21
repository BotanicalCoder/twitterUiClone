import React from "react";
import { FaShare, FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

import MobileNavigation from './MOBILENAV';

import styled from "styled-components";

const TWEET = () => {
  return (
    <TArticle>
      <div className="UserDetails d-none d-xl-inline-block d-lg-inline-block d-md-inline-block">
        <p>
          {" "}
          <span>
            <FaUserCircle />
          </span>{" "}
          <span>user @user</span> <span>1h</span>{" "}
          <span>
            <FaChevronDown />
          </span>
        </p>
        <p className="tweet">
          this is a tweeter clone created by the botanicalCoder with the use of
          html, css, javascript, react js, bootstrap and lots of love
        </p>
        <p>
          <span>
            <FaRegComment />
          </span>{" "}
          <span>
            <FaRetweet />
          </span>{" "}
          <span>
            <FaRegHeart />
          </span>
        </p>
      </div>
      <div className="mobile tweets d-lg-none d-xl-none d-md-none">
        <div className="tweetcontainer">
          <p>
            {" "}
            <span>
              <FaUserCircle id="user" />
            </span>{" "}
            <span className="bigtext">user </span>{" "}
            <span className="smalltext">@user</span>{" "}
            <span className="smalltext">1h</span>{" "}
            <span>
              <FaChevronDown id="down" />
            </span>
          </p>
          <p className="tweet">
            this is a tweeter clone created by the botanicalCoder with the use
            of html, css, javascript, react js, bootstrap and lots of love
          </p>
          <p>
            <span className="reaction">
              <FaRegComment />
            </span>{" "}
            <span className="reaction">
              <FaRetweet />
            </span>{" "}
            <span className="reaction">
              <FaRegHeart />
            </span>
            <span className="reaction">
              <FaShare />
            </span>
          </p>
          <div className="rule"></div>
        </div>

        <div className="tweetcontainer">
          <p>
            {" "}
            <span>
              <FaUserCircle id="user" />
            </span>{" "}
            <span className="bigtext">user </span>{" "}
            <span className="smalltext">@user</span>{" "}
            <span className="smalltext">1h</span>{" "}
            <span>
              <FaChevronDown id="down" />
            </span>
          </p>
          <p className="tweet">
            this is a tweeter clone created by the botanicalCoder with the use
            of html, css, javascript, react js, bootstrap and lots of love
          </p>
          <p>
            <span className="reaction">
              <FaRegComment />
            </span>{" "}
            <span className="reaction">
              <FaRetweet />
            </span>{" "}
            <span className="reaction">
              <FaRegHeart />
            </span>
            <span className="reaction">
              <FaShare />
            </span>
          </p>
          <div className="rule"></div>
        </div>
        <MobileNavigation/>
      </div>
    </TArticle>
  );
};

const TArticle = styled.article`
  #user {
    font-size: xx-large;
  }
  .rule {
    border: 0.1px solid #ececec;
    width: 100vw;
  }
  .UserDetails {
    border: 0.1px solid #f5f8fa;
    width: 100%;
  }
  .tweetcontainer {
    margin-top: 1em;
    margin-left: -1.5em;
    position: relative;
    top: 0;
  }
  .bigtext {
    font-size: x-large;
  }
  .smalltext {
    font-size: small;
    padding-right: 1em;
  }
  #down {
    margin-left: 5em;
  }
  .reaction {
    padding-left: 2em;
    font-size: larger;
  }
`;

export default TWEET;
