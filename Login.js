import React, {Component} from 'react';
import './App.css';
import Signup from './Signup';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './login.css';
import { Image , Grid, Jumbotron,Col, Row } from 'react-bootstrap';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Button} from './App';

import Link from 'react-router-dom/Link';
const Label = (props)=>(
    <label>
    {props.label}
  </label>
)

const Input = ({type, name, placeholder, value, onChange})=>(
    <input type={type}
        name={name} 
        className="form-control col-md-4 offset-md-4" 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        
        />

)
const FormGroup = (props)=>(
    <div className="form-group">
        {props.children}
    </div>
)
class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            password: ''
        }
        this.changeFieldValue = this.changeFieldValue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFieldValue(e){
        const val = e.target.value
        const name = e.target.name 
        this.setState({[name]: val})
    }

    onSubmit(e){
        e.preventDefault();
        console.log('submit button clicked')
        this.props.history.push('/user-list')
    }
    render(){
        return(
            <Grid >
                <Router>
          <Switch>
          <Route path="/Signup" component={Signup} />
          </Switch>
        </Router>
      < Col  xs={6} xsOffset={3}>
                <form >
                    <Jumbotron className="hatimatimtim">
  
<div class="container1" id="link9">
<img src={require('./avatar.jpg')} width={200} height={200} alt="Avatar" class="avatar"/>
  <div class="overlay1">
    <a href="https://photos.google.com/" class="icon1" title="User Profile">
      <i class="fa fa-user"></i> 
    </a>
  </div>
</div>

  <div class="container">
    <label for="uname" class="text-color"><b>Username</b></label>
    <FormGroup>
    <Input type='text' 
                    name='email'
                    value={this.state.name}
                    onChange={this.changeFieldValue}
                    placeholder='Type Your Name' 
        
                    />
              </FormGroup>
    <FormGroup>
    <label for="psw" class="text-color"><b>password</b></label>
                <Input type='password' 
                    name='password' 
                    value={this.state.password}
                    onChange={this.changeFieldValue}
                    placeholder='Type Your Password' />
              </FormGroup>

    <button type="submit">Login</button>
    <label  class="text-color">
      <input type="checkbox" checked="checked"  name="remember"/> Remember me
    </label>
  </div>

  <div class="container">
  <Link to="./">
    <button type="button"  class="cancelbtn">Cancel</button
    ></Link>
    <Link to="/Signup">
    <button type="button" class="cancelbtn1">Create New Account</button>
    </Link>
  </div>
  </Jumbotron>
</form>
</ Col>>
          </Grid>
        )
    }
}

  export default Login;