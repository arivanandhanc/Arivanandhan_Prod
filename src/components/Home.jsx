import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import image from './arivu.png';

const Home = () => {
  return (
    <div
      className="home-wrap"
      style={{
        textAlign: 'center',
        backgroundColor: '#000000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Image on the Right End */}
      <div
        className="home-image"
        style={{
          position: 'absolute',
          right: 0,
          height: '100%',
          width: 'auto',
          maxWidth: '600px',
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt="Arivanandhan Chitheshwaran"
          style={{ width: 'auto', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div
        className="home-content"
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
            fontSize: 'clamp(2rem, 8vw, 3rem)',
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
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
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

        {/* Social Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            {
              href: 'https://github.com/respectedarivu',
              label: 'GitHub',
              icon: <FaGithub size={20} color="#ffffff" />,
              hover: '#333333',
            },
            {
              href: 'https://linkedin.com/in/respectedarivu',
              label: 'LinkedIn',
              icon: <FaLinkedin size={20} color="#ffffff" />,
              hover: '#0a66c2',
            },
            {
              href: 'mailto:arivanandhan33@gmail.com',
              label: 'Email',
              icon: <FaEnvelope size={20} color="#ffffff" />,
              hover: '#ff0000',
            },
            {
              href: 'https://forms.gle/W2wP1qwjFfoVA8Be7',
              label: '✍️ Your Words!',
              icon: null,
              hover: '#007acc',
            },
          ].map((b) => (
            <a
              key={b.label}
              href={b.href}
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
                minHeight: 44,
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = b.hover)}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {b.icon} {b.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
