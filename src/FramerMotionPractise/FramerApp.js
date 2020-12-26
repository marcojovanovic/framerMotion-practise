import React from 'react';
import styled from 'styled-components';
import BallsContainer from './BallsContainer';
import { GlobalStyled } from './GlobalStyle';
import Info from './Info';

function FramerApp() {
  return (
    <>
      <GlobalStyled />
      <AppWrapper>
        <Info />
        <BallsContainer />
      </AppWrapper>
    </>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width:800px){

    flex-direction:column;
    justify-content:start;
    padding:2rem;
    text-align:center;


  }
`;

export default FramerApp;
