import React from 'react';
import './footer.css';

export default function StillQuestions() {
  return (
    <div className="still-questions-card">
      <h3>Still have questions?</h3>
      <p>Our support team is here to help you succeed. Get in touch anytime.</p>
      
      <div className="still-questions-actions">
        <a href="#contact" className="btn-contact-support">
          Contact Support <span>↗</span>
        </a>
        <a href="#schedule" className="btn-schedule-call">
          Schedule a Call <span>📞</span>
        </a>
      </div>
    </div>
  );
}