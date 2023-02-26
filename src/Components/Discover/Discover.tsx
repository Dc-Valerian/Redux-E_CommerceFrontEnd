import React from 'react'
import styled from 'styled-components'
import img1 from "../Assets/1.png"
import img2 from "../Assets/2.png"
import img3 from "../Assets/3.png"

const Discover = () => {
  return (
    <div>
        <Container>
            <Head>
                Discover More.
                <span>Good Things are waiting for you</span>
            </Head>
            <CardHolder>
                <Card bg="#fefce8">
                    <First>
                        <Title>
                            Explore New Arrivals
                        </Title>
                        <Sub>
                            Shop From the Lastest Top Brands
                        </Sub>
                        <Button>
                            Show All
                        </Button>
                    </First>
                        <Second src={img3}/>
                </Card>
                <Card bg="#FEF2F2">
                    <First>
                        <Title>
                            Explore New Arrivals
                        </Title>
                        <Sub>
                            Shop From the Lastest Top Brands
                        </Sub>
                        <Button>
                            Show All
                        </Button>
                    </First>
                        <Second src={img1}/>
                </Card>
                <Card bg="#EFF6FF">
                    <First>
                        <Title>
                            Explore New Arrivals
                        </Title>
                        <Sub>
                            Shop From the Lastest Top Brands
                        </Sub>
                        <Button>
                            Show All
                        </Button>
                    </First>
                        <Second src={img2}/>
                </Card>
            </CardHolder>
        </Container>
    </div>
  )
}

export default Discover

const Button = styled.button`
width: 150px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
font-size: 17px;
border: none;
outline: none;
margin-top: 30px;
border-radius: 30px;
background-color: white;
color: black;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

transition: all 350ms;
cursor: pointer;

:hover{
    background-color: transparent;
    color: black;
    transform: scale(0.93);
}
`

const Second = styled.img`
object-fit: contain;
width: 150px;
`

const Sub = styled.div`
font-size: 20px;
font-weight: 600;
`

const Title = styled.div`
margin-bottom: 10px;
`

const First = styled.div``

const Card = styled.div<{bg:string}>`
width: 400px;
height: 170px;
background-color: ${(props) => props.bg};
overflow: hidden;
display: flex;
cursor: pointer;
padding: 20px;
margin: 10px;
border-radius: 10px;
`

const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
`

const Head = styled.div`
font-size: 30px;
margin-bottom: 10px;
font-weight: 600;

span{
    color: gray;
}
`

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-left: 50px;
overflow: hidden;
margin-top: 80px;
margin-bottom: 30px;
`