import React from 'react';

const PlantaBaixa = () => {
  return (
    <div className="floor-plan">
      <h2>Planta Baixa</h2>
      {/* Estrutura básica para planta baixa */}
      <svg width="100%" height="600px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Exemplo simples de sala */}
        <rect x="10" y="10" width="30" height="20" fill="lightgray" stroke="black" />
        <text x="15" y="25" fontFamily="Verdana" fontSize="5">Sala 1</text>
        {/* Adicione mais elementos conforme necessário */}
      </svg>
    </div>
  );
};

export default PlantaBaixa;
