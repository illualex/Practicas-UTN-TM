import React from 'react';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const tarjetas = [
    {
      colors: ["#000000", "#FF4191", "#E90074", "#FFF078"],
      likes: 311,
      update: "5 días",
      id: 0,
    },
    {
      colors: ["#EEEDEB", "#E6B9A6", "#939185", "#2F3645"],
      likes: 567,
      update: "6 días",
      id: 1,
    },
    {
      colors: ["#36BA98", "#E9C46A", "#F4A261", "#E76F51"],
      likes: 504,
      update: "1 semana",
      id: 2,
    },
    {
      colors: ["#667BC6", "#FDFFD2", "#FFB4C2", "#DA7297"],
      likes: 682,
      update: "1 semana",
      id: 3,
    },
  ];

  return (
    <div className="app">
      {tarjetas.map((tarjeta) => (
        <Card
          key={tarjeta.id}
          colors={tarjeta.colors}
          likes={tarjeta.likes}
          update={tarjeta.update}
          id={tarjeta.id}
        />
      ))}
    </div>
  );
}

export default App;
