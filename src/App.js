import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Employee from "./Components/UploadComponent";
// import NewEmployee from "./Components/Employee/new";
// <Route exact path="/employee/new" component={NewEmployee} />

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Employee} />
    </Router>
  );
};

export default App;
