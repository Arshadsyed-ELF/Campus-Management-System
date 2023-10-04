import React from 'react'
import NavBar from './Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import BillGates from "../Assets/Alumni/BillGates.jpeg"
import ElonMusk from "../Assets/Alumni/ElonMusk.jpg"
import mark from "../Assets/Alumni/mark.jpg"
import Steve from "../Assets/Alumni/SteveJobs.jpg"
import sundar from "../Assets/Alumni/sundar.jpg"

const Alumni = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
  return (
    <div >  
  <section className="skill" id="alumni">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{color:'white'}}>Alumni</h2>
                        <br></br> <br/><br/><br/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item" >
                                <img src={BillGates} alt="Image" style={{height:"180px",borderRadius:"50%"}} />
                                <h5 style={{color:'white'}}>Bill Gates</h5>
                            </div>
                            <div className="item">
                                <img src={ElonMusk} alt="Image" style={{height:"180px",borderRadius:"50%"}} />
                                <h5 style={{color:'white'}}>Elon Musk</h5>
                            </div>
                            <div className="item">
                                <img src={Steve} alt="Image" style={{height:"180px",borderRadius:"50%"}} />
                                <h5 style={{color:'white'}}>Steve Jobs</h5>
                            </div>
                            <div className="item">
                                <img src={sundar} alt="Image" style={{height:"180px",borderRadius:"50%"}} />
                                <h5 style={{color:'white'}}>Sundar pichai</h5>
                            </div>
                            <div className="item">
                                <img src={mark} alt="Image" style={{height:"180px",borderRadius:"50%"}} />
                                <h5 style={{color:'white'}}>Mark zuckerberg</h5>
                            </div>
                           
                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
    </div>
  )
}

export default Alumni