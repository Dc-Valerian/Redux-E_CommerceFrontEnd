import React from 'react'
import {AiOutlineMan, AiOutlineWoman} from "react-icons/ai"
import {FaChild} from "react-icons/fa"
import {MdSportsBaseball} from "react-icons/md"
import {GiJewelCrown} from "react-icons/gi"
import styled from 'styled-components'
import img1 from "../Assets/spider.jpg"
import img8 from "../Assets/spider2.jpg"
import img9 from "../Assets/spider3.jpg"
import img2 from "../Assets/pray.png"
import img3 from "../Assets/shazam.jpg"
import img4 from "../Assets/world.jpg"
import img5 from "../Assets/pexel.jpg"
import img6 from "../Assets/dark.jpg"
import img10 from "../Assets/bro.jpg"
import img11 from "../Assets/bu.jpg"
import img12 from "../Assets/nice.jpg"
import img13 from "../Assets/nicepexel.jpg"
import img14 from "../Assets/risk.jpg"

const Expolore = () => {
  return (
    <div>
        <Container>
            <CardHolder>
                <h1>Start Exploring</h1>
                <ExploreHold>
                    <Hold>
                        <span><AiOutlineMan/></span>                        
                        Valerian
                    </Hold>
                    <Hold>
                        <span><AiOutlineWoman/></span>                        
                        Pedro
                    </Hold>
                    <Hold>
                        <span><FaChild/></span>                        
                        Codelab
                    </Hold>
                    <Hold>
                        <span><MdSportsBaseball/></span>                        
                        Divine
                    </Hold>
                    <Hold>
                        <span><GiJewelCrown/></span>                        
                        Adimike
                    </Hold>
                </ExploreHold>
                <CardHold>
                    <Card>
                        <First>
                            <Circle>
                                <Img src={img1}/>
                            </Circle>
                            <span>12 Products</span>
                        </First>
                        <Second>
                            <Title>
                                <h4>Manufacturer</h4>
                                <h2>Shoe</h2>
                                <br />
                                <br />
                                <br />
                                <Sub>See Collections</Sub>
                            </Title>
                            <SecImage>
                                <Img2 src={img6}/>
                            </SecImage>
                        </Second>
                    </Card>
                    <Card>
                        <First>
                            <Circle>
                                <Img src={img8}/>
                            </Circle>
                            <span>12 Products</span>
                        </First>
                        <Second>
                            <Title>
                                <h4>Manufacturer</h4>
                                <h2>Shoe</h2>
                                <br />
                                <br />
                                <br />
                                <Sub>See Collections</Sub>
                            </Title>
                            <SecImage>
                                <Img2 src={img5}/>
                            </SecImage>
                        </Second>
                    </Card>
                    <Card>
                        <First>
                            <Circle>
                                <Img src={img1}/>
                            </Circle>
                            <span>12 Products</span>
                        </First>
                        <Second>
                            <Title>
                                <h4>Manufacturer</h4>
                                <h2>Shoe</h2>
                                <br />
                                <br />
                                <br />
                                <Sub>See Collections</Sub>
                            </Title>
                            <SecImage>
                                <Img2 src={img4}/>
                            </SecImage>
                        </Second>
                    </Card>
                    <Card>
                        <First>
                            <Circle>
                                <Img src={img9}/>
                            </Circle>
                            <span>12 Products</span>
                        </First>
                        <Second>
                            <Title>
                                <h4>Manufacturer</h4>
                                <h2>Shoe</h2>
                                <br />
                                <br />
                                <br />
                                <Sub>See Collections</Sub>
                            </Title>
                            <SecImage>
                                <Img2 src={img12}/>
                            </SecImage>
                        </Second>
                    </Card>
                    <Card>
                        <First>
                            <Circle>
                                <Img src={img8}/>
                            </Circle>
                            <span>12 Products</span>
                        </First>
                        <Second>
                            <Title>
                                <h4>Manufacturer</h4>
                                <h2>Shoe</h2>
                                <br />
                                <br />
                                <br />
                                <Sub>See Collections</Sub>
                            </Title>
                            <SecImage>
                                <Img2 src={img14}/>
                            </SecImage>
                        </Second>
                    </Card>
                    <Card>
                        <First>
                            <Circle>
                                <Img src={img1}/>
                            </Circle>
                            <span>12 Products</span>
                        </First>
                        <Second>
                            <Title>
                                <h4>Manufacturer</h4>
                                <h2>Shoe</h2>
                                <br />
                                <br />
                                <br />
                                <Sub>See Collections</Sub>
                            </Title>
                            <SecImage>
                                <Img2 src={img13}/>
                            </SecImage>
                        </Second>
                    </Card>
                    <Card>
                        <First>
                            <Circle>
                                <Img src={img1}/>
                            </Circle>
                            <span>12 Products</span>
                        </First>
                        <Second>
                            <Title>
                                <h4>Manufacturer</h4>
                                <h2>Shoe</h2>
                                <br />
                                <br />
                                <br />
                                <Sub>See Collections</Sub>
                            </Title>
                            <SecImage>
                                <Img2 src={img11}/>
                            </SecImage>
                        </Second>
                    </Card>
                </CardHold>
            </CardHolder>
        </Container>
    </div>
  )
}

export default Expolore

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
border-radius: 50px;
`

const Circle = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: #f3f3f5;
cursor: pointer;

`

const First = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Sub = styled.div``

const Title = styled.div``

const Img2 =styled.img`
width: 100%;
height: 100%;
object-fit: contain;
border-radius: 30px;
`

const SecImage = styled.div`
width: 180px;
height: 180px;
border-radius: 50px;
object-fit: contain;
cursor: pointer;
`

const Second = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Card = styled.div`
height: 270px;
width: 300px;
border-radius: 10px;
padding: 20px;
background-color: white;
margin: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

	h4 {
		color: gray;
	}

`

const CardHold = styled.div`
margin-top: 50px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

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

span{
    margin-right: 10px;
}
`

const ExploreHold = styled.div`
width: 720px;
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
align-items: center;
flex-direction: column;

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