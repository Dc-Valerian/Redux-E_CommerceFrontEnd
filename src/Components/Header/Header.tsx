import React from 'react'
import styled from 'styled-components'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {VscSearch} from "react-icons/vsc"
import {AiOutlineSetting,AiOutlineQuestion,AiOutlineNotification} from "react-icons/ai"

const Header = () => {
  return (
    <div>
        <Container>
            <Head>
                <First>
                    <Icons>
                        <BsFillGrid3X3GapFill/>
                    </Icons>
                    <Title>To Do</Title>
                </First>
                <Second>
                    <IconHold>
                        <VscSearch/>
                    </IconHold>
                    <input type="search" placeholder=".....Search......"/>
                </Second>
                <Third>
                    <Icon>
                        <AiOutlineSetting/>
                    </Icon>
                    <Icon>
                        <AiOutlineQuestion/>
                    </Icon>
                    <Icon>
                        <AiOutlineNotification/>
                    </Icon>
                    
                    <Icon>
                        <Circle>
                            Vc
                        </Circle>
                    </Icon>
                </Third>
            </Head>
        </Container>
    </div>
  )
}

export default Header
const Circle = styled.div``

const Icon = styled.div`
display:flex;
align-items:center;
margin-right:20px;
transition:all 350ms;
height:100%;
justify-content:center;
width:40px;
cursor: pointer;
font-size:20px;
:hover{
    background-color:rgba(0,0,2,0.3) ;
}
`


const IconHold = styled.div`
color:black;
font-size:20px;
padding:5px ;
margin-top:7px ;
cursor: pointer;
`

const Title = styled.div`
margin: 5px;
align-items:center;
display:flex;
`

const Icons = styled.div`
margin-right:5px;
`

const Third = styled.div`
display:flex;
align-items:center;
margin-right:10px;
height:100% ;
`

const Second = styled.div`
height:30px;
width:300px;
background-color: #fff;
align-items:center;
display:flex;
border-radius:5px;

input{
    width:250px;
    padding:5px;
    border:none;
    outline:none;
   ::placeholder{
    color:grey;
    font-size:12px;
  }
}
`

const First = styled.div`
display: flex;
align-items:center;
margin-left:40px;
cursor: pointer;
font-size: 20px;
`

const Head = styled.div`
display:flex;
width:100%;
height:60px;
background-color:#3636e5;
color:white;
display: flex;
justify-content:space-between;
align-items:center;
position:fixed;
z-index:10
`

const Container = styled.div``