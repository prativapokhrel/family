import React from "react";
import "react-treeview/react-treeview.css";
import "./UserDetail.css";
import GrandParentComponent from "./GrandParentComponent";
import GrandChildComponent from "./GrandChildComponent";
import ParentComponent from "./ParentComponent";

class UserDetailsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: null, 
      is_parent: false,
      is_grandparent: false,
      is_grandchild: false,
      error: ""
    };
  }

  componentDidMount() {
    const id = this.props.location.state.id;
    fetch(`http://localhost:3002/api/v1/users/${id}`)
      .then(response => {
        response.json().then(data => {
          this.setState({ 
            users: data,
            is_parent: data.is_parent,
            is_grandparent: data.is_grandparent,
            is_grandchild: data.is_grandchild
          });
        })

      }).catch(error => {console.log("eee", error);});
  }

  render() {
    if (this.state.users) {
      return (
        <div className="wrapper">
          { this.state.users.user.is_grandparent && <GrandParentComponent users={ this.state.users }/> }
          { this.state.users.user.is_grandchild && <GrandChildComponent users={ this.state.users }/> }
          { this.state.users.user.is_parent && <ParentComponent users={ this.state.users }/> }
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default UserDetailsComponent