import React from 'react'
import styled from 'styled-components'
import img1 from "../Assets/dark.jpg"
import img2 from "../Assets/bulb.jpg"
import img3 from "../Assets/code.jpg"
import img4 from "../Assets/fine.jpg"
import img5 from "../Assets/great.jpg"
import img6 from "../Assets/hmm.jpg"
import {AiFillStar} from "react-icons/ai"

const Product = () => {
  return (
    <div>
        <Container>
            <Head>
                New Arrivals.{" "}
                <span>
                  Valerian BackPacks & Bags
                </span>
            </Head>
            <CardHolder>
              <Card>
                <MainImage>
                  <ImageHold>
                    <Img src={img1}/>
                    {/* <Img /> */}
                  </ImageHold>
                  <Title>
                    Dark Wings
                  </Title>
                  <Description>
                    New Designs 2023
                  </Description>
                  <PriceHold>
                    <Price>
                      $90.00
                    </Price>
                    <Rating>
                   <span>   <AiFillStar/></span>
                   5.5(87 Reviews)
                    </Rating>
                  </PriceHold>
                </MainImage>
              </Card>
              <Card>
                <MainImage>
                  <ImageHold>
                    <Img src={img2}/>
                    {/* <Img /> */}
                  </ImageHold>
                  <Title>
                    ColorFul Bulb
                  </Title>
                  <Description>
                    Lastest Model 2023
                  </Description>
                  <PriceHold>
                    <Price>
                      $9.00
                    </Price>
                    <Rating>
                   <span>   <AiFillStar/></span>
                   3.2(40 Reviews)
                    </Rating>
                  </PriceHold>
                </MainImage>
              </Card>
              <Card>
                <MainImage>
                  <ImageHold>
                    <Img src={img3}/>
                    {/* <Img /> */}
                  </ImageHold>
                  <Title>
                    Learn to Code
                  </Title>
                  <Description>
                    CodeLab Campus
                  </Description>
                  <PriceHold>
                    <Price>
                      $900.00
                    </Price>
                    <Rating>
                   <span>   <AiFillStar/></span>
                   5.5(1M Reviews)
                    </Rating>
                  </PriceHold>
                </MainImage>
              </Card>
              <Card>
                <MainImage>
                  <ImageHold>
                    <Img src={img4}/>
                    {/* <Img /> */}
                  </ImageHold>
                  <Title>
                    Adventure
                  </Title>
                  <Description>
                    My Journey Through Tech
                  </Description>
                  <PriceHold>
                    <Price>
                      $90.00
                    </Price>
                    <Rating>
                   <span>   <AiFillStar/></span>
                   4.0(90 Reviews)
                    </Rating>
                  </PriceHold>
                </MainImage>
              </Card>
              <Card>
                <MainImage>
                  <ImageHold>
                    <Img src={img5}/>
                    {/* <Img /> */}
                  </ImageHold>
                  <Title>
                    FootBall
                  </Title>
                  <Description>
                    Live Scores
                  </Description>
                  <PriceHold>
                    <Price>
                      $90.00
                    </Price>
                    <Rating>
                   <span>   <AiFillStar/></span>
                   3.0(80 Reviews)
                    </Rating>
                  </PriceHold>
                </MainImage>
              </Card>
            </CardHolder>
        </Container>
    </div>
  )
}

export default Product
const ImageHold = styled.div`
height: 250px;
width: 250px;
border-radius: 5px;
cursor: pointer;

`

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Title = styled.div`
font-weight: 700;
margin-bottom: 5px;
margin-top: 10px;
`

const Description = styled.div`
color: grey;
`

const Price = styled.div`
height: 30px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid green;
font-weight: 600;
color: green;
border-radius: 5px;
cursor: pointer;


:hover{
  color: white;
  background-color: green;
}
`

const Rating = styled.div`
display: flex;
align-items: center;
font-size: 15px;
color: grey;

span{
  color: gold;
  margin-right: 10px;
}
`

const PriceHold = styled.div`
display: flex;
justify-content: space-between;
margin-top: 5px;
align-items: center;
`

const MainImage = styled.div``

const Card = styled.div`
margin: 10px;
/* height: 300px; */
`

const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
padding-bottom: 70px;
`

const Head = styled.div`
font-size: 30px;
margin-bottom: 10px;
font-weight: 600;

span{
  color: grey;
}
`

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-left: 50px;
overflow: hidden;
margin-bottom: 50px;
border-bottom: 2px dotted grey;
`