import React from 'react';
import CollegeDiscovery from './collegeDiscovery';
import CollegeFeatureCards from './collegeFeature';
import './college.css';

export default function ForCollege({ onOpenModal }) {
  return (
    <section  id="colleges" className="colleges-section">
      <div className="colleges-container">
        <CollegeDiscovery onOpenModal={onOpenModal} />
        <CollegeFeatureCards />
      </div>
    </section>
  );
}