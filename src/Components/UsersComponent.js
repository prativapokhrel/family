import React from "react";
import TableRow from "./TableRow";
import axios from "axios";
import UploadComponent from "./UploadComponent";

class UsersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://family-tree-api.herokuapp.com/api/v1/users")
    .then(response => {
      this.setState({ users: response.data })
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  tabRow() {
    return this.state.users.map(function(object, i) {
      return <TableRow obj={object} key={i} />
    });
  }

  render() {
    return(
      <div className="wrapper">
        <UploadComponent />
        <h3>Family hierarchy</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>  
        </table>
      </div>
    )
  }
}

export default UsersComponent;