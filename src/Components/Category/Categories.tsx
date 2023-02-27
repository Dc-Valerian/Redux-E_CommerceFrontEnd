import React, {useState } from 'react'
import styled from 'styled-components';
import { RiWomenLine, RiVipCrownLine } from "react-icons/ri"
import { AiOutlineMan } from "react-icons/ai"
import { IoDiamondOutline } from "react-icons/io5"
import { BsArrowRight } from 'react-icons/bs';
import blackbag from "../Assets/black-bag.png";
import cloth from "../Assets/black-bag.png";
import green from "../Assets/black-bag.png";
import bag3 from "../Assets/black-bag.png";
import short from "../Assets/black-bag.png";
import blackshoe from "../Assets/black-shoe.png";
import explore1 from "../Assets/explore1.svg";
import explore2 from "../Assets/explore2.svg";
import explore3 from "../Assets/explore3.svg";
import explore4 from "../Assets/explore5.svg";
import explore5 from "../Assets/explore6.svg";
import explore6 from "../Assets/explore9.svg";

const Categories = () => {

  const [showwomen, setShowwomen] = useState<Boolean>(true)
  const [showmen, setshowmen] = useState<Boolean>(false)
  const [showkids, setshowkids] = useState<Boolean>(false)
  const [showsports, setShowsports] = useState<Boolean>(false)
  const [showbeauty, setShowbeauty] = useState<Boolean>(false)
  const [showjewelry, setShowjewelry] = useState<Boolean>(false)

  const togglewomen = () =>{
    setShowwomen(true)
    setshowmen(false)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglemen = () =>{
    setShowwomen(false)
    setshowmen(true)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglekids = () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(true)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglesports= () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(false)
    setShowsports(true)
    setShowbeauty(false)
    setShowjewelry(false)
  }
  
  const togglebeauty = () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(true)
    setShowjewelry(false)
  }
  
  const togglejewelry = () =>{
    setShowwomen(false)
    setshowmen(false)
    setshowkids(false)
    setShowsports(false)
    setShowbeauty(false)
    setShowjewelry(true)
  }
  
  
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>Start exploring.</h1>
          <Category>
            <Div onClick={togglewomen} bcc = {showwomen ? "bcc" : ""}>
              <span><RiWomenLine /></span>
           Valerian
            </Div> 
            <Div onClick={togglemen} bcc = {showmen ? "bcc" : ""}>
              <span><AiOutlineMan /></span>
              Pedro
            </Div> 
            <Div onClick={togglekids} bcc = {showkids ? "bcc" : ""}>
              <span><RiWomenLine /></span>
              CodeLab
            </Div>
            <Div onClick={togglesports} bcc = {showsports ? "bcc" : ""}>
              <span><RiWomenLine /></span>
              Unicorn
            </Div>
            <Div onClick={togglebeauty} bcc = {showbeauty ? "bcc" : ""}>
              <span><RiVipCrownLine /></span>
              Divine
            </Div>
            <Div onClick={togglejewelry} bcc = {showjewelry ? "bcc" : ""}>
              <span><IoDiamondOutline /></span>
              Peace
            </Div>
          </Category>

          <Cards>

                <Card style={{backgroundImage: `url(${explore1})`}}>
                    <Top>
                        <TopImg src={blackbag}/>

                        <TopText>173 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>BackPack</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage: `url(${explore2})`}}>
                    <Top>
                        <TopImg src={blackshoe}/>

                        <TopText>254 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Shoe</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>
                <Card style={{backgroundImage: `url(${explore3})`}}>
                    <Top>
                        <TopImg src={cloth} />

                        <TopText>173 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Recycled Blanket</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage: `url(${explore4})`}}>
                    <Top>
                        <TopImg src={green}/>

                        <TopText>279 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Cycling Shirts</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage: `url(${explore5})`}}>
                    <Top>
                        <TopImg src={short}/>

                        <TopText>320 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Shorts</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage: `url(${explore6})`}}>
                    <Top>
                        <TopImg src={bag3}/>

                        <TopText>261 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Bags</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

          </Cards>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Categories;

const Back = styled.div`
font-size: 25px;
font-weight: 600;
color: #0f172a;
margin-top: 8px;
`;

const Manu = styled.div`
font-size: 13px;
color: #0f172a;
`;

const TopText = styled.div`
font-size: 12px;
font-weight: 600;
color: #0f172a;
`;

const TopImg = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
background-color: #f6f7f8;
`;

const Bottom = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
color: #0f172a;
font-size: 15px;
gap: 5px;
font-weight: 600;
width: 90%;
`;

const Mid = styled.div`
width: 90%;
`;

const Top = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;

const Card = styled.div`
width: 340px;
height: 315px;
background-color: white;
border-radius: 10px;
padding: 5px;
background-image: url(/images/explore1.svg);
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
cursor: pointer;

:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`;

const Cards = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-top: 50px;
gap: 3rem;
`;

const Div = styled.div<{bcc: string}>`
  width: 150px;
  /* height: 50px; */
  border-radius: 30px;
  padding: 10px 15px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  span{
    margin-right: 10px;
    font-size: 25px;
  }
  background-color: ${({bcc}) => bcc ? "#0F172A": ""};
  color: ${({bcc}) => bcc ? "#fff" : ""};
`;
const Category = styled.div`
  width: 800px;
  height: 50px;
  padding: 5px 0px 5px 0px;
  background-color: #fff;
  border-radius: 40px;
  color: #0F172A;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  padding: 40px 0px 40px 0px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  padding: 70px 0px 70px 0px;
  border-radius: 30px;
  background-color: #F7F7F9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0px 50px 0px;
`;