import React, {Component} from 'react';
import './authors.css';
import './App.css';
import { Image , Button, Grid, Jumbotron, Nav,Row,Col } from 'react-bootstrap';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Link from 'react-router-dom/Link';
class authors extends Component {
   render() {
      return (
        <Jumbotron >
          <Row>    
 <h1    style={{ fontSize: "40px"
,    margin: "-2px 0 20px 10px",
    fontWeight:" 400",
    fontFamily:"Georgia,Serif",
    float:"left",
    fontStyle: "italic"}}>“I'm not a stranger," I said, and pointed to his book. "I'm someone who reads the same authors you do.”</h1>
  </Row>
        <Grid>
          <Row className="show-Grid"  >
          <Col xs={12} sm={4}>
          <Jumbotron className="jumbotron-color1">
            <Row className="show-grid text-centre">
                 <Col xs={12} sm={12} className="person-wrapper">
                   <Image src={require('./rowling.jpg')} width={200} height={266} circle className="profile-pic"/>
                   <h3 className="text-color">J K Rowling</h3>
                   <p className="text-color">Happiness can be found, even in the darkest of times, if only remembers to turn on the light.</p>
                   </Col>
                   </Row>
            </Jumbotron>
            </Col>
            <Col xs={12} sm={4}>
                <Jumbotron className="jumbotron-color">
            <Row className="show-grid text-centre">
                 <Col xs={12} sm={12} className="person-wrapper">
                   <Image src={require('./paulo.jpg')} width={177} height={266} circle className="profile-pic"/>
                 <h3 className="text-color2">Paulo Coelho</h3>
                 <p className="text-color2">There is only one thing that makes a dream impossible to achieve: the fear of failure</p>
                </Col>
                   </Row>
            </Jumbotron>
            </Col>
            <Col xs={12} sm={4}> 
            <Jumbotron className="jumbotron-color2">
            <Row className="show-grid text-centre">
                 <Col xs={12} sm={12} className="person-wrapper">
                   <Image src={require('./dickens.jpg')} width={177} height={266} circle className="profile-pic"/>
                   <h3 className="text-color2">Charles Dickens</h3>
                   <p className="text-color2">Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.</p>
                    </Col>
                   </Row>
            </Jumbotron>
            </Col>
            <Col xs={12} sm={4}>
          <Jumbotron className="jumbotron-color3">
            <Row className="show-grid text-centre">
                 <Col xs={12} sm={12} className="person-wrapper">
                   <Image src={require('./martin.jpg')} width={200} height={266} circle className="profile-pic"/>
                   <h3 className="text-color">George Martin</h3>
                   <p className="text-color">A reader lives a thousand lives before he dies but who never reads lives only one.</p>
                   </Col>
                   </Row>
            </Jumbotron>
            </Col>
            <Col xs={12} sm={4}>
                <Jumbotron className="jumbotron-color4">
            <Row className="show-grid text-centre">
                 <Col xs={12} sm={12} className="person-wrapper">
                   <Image src={require('./narayan.jpg')} width={177} height={266} circle className="profile-pic"/>
                 <h3 className="text-color2">आर.के नारायण</h3>
                 <p className="text-color2">Friendship was another illusion like love, though it did not reach the same mad heights. </p>
                </Col>
                   </Row>
            </Jumbotron>
            </Col>
            <Col xs={12} sm={4}>
                <Jumbotron className="jumbotron-color5">
            <Row className="show-grid text-centre">
                 <Col xs={12} sm={12} className="person-wrapper">
                   <Image src={require('./tagore.jpg')} width={177} height={266} circle className="profile-pic"/>
                 <h3 className="text-color2">রবীন্দ্রনাথ ঠাকুর</h3>
                 <p className="text-color2"> “ গোলাপ যেমন একটি বিশেষ জাতের ফুল, বন্ধু তেমনি একটি বিশেষ জাতের মানুষ... ”</p>
                </Col>
                   </Row>
            </Jumbotron>
            </Col>
            </Row>
        </Grid>
    </Jumbotron>
      )
    }
}

  export default authors;