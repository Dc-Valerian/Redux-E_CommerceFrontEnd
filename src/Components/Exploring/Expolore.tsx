import React from 'react'
import {AiOutlineMan} from "react-icons/ai"
import styled from 'styled-components'

const Expolore = () => {
  return (
    <div>
        <Container>
            <CardHolder>
                <h1>Start Exploring</h1>
                <ExploreHold>
                    <Hold>
                        <span><AiOutlineMan/></span>                        
                        Men
                    </Hold>

                </ExploreHold>
            </CardHolder>
        </Container>
    </div>
  )
}

export default Expolore

const Hold = styled.div`
height: 35px;
width: 120px;
display: flex;
justify-content: center;
align-items: center;
background-color:#123456;
color: white;
border-radius: 40px;
cursor: pointer;
`

const ExploreHold = styled.div`
width: 700px;
height: 50px;
background-color: white;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
	rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
border-radius:40px;
display: flex;
justify-content: space-around;
align-items: center;
`


const CardHolder = styled.div`
background-color:#f7f7f9;
width: 90%;
border-radius: 10px;
padding-bottom: 50px;
display: flex;

h1{
    margin-top: 100px;
}
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
flex-direction: column;
`