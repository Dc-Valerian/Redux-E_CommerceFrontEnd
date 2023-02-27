import React from 'react';
import styled from 'styled-components';
import logo from "../Assets/sylvialogo.png";
import { CiSearch } from "react-icons/ci"
import { RiShoppingCartLine } from "react-icons/ri"
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Global/Store';
import { UserLogOut } from '../Global/ReduxState';

const Header = () => {

  const loggedInUser = useAppSelector((state) => state.currentUser);

  const readCartQuantity = useAppSelector((state) => state.totalQuantity)

  console.log("cart Quantity: ", readCartQuantity)

  const dispatch = useAppDispatch();

  return (
    <div>
      <Container>
        <Wrapper>
          <Img to = "/">
          <Logo>VALERIAN</Logo>
          </Img>
          <Navigation>
            <Nav to="/">Home</Nav>
            <Nav to="/">About</Nav>
            <Nav to="/">Services</Nav>
            <Nav to="/all-products">Products</Nav>
          </Navigation>
          <Profile>
            <p>
            <CiSearch />
            </p>

            <P to = "/cart">
            <RiShoppingCartLine />
            <Count>
            <span>
              {readCartQuantity}
            </span>
            </Count>
            </P>
            <p>
            {
                loggedInUser?.name ? (
                  <Button
                  onClick={() =>{
                    dispatch(UserLogOut())
                  }}
                   to = "/">
                    Log Out
                  </Button>
                ) : (
                  <Button to = "/signup">
                    Get Started
                  </Button>
                )
              }
            </p>
            
          </Profile>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header;

const Button = styled(Link)`
padding: 10px 20px;
background-color: #0F172A;
border: 0;
border-radius: 20px;
font-size: 16px;
font-weight: 500;
color: #fff;
text-decoration: none;

`

const Count = styled.div`
  width: 30px;
  height: 30px;
  background-color: #0F172A;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;


`

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 60px;
  /* background-color: lightblue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled(Link)`
text-decoration: none;

`;
const Logo = styled.div`
padding: 10px 20px;
background-color: #0F172A;
border: 0;
border-radius: 5px;
font-size: 16px;
font-weight: 500;
color: #fff;
text-decoration: none;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  color: black;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  p{
    margin-right: 30px;
    font-size: 25px;
    display: flex;
    color: black;
    cursor: pointer;
  }
`;
const P = styled(Link)`
  margin-right: 30px;
    font-size: 25px;
    display: flex;
    text-decoration: none;
    color: black;

`;