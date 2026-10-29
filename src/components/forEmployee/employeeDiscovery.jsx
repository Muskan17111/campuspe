import React from 'react';
import './employee.css';

export default function EmployerDiscovery({ onOpenModal }) {
  return (
    <div className="employers-left">
      <div className="employers-pill-tag">
        <span className="employers-dot">●</span> 03 • FOR EMPLOYERS
      </div>

      <h2 className="employers-heading">
        Stop running <br />
        campus drives. <br />
        <span className="employers-heading-blue">Start hiring the right</span> <br />
        <span className="employers-heading-blue">people.</span>
      </h2>

      <p className="employers-description">
        Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
      </p>

      <button
        className="employers-cta-btn"
        onClick={() => onOpenModal && onOpenModal('hiring')}
      >
        Post a Job →
      </button>
    </div>
  );
}