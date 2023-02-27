import React from 'react'
import AllRoutes from './Components/AllRoutes/AllRoutes'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomeScreen from './Components/Homescreen/HomeScreen'

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App