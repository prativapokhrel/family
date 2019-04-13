import React, { Component } from "react";
import axios, { post } from "axios";

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
      fetch('http://localhost:3002/api/v1/users', {
        method: 'POST',
        body: formData,
      }).then((response) => {return response.json()})
      .then((list)=>{
        this.addNewFruit(list)
      })
      
    }
    addNewFruit(list){
      this.setState({
        users: this.state.users.concat(list)
      })
      console.log("wwww", this.state.users);
  }

  render() {
    return (
      <div>
        <h1>Upload CSV here</h1>
        <input type="file" name="file" onChange={(e)=>this.onChange(e)} />
        <Users users = {this.state.users} />
      </div>
    )
  }
}

export default UploadComponent;