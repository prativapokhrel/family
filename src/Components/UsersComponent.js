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
    axios.get("http://localhost:3002/api/v1/users")
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
      <div className="container">
        <div className="wrapper">
          <UploadComponent />
          <br/>
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
      </div>
    )
  }
}

export default UsersComponent;