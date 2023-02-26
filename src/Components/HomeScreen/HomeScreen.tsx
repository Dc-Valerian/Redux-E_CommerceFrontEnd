import React from 'react'
import Discover from '../Discover/Discover'
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
    </div>
  )
}

export default HomeScreen