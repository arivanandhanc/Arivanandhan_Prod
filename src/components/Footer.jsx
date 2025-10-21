import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: 'clamp(12px, 3vw, 16px)',
      backgroundColor: '#1f1f1f',
      marginTop: '2rem'
    }}>
      <p style={{ fontSize: 'clamp(12px, 2.2vw, 16px)' }}>
        © 2024 Arivanandhan Chitheshwaran. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
