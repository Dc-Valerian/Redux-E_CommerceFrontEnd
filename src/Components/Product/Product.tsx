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
`

const Img = styled.img`
width: 200px;
object-fit: contain;
`

const Title = styled.div``

const Description = styled.div``

const Price = styled.div``

const Rating = styled.div``

const PriceHold = styled.div``

const MainImage = styled.div``

const Card = styled.div`
margin: 10px;
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