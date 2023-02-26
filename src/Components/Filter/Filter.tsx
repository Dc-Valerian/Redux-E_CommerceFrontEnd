import React from 'react'
import styled from 'styled-components'
import img1 from "../Assets/jotai.png"
import img2 from "../Assets/react.jpeg"
import img3 from "../Assets/recoil.png"
import img4 from "../Assets/redux.jpg"




const Filter = () => {
  return (
    <div>
        <Container>
            <CardHolder>
                <Card>
                   <Img>
                   <Image src={img3}/>
                   </Img>
                    <Step>
                      Step 1
                    </Step>
                    <Title>
                    RECOIL
                    </Title>
                    <Description>
                      Start Filtering and Suggestions make it easy to find
                    </Description>
                </Card>
                <Card>
                <Img>
                   <Image src={img2}/>
                   </Img>
                    <Step>
                      Step 2
                    </Step>
                    <Title>
                    REACT STATE MANAGEMENT
                    </Title>
                    <Description>
                      Start Filtering and Suggestions make it easy to find
                    </Description>
                </Card>
                <Card>
                <Img>
                   <Image src={img1}/>
                   </Img>
                    <Step>
                      Step 3
                    </Step>
                    <Title>
                      JOTAI
                    </Title>
                    <Description>
                      Start Filtering and Suggestions make it easy to find
                    </Description>
                </Card>
                <Card>
                <Img>
                   <Image src={img4}/>
                   </Img>
                    <Step>
                      Step 4
                    </Step>
                    <Title>
                    REDUX
                    </Title>
                    <Description>
                      Start Filtering and Suggestions make it easy to find
                    </Description>
                </Card>

            </CardHolder>
        </Container>
    </div>
  )
}

export default Filter

const Description = styled.div`
width: 300px;
`

const Title = styled.div`
font-weight: 600;
`

const Step = styled.div``

const Img = styled.div`
height: 300px;
width: 300px;
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
cursor: pointer;
`

const Card = styled.div`
margin: 30px;
`

const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;
text-align: center;
`