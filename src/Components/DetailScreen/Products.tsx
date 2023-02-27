import React from 'react'
import styled from 'styled-components'
import {AiFillHeart} from "react-icons/ai"
import shoe from "../Assets/shoe.jpg";

const Products = () => {
  return (
    <div>
<Container>
<ImageThumbnail>
<Heart>
    <Icon>
        <AiFillHeart style={{color: "red", fontSize: "25px"}}/>
    </Icon>
</Heart>
<img src={shoe} alt="" />
</ImageThumbnail>
        <ItemDesc>
          <Wrapper>
          <Title>Heavy Weight Shoes</Title>
            <Price></Price>
            <Cart>
                <Count></Count>
                <AddToCart></AddToCart>
            </Cart>
            <hr />
            <Desc></Desc>
          </Wrapper>
        </ItemDesc>
</Container>
    </div>
  )
}

export default Products

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
`
const AddToCart = styled.div`
    width: 70%;
height: 10vh;;
background-color: #2f9aff;

`
const Count = styled.div`
    width: 30%;
height: 10vh;;
background-color: #0e0633;

`
const Desc = styled.div`
    width: 100%;
height: 10vh;;
background-color: greenyellow;
margin-top: 10px;
`
const Cart = styled.div`
    width: 100%;
height: 10vh;;
background-color: #892fff;
margin-top: 10px;
display: flex;
`
const Price = styled.div`
width: 100%;
height: 10vh;;
background-color: greenyellow;
margin-top: 10px;
    
`
const Title = styled.h1`
margin: 0;
font-weight: 600;
    
`

const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Heart = styled.div`
width: 100%;
height: 70px;
position: absolute;
top: 0;
z-index: 1;
display: flex;
justify-content:flex-end;
align-items: center;
right: 20px;

;
`



const ItemDesc = styled.div`
    height: 90vh;
    margin-top: 20px;
width: 50%;
/* background-color: #c0ffd0; */
`
const ImageThumbnail = styled.div`
height: 90vh;
width: 50%;
margin-top: 20px;
background-color: #EDEEF0;
position: relative;
border-radius: 30px;
overflow: hidden;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
}

    
`
const Container = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-wrap: wrap;

    
`