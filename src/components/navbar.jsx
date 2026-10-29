import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
      
        <a 
          href="#" 
          className="logo-container" 
          onClick={(e) => { 
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
        >
          <img src={logoImg} alt="CampusPe Logo" className="logo-img" />
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#colleges" onClick={(e) => handleScroll(e, 'colleges')}>
            Colleges
          </a>
          <a href="#employers" onClick={(e) => handleScroll(e, 'employers')}>
            Employers
          </a>
         
          <a href="#jobs" onClick={(e) => handleScroll(e, 'jobs')}>
            Jobs
          </a>
          <a href="#blogs" onClick={(e) => handleScroll(e, 'blogs')}>
            Blogs
          </a>
        </nav>

        <div className="nav-actions">
          <button 
            className="btn-secondary" 
            onClick={() => onOpenModal && onOpenModal('login')}
          >
            Sign In
          </button>
          <button 
            className="btn-primary" 
            onClick={() => onOpenModal && onOpenModal('job')}
          >
            Sign Up
          </button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}