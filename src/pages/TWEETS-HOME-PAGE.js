import React from "react";

import Trends from "./TRENDS-PAGE";
import SearchBar from "../components/SEARCHBAR-COMPONENT";
import Navbar from "../components/NAVBAR-COMPONENT";
import Tweet from "../components/TWEET_list-COMPONENT";

const Tweets = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SearchBar />
        <Navbar />
        <Tweet />
        <Trends />
      </div>
    </div>
  );
};

export default Tweets;
