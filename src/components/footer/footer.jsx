import React from 'react';
import StillQuestions from './StillQuestions';
import ReadyNext from './ready';
import FooterLinks from './footerlinks';
import FooterBottom from './footerBottom';
import './footer.css';

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <StillQuestions />
        <ReadyNext />
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}