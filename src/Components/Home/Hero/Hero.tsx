import React from 'react'
import styled from 'styled-components'
import bg from "../../Assets/hero2.png"
import { CiSearch } from "react-icons/ci"

const Hero = () => {
  return (
    <div>
        <Container>
        <Wrapper>
        <Left>
            <Desc>In this season, find the best 🔥</Desc>
            <Title>Exclusive collection for everyone</Title>
            <Button>Explore now 
                <span><CiSearch/></span>
            </Button>
        </Left>
            <Right>
                <img src={bg} alt="" />
            </Right>
        </Wrapper>
        </Container>
    </div>
  )
}

export default Hero

const Button = styled.button`
width: 200px;
height: 65px;
background-color: #0F172A;
color: #fff;
margin-top: 70px;
border-radius: 40px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
    
    span{
    margin-left: 10px;
  font-weight: 900;
  margin-top: 5px;
  font-size: 30px;
    }
`
const Title = styled.h1`
line-height: 1.2;
margin: 0;
font-size: 3.7rem;
font-weight: 900;
/* position: absolute; */
    
`
const Desc = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    
`
const Right = styled.div`
    width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

img{
    height: 100%;
    object-fit: contain;
}
`

const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
    
`
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #E3FFE6;

`