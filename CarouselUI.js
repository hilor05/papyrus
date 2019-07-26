import React, { Component } from 'react';
import {Carousel,Col,Jumbotron,Row, Button} from 'react-bootstrap';
import './CarouselUI.css';
import './authors.css';
import './App.css';

import Link from 'react-router-dom/Link';
//import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import { Video } from 'expo';
export function Carousel1(){
    return(
      <div >
   
        <Carousel style={{margin:"20px 100px 40px 100px"}}> 
        <Carousel.Item>
          <img width={400} height={400} class="center" src={require('./pic1.jpg')} />
          <Carousel.Caption >
            <Link to="/genre2">
            <h3  style={{color:"black"}} >The Kite Runner</h3>
            </Link>
            <p  style={{color:"black"}} >The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul, whose closest friend is Hassan. The story is set against a backdrop of tumultuous events, from the fall of Afghanistan's monarchy </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={400} height={400} class="center" src={require('./pic2.jpg')} />
          <Carousel.Caption>
            <Link to="/genre">
            <h3  style={{color:"white"}} >Harry Potter Series</h3>
            </Link>
            <p  style={{color:"black"}} >Harry Potter is a British-American film series based on the Harry Potter novels by author J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone (2001) and culminating with Harry Potter and the Deathly Hallows </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={400} height={400} class="center" src={require('./pic3.jpg')} />
          <Carousel.Caption>
            <Link to="/genre3">
            <h3 style={{color:"black"}} >John greens'</h3></Link>
            <p  style={{color:"black"}} >John Green is the New York Times bestselling author of Looking for Alaska,  An Abundance of Katherines, Paper Towns, The Fault in Our Stars, and Turtles All the Way Down. He is one half of the vlogbrothers on YouTube and co-creator of educational series Crash Course. .</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
  }





class CarouselUI extends Component{
    render() 
    {
        return(
            <div>
            </div>
        )
    }

}
export default CarouselUI;