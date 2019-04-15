import React, { Component } from "react";
import axios from "axios";

class UploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      csv: '',
      users: [],
      error_messages: ''
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
        this.addNewUsers(list.data);
        this.setState({ error_messages: list.data.errors });
      }).catch(error=>{console.log("err", error)})
      
    }
    addNewUsers(list){
      this.setState({
        users: this.state.users.concat(list)
      })
    }

  render() {
    let alert_message;

    if(this.state.error_messages != ""){
      alert_message = <p style={{color: "red"}}>File already exists</p>
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <br/>
            <h2>Upload CSV here</h2>
            { alert_message }
            <input type="file" name="file" onChange={(e)=>this.onChange(e)} />
          </div>
        </div>
      </div>
    )
  }
}

export default UploadComponent;