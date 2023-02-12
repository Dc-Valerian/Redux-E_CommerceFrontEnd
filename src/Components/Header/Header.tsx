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
                    <Input placeholder="...Search"/>
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

const Icon = styled.div``

const Input = styled.div``

const IconHold = styled.div``

const Title = styled.div``

const Icons = styled.div``

const Third = styled.div``

const Second = styled.div``

const First = styled.div`
display: flex;
`

const Head = styled.div`
display:flex ;
width:100%;
height:60px;

`

const Container = styled.div``