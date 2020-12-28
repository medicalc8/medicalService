import React, { Component } from 'react';
import axios from 'axios';
//sigin component that contain username email password 
export default class signin extends Component {
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:'',
            username:''
        }
        }
        //send data with axios to db
        signin(){
            axios.post('/signin',{
                username:this.state.username,
                email : this.state.email,
                password : this.state.password
            });
        }
        render() {
            return (
                <div className="logs">

                    <h1>Register here</h1>
                    <hr></hr>
                    <input type='text' placeholder="your username please" onChange={(e)=>this.setState({username: e.target.value})}></input>
                    <hr></hr>
                    <input type='email' placeholder="your Email please" onChange={(e)=>this.setState({email: e.target.value})}></input>
                    <hr></hr>
                    <input type='password' placeholder="Enter your password" onChange={(e)=>this.setState({password: e.target.value})}></input>
                    <hr></hr>
                    <button type='submit' onClick={this.signin.bind(this)}>submit</button>
                    <hr></hr>
                </div>
            )
        }
    }
    
    //this code made by anas 