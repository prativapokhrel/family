import React, { Component } from 'react';
import {Link} from "react-router-dom";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <Link to={{
            pathname: "/userDetails",
            state: {id: this.props.obj.id}
          }}>{ this.props.obj.name }</Link>
        </td>
      </tr>
    );
  }
}

export default TableRow;