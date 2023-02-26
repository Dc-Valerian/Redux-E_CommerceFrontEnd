import React from 'react'
import Discover from '../Discover/Discover'
import Expolore from '../Exploring/Expolore'
import Filter from '../Filter/Filter'
import Hero from '../Hero/Hero'
import Product from '../Product/Product'

const HomeScreen = () => {
  return (
    <div >
        <Hero/>
        <Discover/>
        <Product/>
        <Filter/>
        <Expolore/>
    </div>
  )
}

export default HomeScreen