import React, { useState } from 'react';
import whatsappLogo from '../assets/whatsapplogo.svg';

export default function Hero({ onOpenModal }) {

  const [activeStatId, setActiveStatId] = useState(null);

  const statsData = [
    {
      id: 1,
      number: '800+',
      label: 'Students',
      detail: 'Verified profiles from IITs, NITs & top colleges',
      icon: '👥',
      bgColor: '#ede9fe',
      iconColor: '#7c3aed'
    },
    {
      id: 2,
      number: '130+',
      label: 'colleges',
      detail: 'Direct placement cell partnerships across India',
      icon: '🏛️',
      bgColor: '#e0f2fe',
      iconColor: '#0284c7'
    },
    {
      id: 3,
      number: '100+',
      label: 'jobs & internships',
      detail: 'Live roles with instant interview callbacks',
      icon: '💼',
      bgColor: '#dcfce7',
      iconColor: '#16a34a'
    },
    {
      id: 4,
      number: '100%',
      label: 'Safe & Trusted',
      detail: 'Every recruiter and job opening is manually verified',
      icon: '🛡️',
      bgColor: '#ffedd5',
      iconColor: '#ea580c'
    }
  ];

  const partners = [
    { name: 'GINSERV', sub: 'Nurturing Ventures', icon: '🔵', color: '#0284c7' },
    { name: 'STARTUP KARNATAKA', sub: 'Govt of Karnataka', icon: '🦅', color: '#ea580c' },
    { name: 'RANI CHANNAMMA', sub: 'University Partner', icon: '🏛️', color: '#b45309' },
    { name: 'TALENTSPOTIFY', sub: 'HR Tech Partner', icon: '✳️', color: '#15803d' },
    { name: 'RADIANT Info', sub: 'Hiring Partner', icon: '🔥', color: '#dc2626' },
    { name: 'DPIIT', sub: '#startupindia', icon: '🦁', color: '#334155' }
  ];

  const handleToggleStat = (id) => {
    setActiveStatId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-top-grid">
          <div className="side-floating-card">
          <div className="card-header-mini">
                        <img src={whatsappLogo} alt="WhatsApp Logo" className="whatsapp-logo" width="16" height="16" />
            <span className="wa-title">WhatsApp Alert</span>
          </div>
            <h4>Get notified on whatsapp</h4>
            <p>You'll get all important updates on your whatsapp</p>
          </div>

          <div className="hero-main-content">
            <div className="ai-badge">
              <span>🤖</span>
              <span>AI-Powered Campus Assistant</span>
            </div>
            <h1 className="hero-title">
              Connect <span className="gradient-text">10X Faster.</span>
            </h1>
            <p className="hero-subtitle">
              One platform connecting students, colleges & employers — faster.
            </p>
            <div className="looking-row">
              <span className="sparkle">✦</span>
              <h2>What are you looking for?</h2>
              <span className="sparkle">✦</span>
            </div>
          </div>

          <div className="side-floating-card">
            <div className="card-header-mini">
              <span>⚡</span>
              <span className="resume-title">Resume Builder</span>
            </div>
            <h4>Build Your Resume</h4>
            <p>Our resume builder gives you dynamic options to build better & faster resume that get you hired</p>
          </div>
        </div>

       
        <div className="hero-notifications-row">
          <div className="notif-pill">
            <div className="pill-avatars">
              <span className="av av-blue">IIT</span>
              <span className="av av-teal">NIT</span>
              <span className="av av-indigo">VIT</span>
            </div>
            <div className="pill-text-content">
              <strong>🔥 142 students matched today</strong>
              <span>Just now • IIT, NITs, VIT</span>
            </div>
          </div>

          <div className="notif-pill">
            <div className="pill-icon-box">🏢</div>
            <div className="pill-text-content">
              <strong><span className="blue-text">Radiant Info</span> shortlisted 8 interns</strong>
              <span className="green-text">● Verified recruiter • 2 days ago</span>
            </div>
          </div>
        </div>


        <div className="hero-cards-grid">
  
          <div className="hero-role-card" id="colleges">
            <div className="role-card-top">
              <div className="role-icon-circle">🎓</div>
              <span className="status-badge">Coming Soon</span>
            </div>
            <h3>College</h3>
            <p className="role-desc">Explore colleges, courses, fees, placements & more</p>
            <ul className="role-features">
              <li><span className="check-blue">✓</span> Search by course, location, fees</li>
              <li><span className="check-blue">✓</span> Connect directly with colleges</li>
              <li><span className="check-blue">✓</span> Improve student placements</li>
            </ul>
            <button className="role-btn" onClick={() => onOpenModal && onOpenModal('college')}>
              Join Waitlist 🔔
            </button>
          </div>


          <div className="hero-role-card active-job-card" id="jobs">
            <div className="role-card-top">
              <div className="role-icon-circle">🎓</div>
              <span className="status-badge available-badge">Available Now</span>
            </div>
            <h3>I'm Looking for a Job</h3>
            <p className="role-desc">Upload your resume. We'll find jobs that fit you.</p>
            
            <div className="job-card-body">
              <ul className="role-features">
                <li><span className="check-pink">✓</span> Jobs from 1000+ sources</li>
                <li><span className="check-pink">✓</span> AI powered matching</li>
                <li><span className="check-pink">✓</span> WhatsApp & email alerts</li>
              </ul>
              <div className="resume-graphic">
                <div className="res-line orange"></div>
                <div className="res-line green"></div>
                <div className="res-line gray"></div>
                <div className="res-line gray short"></div>
                <div className="res-magnifier">🔍</div>
              </div>
            </div>

            <button className="role-btn" onClick={() => onOpenModal && onOpenModal('job')}>
              Explore Jobs →
            </button>
          </div>


          <div className="hero-role-card" id="employers">
            <div className="role-card-top">
              <div className="role-icon-circle">💼</div>
              <span className="status-badge">Coming Soon</span>
            </div>
            <h3>I'm Hiring</h3>
            <p className="role-desc">Connect with colleges and find candidates — from students to graduates.</p>
            <ul className="role-features">
              <li><span className="check-blue">✓</span> Connect directly with colleges</li>
              <li><span className="check-blue">✓</span> Find the right candidates</li>
              <li><span className="check-blue">✓</span> Simplify your hiring</li>
            </ul>
            <div className="code-badge">&lt;/&gt;</div>
            <button className="role-btn" onClick={() => onOpenModal && onOpenModal('hiring')}>
              Join Waitlist 🔔
            </button>
          </div>
        </div>

        <div className="stats-banner-grid">
          {statsData.map((stat) => {
            const isToggled = activeStatId === stat.id;
            return (
              <div
                key={stat.id}
                className={`stat-box ${isToggled ? 'stat-toggled' : ''}`}
                onClick={() => handleToggleStat(stat.id)}
              >
                <div
                  className="stat-icon-circle"
                  style={{ backgroundColor: stat.bgColor, color: stat.iconColor }}
                >
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                  {isToggled && (
                    <span className="stat-toggle-detail">{stat.detail}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="partners-wrapper">
          <p className="partners-title">Trusted by partners across India</p>
          
          <div className="marquee-viewport">
            <div className="marquee-track">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="partner-logo-card">
                  <span className="partner-icon">{partner.icon}</span>
                  <div className="partner-text">
                    <strong style={{ color: partner.color }}>{partner.name}</strong>
                    <span>{partner.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}