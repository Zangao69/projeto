import React from 'react';
import styled from 'styled-components';
import FloorPlan from './components/FloorPlan';
import './App.css';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

function App() {
  return (
    <MainContainer>
      <Title>Centro de Educação e Tecnologia Sesi Alagoas</Title>
      <FloorPlan />
      
    </MainContainer>
  );
}

export default App;
