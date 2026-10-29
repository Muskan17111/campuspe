import React from 'react';
import './college.css';

export default function CollegeDiscovery({ onOpenModal }) {
  return (
    <div className="colleges-left">
      <div className="colleges-pill-tag">
        <span className="colleges-dot">●</span> 02 • FOR COLLEGES
      </div>

      <h2 className="colleges-heading">
        Get Discovered <br />
        <span className="colleges-heading-blue">by Students and</span> <br />
        <span className="colleges-heading-blue">Recruiters.</span>
      </h2>

      <p className="colleges-description">
        Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
      </p>

      <button
        className="colleges-cta-btn"
        onClick={() => onOpenModal && onOpenModal('college')}
      >
        List Your College →
      </button>
    </div>
  );
}