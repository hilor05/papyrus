import React, { Component } from 'react';
import './App.css';
import './authors.css';
import { Navbar,Nav, NavItem,NavDropdown,MenuItem,Col, Row, Jumbotron,Image, Grid} from 'react-bootstrap'

//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Signup from './Signup';
import genre from './genre';
import genre2 from './genre2';
import genre3 from './genre3';
import home from './home';
import authors from './authors';
import UserList from './UserList';
import UserDetails from './UserDetails';
import Login from './Login';
import admin from './admin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Link from 'react-router-dom/Link';

 function Header(props) {
   return(
     <Row style={{background:"white"}}>
       <Col xs={8}>
   <Col xs={1} >
    <Image src={require("./logo.jpg")} style={{marginTop:"25px",marginRight:"0"}}/></Col>
    <Col xs={11}>
  <p style={{ color:" black", fontFamily: "Trocchi, serif",marginLeft:"0",fontSize:" 45px" ,fontWeight:" normal", lineHeight: "48px", marginTop: "80px",textAlign:"left"}}>
  Papyrus | Discover.Connect.Inspire.
  </p></Col>
  </Col>
  <Col xs={4} style={{marginTop:"20px"}}>
  <p>
    <Router>
  <Link to="/Login">
    My library Account | Suggestion Box 
  </Link>
  </Router>
  </p>


 </Col>
 </Row>
   )
  
 }
function Footer(props){
   return(
     <p className="App-intro">
        <Jumbotron  style={{background:"blue"}}>
        <h3 className="text">Follow us on</h3>
        <a href="https://www.facebook.com/riya.karan.1811?ref=br_rs" class="fa fa-facebook"></a>
        <a href="https://twitter.com" class="fa fa-twitter"></a>
        <a href="https://linkedin.com"><i class="fa fa-linkedin"></i></a> 
        <a href="https://www.youtube.com/watch?v=qlWv6RhsVmc"><i class="fa fa-youtube"></i></a> 
        <p className="text">Terms | Privacy | Copyright | Legal | Papyrus:all rights reserved</p>
          </Jumbotron>
       </p>
   )
 }



function Navbar1(){
  return(
<Navbar style={{background:"blue"}}>
  <Navbar.Header>
    <Navbar.Brand>
      <a  href="#home" style={{fontSize:"25px",color:"white", fontFamily: "Open sans, sans-serif"}}>Papyrus</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem  eventKey={1} componentclass={Link} href="/" to="/">
     <p style={{color:"white"}}>Home</p>
    </NavItem>
    <NavItem  eventKey={2} componentclass={Link} href="/Authors" to="/Authors">
     <p style={{color:"white"}}>Authors</p>
    </NavItem>
    <NavDropdown eventKey={3} title="Genre"   className="text-color">
      <MenuItem  eventKey={3.1} href="/#link1"><p className="p.b">Educational</p></MenuItem>
      <MenuItem eventKey={3.2} href="/#link1"><p className="p.b">Story book</p></MenuItem>
      <MenuItem eventKey={3.3} href="/#link1"><p className="p.b">Horror</p></MenuItem>
      <MenuItem eventKey={3.4}href="/#link1" ><p className="p.b">Action</p></MenuItem>
    </NavDropdown>
  </Nav>
  <Nav pullRight>
  <NavItem  eventKey={1} componentclass={Link} href="/Login" to="/Login">
     <p style={{color:"white"}}>Login</p>
    </NavItem>
    </Nav>
</Navbar>
  )
}




export function Button(props){
  return(
    <button 
      type="button" 
      onClick={props.onClick}
      className="btn btn-primary">
        SUBMIT
    </button>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App-header">
      <div className="App">
      <Header/>
        <Navbar1/>
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/Signup" component={Signup} />
            <Route path="/admin" component={admin} />
            <Route path="/genre" component={genre} />
            <Route path="/genre2" component={genre2} />
            <Route path="/genre3" component={genre3} />
            <Route path="/Login" component={Login} />
            <Route path="/authors" component={authors} />
            <Route path="/user-list" component={UserList} />
            <Route path="/user/:userLogin" component={UserDetails} />
          </Switch>
        </Router>
        <Footer/>
      </div>
 </div>
    );
  }
}



export default App;