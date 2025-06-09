import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import Icons
import image from './arivu.png'; // Import the image

const Home = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#000000', // Black background
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // For positioning the image
        overflow: 'hidden', // Hide overflow
      }}
    >
      {/* Image on the Right End */}
      <div
        style={{
          position: 'absolute',
          right: '0', // Align to the right end
          height: '100%',
          width: 'auto', // Maintain aspect ratio
          maxWidth: '600px', // Limit maximum width
          overflow: 'hidden', // Hide overflow during zoom
        }}
      >
        <img
          src={image}
          alt="Arivanandhan Chitheshwaran"
          style={{
            width: 'auto',
            height: '100%',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2rem, 8vw, 3rem)', // Responsive font size
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
            padding: '0 1rem',
            boxSizing: 'border-box',
          }}
        >
          ARIVANANDHAN CHITHESHWARAN
        </h1>
        <div
          style={{
            color: '#cccccc',
            fontSize: '1.2rem',
            marginBottom: '2rem',
            textAlign: 'center',
            padding: '0 1rem',
            boxSizing: 'border-box',
          }}
        >
          <TypeAnimation
            sequence={[
              'Welcome to my portfolio!',
              3000,
              'I am a passionate IT professional with expertise in React frontend development, Jira, New Relic!',
              3000,
            ]}
            speed={80}
            deletionSpeed={100}
            style={{ whiteSpace: 'pre-line' }}
            repeat={Infinity}
          />
        </div>

        {/* Social Links with Icons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/respectedarivu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              border: '2px solid #ffffff',
              borderRadius: '5px',
              transition: 'background 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => (e.target.style.background = '#333333')}
            onMouseOut={(e) => (e.target.style.background = 'transparent')}
          >
            <FaGithub size={20} color="#ffffff" /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/respectedarivu"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              border: '2px solid #ffffff',
              borderRadius: '5px',
              transition: 'background 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => (e.target.style.background = '#0a66c2')}
            onMouseOut={(e) => (e.target.style.background = 'transparent')}
          >
            <FaLinkedin size={20} color="#ffffff" /> LinkedIn
          </a>

          <a
            href="mailto:arivanandhan33@gmail.com"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              border: '2px solid #ffffff',
              borderRadius: '5px',
              transition: 'background 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => (e.target.style.background = '#ff0000')}
            onMouseOut={(e) => (e.target.style.background = 'transparent')}
          >
            <FaEnvelope size={20} color="#ffffff" /> Email
          </a>

          <a
            href="https://forms.gle/W2wP1qwjFfoVA8Be7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              border: '2px solid #ffffff',
              borderRadius: '5px',
              transition: 'background 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseOver={(e) => (e.target.style.background = '#007acc')}
            onMouseOut={(e) => (e.target.style.background = 'transparent')}
          >
            ✍️ Your Words!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
