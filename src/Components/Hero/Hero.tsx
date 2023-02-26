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
const Button = styled.button`
cursor: pointer;
height: 50px;
width: 150px;
align-items: center;
justify-content: center;
display: flex;
background-color: #123456;
color: white;
border-radius: 40px;
outline: none;
border: none;
transition: all 350ms;

:hover{
  background-color: transparent;
  color: black;
  transform: scale(0.98);
}
`

const Title = styled.div`
font-size: 30px;
`

const Heading = styled.div`
font-size: 60px;
font-weight: 900;
margin-bottom: 10px;
`


const Second = styled.img`
object-fit: contain;
width: 670px;
`

const First = styled.div`
margin-right: 10px;
`

const Container = styled.div`
width: 100%;
background-color:#e3ffe6;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 40px;
`