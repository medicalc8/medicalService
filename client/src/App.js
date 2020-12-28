import React, { Component } from "react";
import Slideshowa from './ss.jsx';
import Form from './form.jsx';
import Login from './login.js'
import Signin from "./signin.js";
import {Route,BrowserRouter as Router,Switch,Link}from "react-router-dom";


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      logedin : false
    }
  }

  async componentDidMount(){
    if(document.cookie){
      await this.setState({logedin : true});
    }
  }
// handling component to show in single page 
  render() {
    return (
        <div className="App"> 
        <Router>

          <Route path="/" exact>
            <Slideshowa/>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/form">
            <Form></Form>
          </Route>

        </Router>    
        </div>
    )
  }
}
//this code made by anas 



//  App() {
//   return (
//     
//   );
// }

// export default App;
