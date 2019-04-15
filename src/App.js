import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UsersComponent from "./Components/UsersComponent";
import UserDetailsComponent from "./Components/UserDetailsComponent";
// import NewEmployee from "./Components/Employee/new";
// <Route exact path="/employee/new" component={NewEmployee} />

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={UsersComponent} />
      <Route exact path="/userDetails" component={UserDetailsComponent} />
    </Router>
  );
};

export default App;
