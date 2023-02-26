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
                <Card>
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
                        <Second src={img1}/>
                    </First>
                </Card>
            </CardHolder>
        </Container>
    </div>
  )
}

export default Discover

const Button = styled.button``

const Second = styled.img``

const Sub = styled.div``

const Title = styled.div``

const First = styled.div``

const Card = styled.div``

const CardHolder = styled.div``

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
`