// src/components/MyButton.jsx
import React from 'react';

function MyButton({ label, onClick, type = 'button', style = {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        ...style,
      }}
    >
      {label}
    </button>
  );
}

export default MyButton;
