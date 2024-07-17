import React from 'react';
import './message.css';

function Message({ mensaje }) {
    return (
        <div className={`message ${mensaje.autor === 'Yo' ? 'mine' : 'theirs'}`}>
            <div className="message-content">{mensaje.contenido}</div>
            <div className="message-info">
                <span className="message-author">{mensaje.autor}</span>
                <span className="message-date">{mensaje.fecha}</span>
                <span className="message-status">{mensaje.estado}</span>
            </div>
        </div>
    );
}

export default Message;