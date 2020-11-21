import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

const CreateTweet = () => {
  return (
    <Tweet className="d-none d-xl-inline-block d-lg-inline-block d-md-inline-block">
      <form>
        <FaUserCircle className="icontwo" />{" "}
        <span>
          <input
            type="text"
            placeholder="Whats Happening ?"
            className="color-internal-light "
          />
        </span>
      </form>
    </Tweet>
  );
};

const Tweet = styled.div`
  margin-top: 0.1em;
  border: 0.5px solid #f5f8fa;
  width: 100%;

  padding: 0.5em 2em 1em 1em;
  .icontwo {
    margin-left: -0.5em;
  }
  input {
    padding: 1em 0.1em;
    margin-left: -0.2em;
  }
`;

export default CreateTweet;
