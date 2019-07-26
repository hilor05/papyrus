import React, {Component} from 'react';
import './App.css';
import { Image , Button, Grid, Jumbotron, Col,Row, Well } from 'react-bootstrap';
//import { SocialIcon } from 'react-social-icons';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Link from 'react-router-dom/Link';
class admin extends Component {
   render() {
      return (
        <Grid>
           <Jumbotron>
               <Row className="show-grid text-centre">
                 <Col xs={12} sm={4} className="person-wrapper">
                 <div class="card">
                  <Image className="joker" src={require('./riya.jpg')} alt="John" style={{width:"100%"}}/>
                  <p><strong>Riya Karan</strong></p>
                  <p class="title">CEO & Founder,</p>
                  <p>Machar maro company limited</p>
                  <a href="https://dribbble.com"><i class="fa fa-dribbble"></i></a> 
                  <a href="https://twitter.com"><i class="fa fa-twitter"></i></a> 
                  <a href="https://linkedin.com"><i class="fa fa-linkedin"></i></a> 
                  <a href="https://www.facebook.com/riya.karan.1811?ref=br_rs"><i class="fa fa-facebook"></i></a> 
                  <p><button>Contact</button></p>
                </div>
                </Col>
                   <Jumbotron>
                     </Jumbotron>
                   </Row>
          </Jumbotron>
        </Grid>
    
      )
    }
}

  export default admin;