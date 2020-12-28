import React, { Component } from 'react'
import axios from 'axios'
export default class login extends Component {
    constructor(props){
    super(props)
    this.state ={
        email:'',
        password:''
    }
    }
    //send data of login to db 
    async login(){
       await axios.post('/login',{
            email : this.state.email,
            password : this.state.password
        }).then(function (res) {
            if(res.data.status === 'successLogg'){
                console.log(res);
                document.cookie = `username=${res.data.useremail},${res.data.username}`;
                window.location.replace("/form");
            }
          })
    }
    render() {
        return (
            <div className="logs">
                <h1>login</h1>
                <hr></hr>
                <input type='email' placeholder="enter your Email please" onChange={(e)=>this.setState({email: e.target.value})}></input>
                <hr></hr>
                <input type='password' placeholder="enter your password please" onChange={(e)=>this.setState({password: e.target.value})}></input>
                <hr></hr>
                <button type='submit' onClick={this.login.bind(this)}>submit</button>
                <hr></hr>
            </div>
        )
    }
}
//this code made by anas