import React, { useState } from 'react';
import './input.css';

function Input({ onSend }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
            />
            <button type="submit">
                <span>Send</span>
            </button>
        </form>
    );
}

export default Input;
