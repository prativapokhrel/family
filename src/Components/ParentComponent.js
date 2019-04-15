import React from "react";

class ParentComponent extends React.Component {

  render() {
    if (this.props.users) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{this.props.users.user.name}</h1>
              <div class="tree">
                <ul>
                  <li>
                    <a href="#">{this.props.users.user.parent.name}</a>
                    <ul>
                      <li>
                        <a href="#">{this.props.users.user.name}</a>
                        <ul>
                          <li>
                            <a href="#">{this.props.users.user.sons[0].son.name}</a>
                          </li>
                          <li>
                            <a href="#">{this.props.users.user.sons[1].son.name}</a>
                          </li>
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

export default ParentComponent