import React from 'react';

function Card({ amount, img, checkoutHandler }) {
  return (
    <div>
      <img src={img} alt="Product" height={500} width={500} />
      <h1>{amount}</h1>
      <button
        onClick={()=>checkoutHandler(amount)}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default Card;
