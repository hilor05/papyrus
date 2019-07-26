import React, {Component} from 'react';
import './App.css';
import { Image , Button, Grid, Jumbotron, Col,Row, Well, Navbar,NavItem,MenuItem,NavDropdown,Nav } from 'react-bootstrap';
//import { SocialIcon } from 'react-social-icons';
class genre3 extends Component {
    
    render() {
        window.onscroll = function() {myFunction()};
        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
          }
       return (
          
        
         <Grid>
                 <Row>    
 <h1    style={{ fontSize: "40px"
,    margin: "-2px 0 20px 10px",
    fontWeight:" 400",
    fontFamily:"Georgia,Serif",
    float:"left",
    fontStyle: "italic"}}>"The Kite Runner by Khaled Hosseini"</h1>
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
                <Image src={require('./Screenshot (406).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (407).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (408).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (409).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (410).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (411).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (412).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (413).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (414).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (415).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (416).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (417).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (418).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (419).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (420).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (421).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (422).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (423).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (424).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (425).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (426).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (427).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (428).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (429).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (430).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (431).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (432).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (434).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (434).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (435).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (436).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (437).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (438).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (439).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (440).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (441).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (442).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (344).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (444).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (445).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (446).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (447).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (448).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (449).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (450).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (451).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (452).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (354).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (454).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (455).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (456).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (457).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (458).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (459).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (460).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (461).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (462).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (463).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (464).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (465).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (466).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (467).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (468).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (469).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (470).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (471).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (472).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (473).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (474).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (475).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (476).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (477).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (478).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (479).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (480).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (481).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (482).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (483).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (484).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (485).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (486).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (487).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (488).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (489).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (490).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (491).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (492).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (493).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (494).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (495).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (496).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (497).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (498).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (499).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (500).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (501).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (502).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (503).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (504).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"500px",margin:"20px"}}/>
                 
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
 
   export default genre3;