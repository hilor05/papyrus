import React, {Component} from 'react';
import './App.css';
import { Image , Button, Grid, Jumbotron, Col,Row, Well, Navbar,NavItem,MenuItem,NavDropdown,Nav } from 'react-bootstrap';
//import { SocialIcon } from 'react-social-icons';
class genre extends Component {
    
    render() {
        window.onscroll = function() {myFunction()};
        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
          }
       return (
          
        
         <Grid >
                 <Row>    
 <h1    style={{ fontSize: "40px"
,    margin: "-2px 0 20px 10px",
    fontWeight:" 400",
    fontFamily:"Georgia,Serif",
    float:"left",
    fontStyle: "italic"}}>"The Cursed Child by J K Rolling"</h1>
  </Row>
            <Jumbotron>
      <Well style={{margin:"auto"}}>
      <div style={{background:"blue",margin:"2px"}} class="topnav">
  <a  class="active" href="#home">Home</a>
  <a style={{color:"white"}} href="#">Previous</a>
  <a style={{color:"white"}} href="#">Next</a>
  <Nav pullRight>
  <i style={{color:"white"}} class="fa fa-search"></i></Nav><Nav pullRight>
  <input  type="text"  placeholder="Search in this book"/></Nav>
</div>
                <Col style={{float:"none",overflow:"scroll",background:""}}>
                <div   style={{background:"smokewhite",padding:"20px",height:"600px",width:"600px"}}>
            <div >
                <Image src={require('./page1.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page2.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page3.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page4.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page5.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page6.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page7.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page8.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page9.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page10.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page11.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page12.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page13.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page14.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page15.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page16.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./page17.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./18.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./19.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./20.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./21.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./22.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./23.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./24.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./25.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./26.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./27.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./28.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./29.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./30.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./31.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./32.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./33.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./34.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./35.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./36.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./37.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./38.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./39.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./40.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./41.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./42.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./43.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./45.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./46.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./47.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./48.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./49.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./50.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-1.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-2.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-3.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-4.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-5.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-6.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-7.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-8.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-9.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                <Image src={require('./-10.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"600px",margin:"20px"}}/>
                
<div  style={{position:"fixed"}} class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div> 
  </div>
  </div>
</Col>
</Well>
           </Jumbotron>
         </Grid>
     
       )
     }
 }
 
   export default genre;