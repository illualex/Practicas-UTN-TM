import React, { useState } from 'react';
import LikeButton from '../Button/Button';
import './Card.css';

const Card = ({ colors, likes, update, id }) => {
    /* -- EXTRA -- */
    /* Estado para almacenar el color sobre donde se coloque el mouse*/
    const [hoveredColor, setHoveredColor] = useState(null);
    /* Hace la acción de copiar color y muestra mensaje de alerta de copiado*/
    const handleCopyColor = (color) => {
        navigator.clipboard.writeText(color);
        window.alert('¡Color copiado!');
    };

    return (
        <div className="card">
            <div className="color-container">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="color"
                        /* Muestra el color del App.jsx */
                        style={{ backgroundColor: color }}
                        /* Muestra el color a colocar el mouse */
                        onMouseEnter={() => setHoveredColor(color)}
                        /* Quita el mensaje del color */
                        onMouseLeave={() => setHoveredColor(null)}
                        /* Acción para copiar el código del color seleccionado */
                        onClick={() => handleCopyColor(color)}
                    >
                        {/* Muestra el color del estado hover*/}
                        {hoveredColor === color && (
                            <span className="color-name">{color}</span>
                        )}
                    </div>
                ))}
            </div>
            <div className="info">
                {/* Importa componente btn */}
                <LikeButton likes={likes} />
                <p>{update}</p>
            </div>
        </div>
    );
};

export default Card;