import React, { Component } from "react";
import axios from "axios";
import "../src/signup.css";
//sigin component that contain username email password
export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
    };
  }
  //send data with axios to db
  signin() {
    axios.post("/signin", {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    });
  }
  render() {
    return (
      <div className="logs">
        <h1>Register Here</h1>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Put Your Username "
            onChange={(e) => this.setState({ username: e.target.value })}
          ></input>
        </div>
        <hr></hr>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input
            type="email"
            placeholder="Put Your Email "
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
        </div>
        <hr></hr>
        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          ></input>
        </div>
        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleChangeconfirmpass}
            value={this.state.confirmpassword}
          />
        </div>
        <hr></hr>
        <button className="btn" type="submit" onClick={this.signin.bind(this)}>
          submit
        </button>
        <hr></hr>
      </div>
    );
  }
}

//this code made by anas
