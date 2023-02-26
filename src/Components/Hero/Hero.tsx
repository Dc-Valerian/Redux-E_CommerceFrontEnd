import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import hero from "../Assets/hero1.png"
// import 

const Hero = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    //   };
  return (
    <div>
       <Container>
       <First>
        <Title>In this season,Find the best✨🕊️</Title>
        <Heading>
          Exclusive Collection
          <br /> for everyone
        </Heading>
        <Button>
          Explore now
        </Button>
       </First>
      <Second src={hero}/>
       </Container>
     </div>
  )
}

export default Hero
const Button = styled.button``

const Title = styled.div``

const Heading = styled.div``

const Img = styled.div``

const Second = styled.img``

const First = styled.div``

const Container = styled.div`
width: 100%;
background-color:#e3ffe6;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 40px;
`