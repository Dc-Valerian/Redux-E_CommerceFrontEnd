import React from 'react';
import styled from "styled-components";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import pic from "../Assets/shirt.png";
import { AiOutlineCheck } from "react-icons/ai";
import Summmary from './Summmary';
import MainCartPage from './MainCartPage';
import { useAppDispatch, useAppSelector } from '../Global/Store';
import { clearCart } from '../Global/ReduxState';
import { VscPaintcan } from "react-icons/vsc";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { addToCart, removeFromCart } from "../Global/ReduxState";
import { SingleProducts } from '../API/Api';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


const CartProps = () => {

  
  const { productID } = useParams();
	
	// To have access to the whole of my cart
  const readFromMyCart = useAppSelector((state) => state.cart)
	

	// To read a single product from the cart
	const readSingleItem = readFromMyCart.filter((item) => item._id === productID);

	// To get the total price of quantity of each items in cart:
	const TotalPrice = (item: any) => item.reduce((allItems: number, oneItem: any) =>
		allItems + oneItem.CartQuantity * oneItem.price, 0,
	)
	
	const OneProducts = useQuery({
		queryKey: ["oneProduct", productID],
		queryFn: () =>{
			return SingleProducts(productID)
		}
	})

  
  const dispatch = useAppDispatch();
  return (
    <div>
        <div>
      <Container1>
        <Wrapper>
          <Head>
            <Div1>
            <Title>Shopping Cart</Title>
            <Split>
              Homepage / Clothing Categories / <span> Shopping Cart</span>
            </Split>
            </Div1>
            <Btn onClick={() =>{
              dispatch(clearCart())
            }} >
              Clear Cart
            </Btn>
          </Head>
          <br />
          <br />
          <Body>
           {
            readFromMyCart.map((props) =>(
              <Product>
              <Container>
        <Pic>
          <img src={pic} />
        </Pic>
        <Details>
          <Detail>
            <Name>{props.title}</Name>
            <About>
              <Div>
                <Sign2>
                  <VscPaintcan />
                </Sign2>
                <>{props.category}</>
              </Div>
              <div>
                <Sign2>
                  <BsArrowsAngleExpand />
                </Sign2>
                <>{props.desc}</>
              </div>
            </About>
          </Detail>
          <Info>
            <Sign></Sign>
            <div>In Stock</div>
          </Info>
        </Details>
        <Buttons>
          <button
          onClick={() =>{
            dispatch(removeFromCart(props))
          }}
          >-</button>
          <div>
            {props.CartQuantity}
          </div>
          <button
        //  disabled = {
        //   readSingleItem[0]?.CartQuantity === OneProducts?.data?.data.quantity
        // }
         onClick={() =>{
          dispatch(addToCart(props))
         }}
          >+</button>
        </Buttons>
        <Price>
          <PriceDiv>#{props.price * props.CartQuantity}</PriceDiv>
          <Remove
          onClick={() =>{
            dispatch(removeFromCart(props))
          }}
          >Remove</Remove>
        </Price>
      </Container>
            </Product>
            ))
           }
            <Summary>
              <Summmary />
            </Summary>
          </Body>
        </Wrapper>
      </Container1>
    </div>
    </div>
  )
}

export default CartProps;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 660px;
  border-bottom: 1px solid #dce1eb;
  padding-bottom: 40px;
  margin-top: 40px;
`;
const Pic = styled.div`
  width: 130px;
  height: 150px;
  background-color: #e3f2ff;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const Details = styled.div`
  margin-left: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Detail = styled.div``;
const Name = styled.div`
  font-size: 16px;
`;
const About = styled.div`
  font-weight: normal;
  font-size: 13px;
  margin-top: 10px;
  display: flex;

  div {
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100px;
  }
`;
const Info = styled.div`
  border-radius: 20px;
  border: 1px solid #dce1eb;
  max-width: 75px;
  padding: 3px;
  font-weight: normal;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Buttons = styled.div`
  margin-left: 60px;
  display: flex;
  align-items: center;
  max-height: 35px;
  button {
    border: 1px solid grey;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    outline: none;
    background-color: white;
    color: grey;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 350ms;
    :hover {
      border: 1px solid black;
    }
  }
  div {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Price = styled.div`
  margin-left: 60px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PriceDiv = styled.div`
  border: 2px solid #1ac022;
  padding: 8px;
  max-height: 9px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1ac022;
  font-weight: bold;
  font-size: 14px;
`;
const Remove = styled.div`
cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  color: #4f86fc;
`;
const Div = styled.div`
  border-right: 1px solid #dce1eb;
  padding-right: 20px;
  margin-right: 20px;
  display: flex;
`;
const Sign = styled.div`
  display: flex;
  align-items: center;
  color: #646363;
`;
const Sign2 = styled.div`
  display: flex;
  align-items: center;
  color: #646363;
  margin-right: 7px;
`;


const Container1 = styled.div`
  width: 100%;
  display: flex;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: calc(100% - 200px);
`;
const Div1 = styled.div`
  height: 230px;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #d1cece;
`;
const Btn = styled.div`
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-color: black;
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Head = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: blue; */
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 38px;
`;
const Split = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #686666;
  span {
    text-decoration: underline;
  }
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Product = styled.div`
  margin-right: 50px;
`;
const Summary = styled.div`
  flex: 1;
  position: relative;
`;
