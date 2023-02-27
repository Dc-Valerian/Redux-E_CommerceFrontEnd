import React from 'react';
import styled from 'styled-components';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
