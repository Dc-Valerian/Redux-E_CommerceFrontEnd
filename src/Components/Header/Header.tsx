import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Container>
            <Wrapper>
               <Logo>
                Valerian
               </Logo>

               <NavHold>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
                <Nav>Home</Nav>
               </NavHold>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header
const Nav = styled.div``

const NavHold = styled.div``

const Logo = styled.div``

const Wrapper = styled.div`
background-color: red;
width: 80%;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
`

const Container = styled.div`
background-color: black;
height: 70px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`