import React, { Component } from "react";
import axios from "axios";
import "../src/login.css";
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  //send data of login to db
  async login() {
    await axios
      .post("/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (res) {
        if (res.data.status === "successLogg") {
          console.log(res);
          document.cookie = `username=${res.data.useremail},${res.data.username}`;
          window.location.replace("/form");
        }
      });
  }
  render() {
    return (
      <div className="logs">
        <h1>login</h1>
        <hr></hr>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
        </div>
        <hr></hr>
        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          ></input>
        </div>
        <hr></hr>
        <button className="btn" type="submit" onClick={this.login.bind(this)}>
          Submit
        </button>
        <hr></hr>
      </div>
    );
  }
}
//this code made by anas
