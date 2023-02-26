import React from 'react'
import styled from 'styled-components'

const Product = () => {
  return (
    <div>
        <Container>
            <Head>
                New Arrivals.{" "}
                <span>
                  Val BackPacks & Bags
                </span>
            </Head>
            <CardHolder>
              <Card>
                <MainImage>
                  <ImageHold>
                    <Img/>
                  </ImageHold>
                  <Title>

                  </Title>
                  <Description>

                  </Description>
                  <PriceHold>
                    <Price>

                    </Price>
                    <Rating>

                    </Rating>
                  </PriceHold>
                </MainImage>
              </Card>
            </CardHolder>
        </Container>
    </div>
  )
}

export default Product
const ImageHold = styled.div``

const Img = styled.img``

const Title = styled.div``

const Description = styled.div``

const Price = styled.div``

const Rating = styled.div``

const PriceHold = styled.div``

const MainImage = styled.div``

const Card = styled.div``

const CardHolder = styled.div``

const Head = styled.div``

const Container = styled.div``