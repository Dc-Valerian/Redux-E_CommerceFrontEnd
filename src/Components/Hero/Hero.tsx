import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
// import 

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
       <Container>
       <First>

       </First>
       <Second>
        <Img>
        
        </Img>
       </Second>
       </Container>
     </div>
  )
}

export default Hero
const Img = styled.div``

const Second = styled.div``

const First = styled.div``

const Container = styled.div``