import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f8ff',
      color: '#4caf50',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    message: {
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#4caf50',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment Successful!</h1>
      <p style={styles.message}>
        Thank you for your purchase. Your transaction has been completed.
      </p>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
}

export default PaymentSuccess;
