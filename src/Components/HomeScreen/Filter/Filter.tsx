import React from 'react'
import styled from 'styled-components';
import filter from "../../Assets/filter.png";
import products from "../../Assets/products.png";
import shipping from "../../Assets/shipping.png";
import addtobag from "../../Assets/addtobag.png";

const Filter = () => {
  return (
    <div>
        <Container>
            <Wrapper>
              <Pack>
                <Img>
                  <img src={filter} alt="" />
                </Img>
                <Step bcc = "#FEE2E2" cc = "#BD603B">Step 1</Step>
                <Title>Filter & Discover</Title>
                <Bio>Smart filtering and suggestions make it easy to find</Bio>
              </Pack>
              <Pack>
                <Img>
                  <img src={addtobag} alt="" />
                </Img>
                <Step bcc = "#E0E7FF" cc = "#374DB5">Step 2</Step>
                <Title>Add to bag</Title>
                <Bio>Easily select the correct items and add them to the cart</Bio>
              </Pack>
              <Pack>
                <Img>
                  <img src={shipping} alt="" />
                </Img>
                <Step bcc = "#FEF9C3" cc = "#C48C36">Step 3</Step>
                <Title>Fast shipping</Title>
                <Bio>The carrier will confirm and ship quickly to you</Bio>
              </Pack>
              <Pack>
                <Img>
                  <img src={products} alt="" />
                </Img>
                <Step bcc = "#F3E8FF" cc = "#9721A8">Step 4</Step>
                <Title>Enjoy the product</Title>
                <Bio>Have fun and enjoy your 5-star quality products</Bio>
              </Pack>
              <hr />
            </Wrapper>
        </Container>
    </div>
  )
}

export default Filter;

const Step = styled.button<{bcc: string; cc: string}>`
  width: 65px;
  height: 30px;
  font-weight: 600;
  border-radius: 30px;
  background-color: ${(props) => props.bcc};
  color: ${(props) => props.cc};
  border: none;
`;
const Bio = styled.p`

`;
const Title = styled.h3``;
const Img = styled.div`
  width: 60%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Pack = styled.div`
  width: 20%;
  padding: 20px 0px 20px 0px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div`
    width: 90%;
    padding: 10px 0px 10px 0px;
    /* background-color: blue; */
    justify-content: space-between;
    display: flex;
    align-items: center;
   flex-wrap: wrap;
   hr{
    width: 100%;
    border: 1px solid #e2dfdf;
    margin-top: 40px;
  }
`;
const Container = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
`;