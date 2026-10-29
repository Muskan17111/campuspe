import React from 'react';
import './footer.css';

export default function FooterLinks() {
  return (
    <div className="footer-links-grid">
      <div className="footer-brand-col">
        <div className="footer-logo">
          <span className="logo-sparkle">✦</span>
          <span className="logo-text">CampusPe</span>
        </div>
        <p className="footer-brand-tagline">
          From choosing a college to finding your next opportunity.
        </p>
        <p className="footer-brand-desc">
          CampusPe connects students, colleges and employers in one place.
        </p>
      </div>

      <div className="footer-col">
        <h4>For Students</h4>
        <ul>
          <li><a href="#colleges">Explore Colleges</a></li>
          <li><a href="#opportunities">Find Opportunities</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#full-time">Full-time Jobs</a></li>
          <li><a href="#gigs">Part-time & Gig</a></li>
          <li><a href="#tracker">Application Tracker</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>For Colleges</h4>
        <ul>
          <li><a href="#list">List Your College</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#hire-crm">Hire CRM & ERP</a></li>
          <li><a href="#placements">Placements</a></li>
        </ul>
      </div>

  
      <div className="footer-col">
        <h4>For Employers</h4>
        <ul>
          <li><a href="#post-job">Post a Job</a></li>
          <li><a href="#find-talent">Find Talent</a></li>
          <li><a href="#campus-hiring">Campus Hiring</a></li>
        </ul>
      </div>

   
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Legal & Policies</h4>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#refund">Refund & Cancellation Policy</a></li>
          <li><a href="#cookie">Cookie Policy</a></li>
          <li><a href="#grievance">Grievance Redressal</a></li>
          <li><a href="#disclaimer">Job & Internship Disclaimer</a></li>
          <li><a href="#all-policies" className="view-all-link">View all policies →</a></li>
        </ul>
        <div className="footer-disclaimer-box">
          <small>Separate student, institution and employer terms run this platform.</small>
        </div>
      </div>
    </div>
  );
}