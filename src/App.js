import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
/*import "bootstrap/dist/js/bootstrap.min.js";*/
import "jquery";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Tweets from "./pages/TWEETS-HOME-PAGE";
import Trends from "./pages/TRENDS-PAGE";
import Notifications from "./pages/NOTIFICATIONS-PAGE";
import Messages from "./pages/MESSAGES-PAGE";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Tweets} />
        <Route path="/Trends" component={Trends} />
        <Route path="/Notifications" component={Notifications} />
        <Route path="/Messages" component={Messages} />
      </Switch>
    </Router>
  );
}

export default App;
