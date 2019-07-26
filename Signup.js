import React, {Component} from 'react';
import {Button} from './App';
import './signup.css';
import './App.css';
import { Jumbotron,Col, Grid,Row} from 'react-bootstrap';

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



class Signup extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
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
            <Grid>
   
            < Col  xs={6} xsOffset={3}>
            <Jumbotron className="hatimatimtim">
            <div col-md-12 className="container">  
            <form action="/action_page.php">
            <div class="imgcontainer">
    <img src={require('./bears.png')} width={200} height={200} alt="Avatar" class="avatar1"/>
  </div>
  <h3 class="text-color">Create a new account</h3>

  <div class="input-container">
    <i style={{borderRadius:"50%"}}class="fa fa-user icon"></i>
    <input class="input-field" type="text" placeholder="Username" name="username" required/>
  </div>

  <div class="input-container">
    <i style={{borderRadius:"50%"}}class="fa fa-envelope icon"></i>
    <input class="input-field" type="email" placeholder="Email" name="email" required/>
  </div>

  <div class="input-container">
    <i style={{borderRadius:"50% important"}}class="fa fa-key icon"></i>
    <input class="input-field" type="password" placeholder="Password" name="password" required/>
  </div>

  <Button type="submit" onClick={this.onSubmit} class="btn">Sign In</Button>
</form>
          </div>
          </Jumbotron>
          </Col>
          </Grid>
          
       
        )
    }
}


export default Signup