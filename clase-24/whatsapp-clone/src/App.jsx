import React, { useState } from 'react';
import './main.css';
import Chat from './components/chat/chat';
import Header from './components/header/header';
import Input from './components/input/input';

function App() {
  const [mensajes, setMensajes] = useState([
    { autor: 'Pepe', contenido: 'Hola?', fecha: 'Ayer a 15:34', estado: 'visto', id: 1 },
    { autor: 'Yo', contenido: 'Sos real OMG', fecha: 'Ayer a 15:35', estado: 'visto', id: 2 },
    { autor: 'Pepe', contenido: 'Obviamente, acaso lo dudaste?', fecha: 'Ayer a 15:36', estado: 'visto', id: 3 },
    { autor: 'Yo', contenido: 'Jamas.', fecha: 'Ayer a 15:37', estado: 'entregado', id: 4 },
  ]);

  const handleSendMessage = (message) => {
    const newMessage = {
      autor: 'Yo',
      contenido: message,
      fecha: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estado: 'enviado',
      id: mensajes.length + 1
    };
    setMensajes([...mensajes, newMessage]);
  };

  return (
    <div className="App">
      <div className="chat-window">
        <Header nombre="Pepe" />
        <Chat mensajes={mensajes} />
        <Input onSend={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
