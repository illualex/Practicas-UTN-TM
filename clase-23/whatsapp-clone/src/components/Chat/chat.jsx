import React from 'react';
import './chat.css';
import Message from '../Message/massage';

function Chat({ mensajes }) {
    return (
        <div className="chat">
            {mensajes.map(mensaje => (
                <Message key={mensaje.id} mensaje={mensaje} />
            ))}
        </div>
    );
}

export default Chat;
