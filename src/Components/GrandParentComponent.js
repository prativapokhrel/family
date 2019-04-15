import React from "react";

class GrandParentComponent extends React.Component {

  render() {
    if (this.props.users) {
      console.log("dat", this.props.users.user.sons[0].son.sons[0].son.name);
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{this.props.users.user.name}</h1>
              <div class="tree">
                <ul>
                  <li>
                    <a href="#">{this.props.users.user.name}</a>
                    <ul>
                      <li>
                        <a href="#">{this.props.users.user.sons[0].son.name}</a>
                        <ul>
                          <li><a href="#">{this.props.users.user.sons[0].son.sons[0].son.name}</a></li>
                          <li><a href="#">{this.props.users.user.sons[0].son.sons[1].son.name}</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">{this.props.users.user.sons[1].son.name}</a>
                        <ul>
                          <li><a href="#">{this.props.users.user.sons[1].son.sons[0].son.name}</a></li>
                          <li><a href="#">{this.props.users.user.sons[1].son.sons[1].son.name}</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">{this.props.users.user.sons[2].son.name}</a>
                        <ul>
                          <li><a href="#">{this.props.users.user.sons[2].son.sons[0].son.name}</a></li>
                          <li><a href="#">{this.props.users.user.sons[2].son.sons[0].son.name}</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default GrandParentComponent