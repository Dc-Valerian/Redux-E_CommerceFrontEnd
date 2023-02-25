import React from 'react'
import styled from 'styled-components'
import {AiOutlineDown,AiOutlineShoppingCart} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import {CiCircleRemove} from "react-icons/ci"
import {GiHamburgerMenu} from "react-icons/gi"


const Header = () => {
	const [toggle,setToggle] = React.useState(false)

	const showNavSide =()=>{
		setToggle(!toggle)
	}
	const removeNavSide =()=>{
		setToggle(false)
	}
  return (
    <div>
        <Container>
            <Wrapper>
               <Logo>
                VALERIAN.
               </Logo>

               <NavHold>
                <Nav>Home
                    <Icn><AiOutlineDown/></Icn>
                </Nav>
                <Nav>About</Nav>
                <Nav>Services</Nav>
                <Nav>Products</Nav>
               </NavHold>

               <IconHold>
                <Icon>
                    <BsSearch/>
                </Icon>
                <Icon>
                    <AiOutlineShoppingCart/>
                    <Count>0</Count>
                </Icon>
               <Button>Get Started</Button>
               </IconHold>

			   {
				toggle?<HamburgerMenu onClick ={removeNavSide}>
					<CiCircleRemove/>
				</HamburgerMenu>:
				<HamburgerMenu onClick ={removeNavSide}>
				<GiHamburgerMenu/>
			</HamburgerMenu>
			   }
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header
const HamburgerMenu = styled.div``
const Count = styled.div`
/* margin: 3px; */
height: 15px;
width: 15px;
border-radius: 50%;
background-color: lightblue;
font-size: 10px;
justify-content: center;
display: flex;
align-items: center;
color: white;
`

const Button = styled.button`
height: 40px;
	width: 120px;
	background-color: #123456;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
	transition: all 350ms;
	cursor: pointer;
	margin-left: 40px;

	:hover {
		background-color: whitesmoke;
		color: black;
		transform: scale(0.98);
	}

	@media screen and (max-width:500px){
	display: none;
}
`

const Icon = styled.div`
margin: 13px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`

const IconHold = styled.div`
display: flex;
justify-content: center;
align-items: center;
display: flex;
`
const Icn = styled.div`
margin-top: 9px;
`

const Nav = styled.div`
margin: 15px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`

const NavHold = styled.div`
display: flex;

@media screen and (max-width:500px){
	display: none;
}
`

const Logo = styled.div`
height: 45px;
	color: white;
	object-fit: contain;
	width: 120px;
	background-color: #123456;
	font-weight:bolder ;
	font-style:italic ;
	justify-content:center ;
	display:flex ;
	align-items:center ;
	font-size: 20px;
	cursor: pointer;
	border-radius: 10px;
	:hover{
		color: black;
	}
`

const Wrapper = styled.div`
/* background-color: red; */
width: 85%;
height: 100%;
justify-content: space-around;
align-items: center;
display: flex;
`

const Container = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
	background-color: whitesmoke;
	top: 0;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`