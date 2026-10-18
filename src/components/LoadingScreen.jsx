import React, { useEffect, useState } from 'react';
import navLogo from '../assets/navbar/navbarbenar.png';

const LoadingScreen = ({ onFinished }) => {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('hold'), 500);
    const holdTimer = setTimeout(() => setPhase('exit'), 2300);
    const exitTimer = setTimeout(() => onFinished(), 3100);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinished]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#061E14',
        transition: 'opacity 0.8s ease',
        opacity: phase === 'exit' ? 0 : 1,
        pointerEvents: phase === 'exit' ? 'none' : 'auto',
      }}
    >
      {/* Radial glow bg */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        animation: 'pulse-glow 2.5s ease-in-out infinite',
      }} />

      {/* Logo */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'scale(0.7) translateY(20px)' : 'scale(1) translateY(0)',
        }}
      >
        <img
          src={navLogo}
          alt="KHAD Team Logo"
          style={{
            width: '220px',
            height: 'auto',
            filter: 'drop-shadow(0 0 32px rgba(16,185,129,0.5))',
          }}
        />
      </div>

      {/* Loading bar track */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '48px',
          width: '160px',
          height: '2px',
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
          transition: 'opacity 0.4s ease',
          opacity: phase === 'enter' ? 0 : 1,
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #10b981, #06b6d4)',
            boxShadow: '0 0 12px rgba(16,185,129,0.8)',
            animation: (phase === 'hold' || phase === 'exit')
              ? 'loading-bar 1.8s cubic-bezier(0.4,0,0.2,1) forwards'
              : 'none',
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '20px',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(148,163,184,0.6)',
          fontFamily: "'Oswald', sans-serif",
          transition: 'opacity 0.6s ease 0.2s',
          opacity: phase === 'enter' ? 0 : 1,
        }}
      >
        Energy Efficient Vehicle Research Team
      </p>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50%       { transform: scale(1.1); opacity: 1; }
        }
        @keyframes loading-bar {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
