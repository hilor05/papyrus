import React, {Component} from 'react';
import {Carousel1} from './CarouselUI';
import './App.css';
import './authors.css';
import { Image ,Thumbnail, Button,Carousel, Grid, Jumbotron, Nav,Panel,PanelGroup,Popover,OverlayTrigger, Well,Col,Row } from 'react-bootstrap';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Link from 'react-router-dom/Link';

class home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }
   render() {
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title="New to this??">
        <strong bsStyle="success"> I see a book,I see a coffee I see a good day ahead;)..</strong>
      </Popover>
    );
    const popoverHoverFocus1 = (
      <Popover id="popover-trigger-hover-focus" title="Login for more">
        <strong bsStyle="success"> “Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.”..</strong>
      </Popover>
    );
    const popoverHoverFocus2 = (
      <Popover id="popover-trigger-hover-focus" title="wanna meet riya?">
        <strong bsStyle="success">Believe me u don't</strong>
      </Popover>
    );
      return (
        <div >
    <Row>    
 <h1    style={{ fontSize: "40px"
,    margin: "-2px 0 20px 10px",
    fontWeight:" 400",
    fontFamily:"Georgia,Serif",
    float:"left",
    fontStyle: "italic"}}>“People can lose their lives in libraries. They ought to be warned.”</h1>
  </Row>
  <img  src={require("./crap1.png")} />
          <Carousel1 />

      
          
          
          <Row>
<Col xs={6} style={{background:"white",marginLeft:"40px"}}>
<Row>    
 <h1    style={{ fontSize: "30px"
,    margin: "20px 200px 20px 20px",
textDecoration:"underline",
    fontWeight:" 400",
    fontFamily:"Georgia,Serif",
    fontStyle: "italic"}}>Books U might Like</h1>
  </Row><Col xs={4}>

<img style={{margin:"8px"}} src={require("./toy.gif")} />
<img  style={{margin:"8px"}} src={require("./kill.gif")} />
<img style={{margin:"8px"}} src={require("./lean.gif")} />
</Col>
<Col xs={8} >
<strong style={{ fontSize:"18px",textAlign:"left",fontFamily: "Times New Roman,helvetica,san-serif"}}>Girl, Wash Your Face: Stop Believing the Lies about Who You Are So You Can Become Who You Were Meant to Be</strong>
<p style={{color:"red",fontSize:"14px",textAlign:"left"}}>Rachel Hollis</p>
<p  style={{ fontSize:"14px",textAlign:"left"}}>With wry wit and hard-earned wisdom, popular online personality and founder of TheChicSite.com Rachel Hollis helps readers break free from the lies keeping them from the joy-filled and exuberant life they are meant to have.</p>
<strong style={{ fontSize:"18px",textAlign:"left",fontFamily: "Times New Roman,helvetica,san-serif"}}>To Kill A Mocking Bird</strong>
<p style={{color:"red",fontSize:"14px",textAlign:"left"}}> Harper Lee</p>
<p  style={{ fontSize:"14px",textAlign:"left"}}>'Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird' Meet Scout, the narrator of this book. Her story is one of Deep South summers, fights at school and playing in the street. The spooky house of her mysterious neighbour, Boo Radley, sags dark and forbidding nearby.. </p>
<strong style={{ fontSize:"18px",textAlign:"left",fontFamily: "Times New Roman,helvetica,san-serif"}}>Lean in:Women,Work and the Will to Lead</strong>
<p style={{color:"red",fontSize:"14px",textAlign:"left"}}> Sheryl Sandberg</p>
<p  style={{ fontSize:"14px",textAlign:"left"}}>Sheryl Sandberg's Lean In is a massive cultural phenomenon and its title has become an instant catchphrase for empowering women. The book soared to the top of bestseller lists internationally, igniting global conversations about women and ambition. Sandberg packed theatres, dominated opinion pages, appeared on every major television show and...</p>
<strong style={{ fontSize:"18px",textAlign:"left",fontFamily: "Times New Roman,helvetica,san-serif"}}>The Memory Keeper's Daughter</strong>
<p style={{color:"red",fontSize:"14px",textAlign:"left"}}>Kim Edwards</p>
<p  style={{ fontSize:"14px",textAlign:"left"}}>'The multi-million copy bestseller, Kim Edwards' The Memory Keeper's Daughter is a moving and poignant novel about grief, family and betrayal. Families have secrets they hide even from themselves... It should have been an ordinary birth, the start of an ordinary happy family. But the night Dr David Henry delivers his wife's twins is a night that will haunt five... </p>
</Col>
</Col>

  
<Col xs={4} style={{borderLeft:"1px solid grey",marginTop:"20px"}} >

<img style={{float:"right",margin:"20px 20px 0px 20px",width:"350px"}} src={require("./tired1.png")}/>
<Row>
<Col xs={12}>
<h1    style={{ fontSize: "30px",
Color:"blue"
,    margin: "20px 20px 20px 20px",
    fontWeight:" 400",
    fontFamily:"Georgia,Serif",
    fontStyle: "italic"}}>Outside of a dog, a book is probably man's best friend. Inside of a dog, it's too dark to read.</h1>
</Col>
</Row>
<img style={{float:"right",margin:"20px 20px 0 20px"}} src={require("./tired.png")}/>

</Col>
</Row>

<div style={{borderTop:"1px solid",color:"grey"}}></div>
<h1    style={{ fontSize: "40px"
,    margin: "20px 20px 100px 550px",
    fontWeight:" 400",    
    fontFamily:"Georgia,Serif",
    textDecoration:"underline",
    float:"left",
    fontStyle: "italic"}}>Most Read</h1>
          <Jumbotron style={{background:"white"}}>
          <Row>
                <Carousel>
                    <Carousel.Item>
<Col xs={2}>
    <div class="card">
      <img src={require("./kokababu.jpg")} alt="Jane"style={{width:"100%"}}/>
      <div class="container">
        <h2>Khokababu</h2>
        <p class="title"> Ravindranath Tagore</p>
      </div>
    </div>
</Col>
<Col xs={2}>

    <div class="card">
      <img src={require("./give.png")} alt="Jane"style={{width:"100%"}}/>
      <div class="container">
        <h2>The hate U give</h2>
        <p class="title">Angie Thomas </p>
       
   
      </div>
    </div>

</Col>

<Col xs={2}>

    <div class="card">
      <img src={require("./trinity.jpg")} alt="Jane" style={{width:"100%"}}/>
      <div class="container">
        <h2>Trinity The rebirth</h2>
        <p class="title"> DC Comic world</p>
   
      </div>
    </div>
    </Col>
    <Col xs={2}>

<div class="card">
  <img src={require("./handmaid.jpg")} alt="Jane" style={{width:"100%"}}/>
  <div class="container">
    <h2>Time Machine</h2>
    <p class="title">H G Wells</p>

  </div>
</div>
</Col>
<Col xs={2}>

<div class="card" >
  <img src={require("./girl.jpg")} alt="Jane" style={{width:"100%"}}/>
  <div class="container">
    <h2>The girl next Door</h2>
    <p class="title">Castrovilla</p>

  </div>
</div>
</Col>
    <Col xs={2}>

    <div class="card">
      <img src={require("./dirty.jpg")} alt="Jane" style={{width:"100%"}}/>
      <div class="container">
        <h2>Dirty: Dan and Elle</h2>
        <p class="title">Megan Hart</p>
   
      </div>
    </div>
    </Col>
    </Carousel.Item>
    <Carousel.Item>
<Col xs={2}>
    <div class="card">
      <img src={require("./by.jpg")} alt="Jane"style={{width:"100%"}}/>
      <div class="container">
        <h2>The way we get By</h2>
        <p class="title">Neil </p>
      </div>
    </div>
</Col>
<Col xs={2}>

    <div class="card">
      <img src={require("./cy.jpg")} alt="Jane"style={{width:"100%"}}/>
      <div class="container">
        <h2>Adityas' The Ceo</h2>
        <p class="title">Aditya Sinha</p>
       
   
      </div>
    </div>

</Col>

<Col xs={2}>

    <div class="card">
      <img src={require("./dy.jpg")} alt="Jane" style={{width:"100%"}}/>
      <div class="container">
        <h2>Come as You are</h2>
        <p class="title">Emily Nagoski</p>
   
      </div>
    </div>
    </Col>
    <Col xs={2}>

<div class="card">
  <img src={require("./ey.jpg")} alt="Jane" style={{width:"100%"}}/>
  <div class="container">
    <h2>The Spiderman</h2>
    <p class="title">Stan lee</p>

  </div>
</div>
</Col>
<Col xs={2}>

<div class="card" >
  <img src={require("./fy.jpg")} alt="Jane" style={{width:"100%"}}/>
  <div class="container">
    <h2>Harry Potter Series</h2>
    <p class="title">J K Rowling</p>

  </div>
</div>
</Col>
    <Col xs={2}>

    <div class="card">
      <img src={require("./gy.jpg")} alt="Jane" style={{width:"100%"}}/>
      <div class="container">
        <h2>Sex and the city</h2>
        <p class="title">C.Bushnell</p>
   
      </div>
    </div>
    </Col>
    </Carousel.Item>
    </Carousel>
    </Row>

            </Jumbotron>
      


           
        <Panel id="collapsible-panel-example-2" defaultExpanded>
          <Panel.Heading bsStyle="primary">
            <Panel.Title id="link1"  toggle >
             Genres
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
           <PanelGroup accordion id="accordion-example">
  <Panel eventKey="1">
    <Panel.Heading>
      <Panel.Title  toggle>Educational</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={require('./ds.jpg')} alt="Jane" style={{width:"70",height:"60"}}>
        <h2>Reema Thareja</h2>
        <p class="title">It provides a comprehensive coverage of the concepts of data structure </p>
         </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
      <Thumbnail src={require('./c.jpg')} alt="Jane" style={{width:"70",height:"60"}}>
        <h2>E.Balaguruswamy</h2>
        <p class="title">It gives an excellent account of the fundamentals of Java programming</p>
         </Thumbnail>
        </Col>
        
        <Col xs={6} md={4}>
      <Thumbnail src={require('./toc.jpg')} alt="242*200" style={{width:"100%",height:"50%"}}>
        <h2>John E. Hopcroft</h2>
        <p class="title">This is a classic book on formal languages, automata theory and computational complexity</p>
         </Thumbnail>
        </Col>
        </Row>
        </Grid>
      
    </Panel.Body>
  </Panel>
  <Panel eventKey="2">
    <Panel.Heading>
      <Panel.Title toggle>Comic</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={require('./ca.jpg')} alt="171*180" >
        <h2>Caption America</h2>
         </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
      <Thumbnail src={require('./spider.jpg')} alt="Jane" style={{width:"100%"}}>
        <h2>The Amazing Spiderman</h2>
         </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
      <Thumbnail src={require('./wonder.jpg')} alt="171*190" style={{width:"200",height:"200"}}>
        <h2>Wonder Woman</h2>
         </Thumbnail>
        </Col>
        </Row>
        </Grid>
    </Panel.Body>
  </Panel>
  <Panel eventKey="3">
    <Panel.Heading>
      <Panel.Title toggle>Horror</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={require('./h1.jpg')} alt="171*180" >
        <h2>Jack Olek</h2>
         </Thumbnail>
        </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={require('./h2.jpg')} alt="171*180" >
        <h2>William W.Johnstone</h2>
         </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
      <Thumbnail src={require('./h3.jpg')} alt="171*180" >
        <h2>Adam Nevill</h2>
         </Thumbnail>
        </Col>
         </Row>
        </Grid>
    </Panel.Body>
  </Panel>
  <Panel eventKey="4">
    <Panel.Heading>
      <Panel.Title toggle>Story book</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    <Grid>
      <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={require('./story1.jpg')} alt="171*180" >
        <h2>Charles Dickens</h2>
         </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
      <Thumbnail src={require('./story2.jpg')} alt="171*180" >
        <h2>Jules Verne</h2>
         </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
      <Thumbnail src={require('./story3.jpg')} alt="171*180" >
        <h2>Charles Dickens</h2>
         </Thumbnail>
        </Col>
        </Row>
        </Grid>
    
    </Panel.Body>
  </Panel>
</PanelGroup>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        </div >
    
      )
    }
}

  export default home;