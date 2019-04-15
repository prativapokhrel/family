import React from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

export default class UserDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  componentDidMount() {
    console.log("test", this.props);
    const id = this.props.location.state.id;
    fetch(`http://localhost:3002/api/v1/users/${id}`)
      .then(response => {
        response.json().then(data => {
          this.setState({ users: data });
          data.user.sons.map(son => {
            // son.sons.map(s => {
            // });
          });
          console.log("e", data);
        });
      })
      .catch(error => {
        console.log("eee", error);
      });
  }

  render() {
    if (this.state.users) {
      console.log("dat", this.state.users.user);
      return (
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Parent</th>
              <th>Grandparent</th>
              <th>Son</th>
              <th>Grandson</th>
            </tr>
            <tr>
              <td>{this.state.users.user.name}</td>
              <td>{this.state.users.user.address_line_1}</td>
              <td>{this.state.users.user.parent}</td>
              <td>{this.state.users.user.grandparent}</td>
              <td>
                {this.state.users.user.sons.map(son => {
                  return (
                    <tr key={son.son.id}>
                      <td>{son.son.name}</td>
                    </tr>
                  );
                })}
              </td>
              <td>
                {this.state.users.user.sons.map(son => {
                  return son.son.sons.map(s => {
                    return (
                      <tr key={s.son.id}>
                        <td>{s.son.name}</td>
                      </tr>
                    );
                  });
                })}
              </td>
            </tr>
          </table>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
