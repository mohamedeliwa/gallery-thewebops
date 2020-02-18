import React from 'react';
import styled from "styled-components";
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';

const AppStyled = styled.div`
  //background-color: lightgrey;
  padding-top: 2.5rem;
  //text-align: center;
  max-width: 1100px;
  min-height: 200vh;
  margin: 0 auto;
`;


function App() {
  return (
    <AppStyled className="App">
      <Header />
      <Breadcrumb />       
    </AppStyled>
  );
}

export default App;
