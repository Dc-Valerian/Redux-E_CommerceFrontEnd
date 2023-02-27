import React from 'react'
import Categories from '../Category/Categories'
import Discover from '../Discover/Discover'
import Hero from '../Home/Hero/Hero'
import SpecialKids from '../SpecialKids/SpecialKids'
import Filter from './Filter/Filter'
import NewArrivals from './NewArrivals/NewArrivals'

const HomeScreen = () => {
  return (
    <div>
    <Hero/>
    <Discover />
    <NewArrivals />
    <Filter />
    <Categories />
    <SpecialKids />
    </div>
  )
}

export default HomeScreen