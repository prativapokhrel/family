import React from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";
import "./UserDetail.css";

class UserDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  componentDidMount() {
    console.log("test", this.props);
    const id = this.props.location.state.id;
    fetch(`https://family-tree-api.herokuapp.com/api/v1/users/${id}`)
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
        <div class="tree">
          <ul>
            <li>
              <a href="#">Parent</a>
              <ul>
                <li>
                  <a href="#">Child</a>
                  <ul>
                    <li><a href="#">Grand Child</a></li>
                    <li><a href="#">Grand Child</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Child</a>
                  <ul>
                    <li><a href="#">Grand Child</a></li>
                    <li><a href="#">Grand Child</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Child</a>
                  <ul>
                    <li><a href="#">Grand Child</a></li>
                    <li><a href="#">Grand Child</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default UserDetailsComponent