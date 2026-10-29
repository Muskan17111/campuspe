import React from 'react';
import './footer.css';

export default function ReadyNext() {
  return (
    <div className="ready-next-banner">
      <div className="ready-next-left">
        <h2>Ready for what's next?</h2>
        <p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p>
      </div>
      <div className="ready-next-buttons">
        <button className="btn-outline-white">List Your College ▾</button>
        <button className="btn-outline-white">Find a Job ▾</button>
      </div>
    </div>
  );
}