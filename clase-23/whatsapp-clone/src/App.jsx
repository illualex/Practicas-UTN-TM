import React from 'react';
import './main.css';
import Chat from './components/Chat/chat';
import Header from './components/Header/header';

function App() {
  const mensajes = [
    { autor: 'Pepe', contenido: 'Hola?', fecha: 'Ayer a 15:34', estado: 'visto', id: 1 },
    { autor: 'Yo', contenido: 'Sos real OMG', fecha: 'Ayer a 15:35', estado: 'visto', id: 2 },
    { autor: 'Pepe', contenido: 'Obviamente, acaso lo dudaste?', fecha: 'Ayer a 15:36', estado: 'visto', id: 3 },
    { autor: 'Yo', contenido: 'Jamas.', fecha: 'Ayer a 15:37', estado: 'entregado', id: 4 },
  ];

  return (
    <div className="App">
      <div className="chat-window">
        <Header nombre="Pepe" />
        <Chat mensajes={mensajes} />
      </div>
    </div>
  );
}

export default App;