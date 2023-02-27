import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { addToCart, removeFromCart } from "../Global/ReduxState";
import { useQuery } from "@tanstack/react-query";
import { SingleProducts } from "../API/Api";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Global/Store";

const SinglePage = () => {

	const { productID } = useParams();
	const dispatch = useAppDispatch();
	
	// To have access to the whole of my cart
	const readMyCart = useAppSelector((state) => state.cart)

	// To read a single product from the cart
	const readSingleItem = readMyCart.filter((item) => item._id === productID);

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
	console.log(OneProducts)
	return (
		<Container>
			<First></First>
			<Second>
				<h2>{OneProducts?.data?.data.title}</h2>
				<PriceHold>
					<Price>{OneProducts?.data?.data.price}</Price>
                    <Ratting>
						<AiFillStar
							style={{
								color: "gold",
								marginRight: "10px",
							}}
						/>
						4.2(87 reviews)
					</Ratting>
				</PriceHold>
				<Holder>
					<ButtonHold>
						<But
						onClick={() =>{
							dispatch(removeFromCart(OneProducts?.data?.data))
						}}
						>-</But>
						<Count>
							{readSingleItem[0]?.CartQuantity}
						</Count>
						<But
						// So that once you've clicked above what is in your cart, it will be disabled and you can't order it again. Meaning out of stock
						disabled = {
							readSingleItem[0]?.CartQuantity === OneProducts?.data?.data.quantity
						}

						// So that once we click on the +, it will increase in quantity and also add to cart
						onClick={() =>{
							dispatch(addToCart(OneProducts?.data?.data))
						}}
						style={{ marginLeft: "20px" }}>+</But>
					</ButtonHold>
					<MainButton
					onClick={() =>{
						dispatch(addToCart(OneProducts?.data?.data))
					}}
					>Add To Cart</MainButton>
				</Holder>
				<div>Total Price: {TotalPrice(readMyCart)}  </div>
				<DescHold>Description</DescHold>
				<br />
				<span style={{ marginTop: "10px" }}>
					{OneProducts?.data?.data.desc}
				</span>
			</Second>
		</Container>
	);
};


export default SinglePage;

const DescHold = styled.div`
	width: 100%;
	background-color: #fafbfd;
	padding: 10px;
	margin-top: 30px;
	font-weight: 700;
`;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;
`;

const But = styled.button`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: #fafbfd;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 25px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	margin-right: 20px;
	cursor: pointer;
	/* margin-left: 20px; */
`;
const Count = styled.div``;
const MainButton = styled.button`
	height: 45px;
	width: 250px;
	background-color: #123456;
	color: white;
	font-size: 17px;
	font-weight: 700;
	border: none;
	outline: none;
	border-radius: 30px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	cursor: pointer;
`;
const Holder = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PriceHold = styled.div`
	display: flex;
	/* justify-content: space-between; */
	margin-top: 10px;
	align-items: center;
`;
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
	margin-right: 30px;
`;
const Ratting = styled.div`
	font-size: 13px;
	color: gray;
	display: flex;
	align-items: center;
`;

const Second = styled.div`
	width: 500px;
	h2 {
		margin: 0;
	}
	span {
		margin-top: 20px;
	}
`;

const First = styled.div`
	height: 500px;
	width: 550px;
	background-color: #f1f1f1;
	border-radius: 5px;
	margin-right: 50px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	margin-top: 100px;
`;