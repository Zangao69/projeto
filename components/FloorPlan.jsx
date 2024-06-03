import React from 'react';
import styled from 'styled-components';

const FloorPlanContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  background-color: white;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: auto;
`;

const StyledText = styled.text`
  font-size: 14px;
  fill: black;
  text-anchor: middle;
`;

function FloorPlan() {
  return (
    <FloorPlanContainer>
      <StyledSVG viewBox="0 0 1000 1500">
        {/* Corredor central */}
        <rect x="250" y="50" width="500" height="20" fill="gray" />

        {/* Salas do lado esquerdo do corredor */}
        {Array.from({ length: 10 }).map((_, i) => (
          <React.Fragment key={`left-${i}`}>
            <rect x="100" y={100 + i * 120} width="150" height="100" fill="none" stroke="black" strokeWidth="3" />
            <StyledText x="175" y={150 + i * 120}>{`Sala ${i + 1}`}</StyledText>
          </React.Fragment>
        ))}

        {/* Salas do lado direito do corredor */}
        {Array.from({ length: 10 }).map((_, i) => (
          <React.Fragment key={`right-${i}`}>
            <rect x="750" y={100 + i * 120} width="150" height="100" fill="none" stroke="black" strokeWidth="3" />
            <StyledText x="825" y={150 + i * 120}>{`Sala ${i + 11}`}</StyledText>
          </React.Fragment>
        ))}

        {/* Garagem */}
        <rect x="100" y="1300" width="150" height="100" fill="none" stroke="black" strokeWidth="3" />
        <StyledText x="175" y="1350">Garagem</StyledText>

        {/* Entrada */}
        <rect x="750" y="1300" width="150" height="100" fill="none" stroke="black" strokeWidth="3" />
        <StyledText x="825" y="1350">Entrada</StyledText>

        {/* Pátio */}
        <rect x="300" y="1300" width="200" height="100" fill="none" stroke="black" strokeWidth="3" />
        <StyledText x="400" y="1350">Pátio</StyledText>

        {/* Refeitório */}
        <rect x="550" y="1300" width="200" height="100" fill="none" stroke="black" strokeWidth="3" />
        <StyledText x="650" y="1350">Refeitório</StyledText>

        {/* Banheiro Masculino */}
        <rect x="100" y="1100" width="150" height="100" fill="none" stroke="black" strokeWidth="3" />
        <StyledText x="175" y="1150">Banheiro Masculino</StyledText>

        {/* Banheiro Feminino */}
        <rect x="750" y="1100" width="150" height="100" fill="none" stroke="black" strokeWidth="3" />
        <StyledText x="825" y="1150">Banheiro Feminino</StyledText>
      </StyledSVG>
    </FloorPlanContainer>
  );
}

export default FloorPlan;
