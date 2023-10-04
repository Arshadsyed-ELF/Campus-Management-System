import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import banner from "../Assets/Banner/banner-5.jpg"
import banners from "../Assets/Banner/banner-2.jpg"
import bannerss from "../Assets/Banner/banner-4.jpg"



const Home = () => {
  return (
    <div>
        <section id="home">
            <br/>
            <br/>
            <br/>
            <br/>
            <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={banner}  style={{height:"400px"}}/>
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={banners} style={{height:"400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={bannerss} style={{height:"400px"}} />
      </Carousel.Item>
    </Carousel>
            <br/>
            <br/>
            <br/>
        </section>
    </div>
  )
}

export default Home