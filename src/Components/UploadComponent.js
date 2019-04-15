import React, { Component } from "react";
import axios from "axios";

class UploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      csv: '',
      users: []
    }
  }

  onChange(e) 
  {
    let formData = new FormData();
    formData.append('file', e.target.files[0]);
      axios({
        method: 'POST',
        url: 'http://localhost:3002/api/v1/users',
        data: formData,
      })
      .then((list)=>{
        console.log(list);
        this.addNewUsers(list.data)
      }).catch(error=>{console.log("err", error)})
      
    }
    addNewUsers(list){
      this.setState({
        users: this.state.users.concat(list)
      })
    }

  render() {
    return (
      <div>
        <h1>Upload CSV here</h1>
        <input type="file" name="file" onChange={(e)=>this.onChange(e)} />
      </div>
    )
  }
}

export default UploadComponent;