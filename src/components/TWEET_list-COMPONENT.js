import React from "react";
import styled from "styled-components";
import CreateTweet from "./CREATE-TWEET-COMPONENT";
import TWEET from "./Tweet-component";

const Tweet = () => {
  return (
    <div className="col-md-4 col-lg-4">
      <CenterSection>
        <h6 className="text-wrap text-align-center d-none d-xl-inline-block d-lg-inline-block d-md-inline-block">
          Latest Tweets
        </h6>
        <div className="rule d-none d-xl-inline-block d-lg-inline-block d-md-inline-block"></div>
        <CreateTweet />
        <TWEET />
      </CenterSection>
    </div>
  );
};

const CenterSection = styled.section`
  padding: 1em;

  .rule {
    border: 0.2px solid #ececec;
  }
  .icontwo {
    font-size: xx-large;
  }
  input {
    border: none;
    background-color: #14171a;
    color: white !important;
  }
`;

export default Tweet;
