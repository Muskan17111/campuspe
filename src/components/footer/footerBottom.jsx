import React from 'react';
import './footer.css';

export default function FooterBottom() {
  return (
    <div className="footer-bottom-wrapper">
      <div className="footer-contact-row">
        <div className="contact-links-group">
          <a href="mailto:contactus@campuspe.com" className="contact-item">
            <span>✉</span> contactus@campuspe.com
          </a>
          <a href="tel:+919876543210" className="contact-item">
            <span>📞</span> +91 98765 43210
          </a>
        </div>
        <div className="platform-audience-tag">
          ● Students • Colleges • Employers
        </div>
      </div>
      <div className="footer-legal-social-row">
        <p className="copyright-text">
          © 2026 CampusPe Technologies Pvt. Ltd. Privacy • Terms • Grievance
        </p>

        <div className="social-links-list">
          <a href="#linkedin" aria-label="LinkedIn">in</a>
          <a href="#instagram" aria-label="Instagram">📷</a>
          <a href="#twitter" aria-label="Twitter">𝕏</a>
          <a href="#facebook" aria-label="Facebook">f</a>
          <a href="#whatsapp" aria-label="WhatsApp">💬</a>
          <a href="#youtube" aria-label="YouTube">▶</a>
        </div>
      </div>
    </div>
  );
}