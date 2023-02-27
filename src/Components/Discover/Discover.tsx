import React from 'react'
import styled from 'styled-components';
import yellowshirt from "../Assets/yellow-shirt.png"
import baseball from "../Assets/baseball.png"

const Discover = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Discover more. <span>Good things are waiting for you</span></h1>
                <CardHold>
                    <Card>
                        <Text>
                            <Content>
                            <h3>Explore new arrivals</h3>
                            <h2>Shop the latest from top brands</h2>
                            </Content>
                            <Button>Show me all</Button>
                        </Text>
                        <Image>
                                <img src={yellowshirt} alt="" />
                        </Image>
                    </Card>
                    <Card>
                        <Text>
                            <Content>
                            <h3>Explore new arrivals</h3>
                            <h2>Shop the latest from top brands</h2>
                            </Content>
                            <Button>Show me all</Button>
                        </Text>
                        <Image>
                                <img src={baseball} alt="" />
                        </Image>
                    </Card>
                </CardHold>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Discover;

const Container = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 90%;
    padding: 10px 0px 10px 0px;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    span{
        color: gray;
    }
`;
const CardHold = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* background-color: yellow; */
`;
const Card = styled.div`
    width: 450px;
    padding: 20px;
    background-color: #EFF6FF;
    border-radius: 10px;
    margin: 10px;
    display: flex;
`;
const Text = styled.div`
    width: 50%;
    /* background-color: purple; */
    display: flex;
    flex-direction: column;
`;
const Content = styled.div`
    h2{
        margin: 0;
    }
`;
const Image = styled.div`
    width: 50%;
    /* background-color: aqua; */
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Button = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 30px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-top: 60px;
`;