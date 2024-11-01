// components/Card.tsx
"use client";

import React from 'react';

const Card = ({ message }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            width: '230px',
            margin: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
            cursor: 'pointer'
        }} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} 
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <h2 style={{ color: '#4a90e2', fontSize: '1.5rem', marginBottom: '10px' }}>{message}</h2>
        </div>
    );
};

export default Card;
