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
                 <Image src={require('./A1.png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (259).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (299).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (301).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (302).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (303).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (304).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (305).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (306).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (307).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (308).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (309).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (310).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (311).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (312).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (313).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (314).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (315).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (316).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (317).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (318).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (319).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (320).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (321).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (322).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (323).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (324).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (325).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (326).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (327).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (328).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (329).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (330).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (331).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (332).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (333).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (334).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (335).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (336).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (337).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (338).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (339).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (340).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (341).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (342).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (343).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (344).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (345).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (346).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (347).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (348).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (349).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (350).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (351).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (352).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (353).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (354).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (355).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (356).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (357).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (358).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (359).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (360).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (361).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (362).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (363).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (364).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (365).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (366).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (367).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (368).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (369).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (370).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (371).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (372).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (373).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (374).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (375).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (376).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (377).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (378).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (379).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (380).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (381).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (382).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
                 <Image src={require('./Screenshot (383).png')} style={{width:"850px",margin:"20px 20px 20px 20px",height:"400px",margin:"20px"}}/>
         
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