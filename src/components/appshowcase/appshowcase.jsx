import React, { useState } from 'react';
import './appshowcase.css';
import iPhoneMockupImg from '../../assets/iPhone 12 Pro.png';
import googlePlayBadge from '../../assets/googlestore.svg';
import appStoreBadge from '../../assets/applestore.svg';

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);

  const screens = [
    {
      id: 0,
      name: 'Hi, Amit Kumar',
      sub: 'Discover Courses',
    },
    {
      id: 1,
      name: 'Post a Job',
      sub: 'Post Vacancy',
    },
    {
      id: 2,
      name: 'Hi, Amit Kumar',
      sub: 'Discover',
    },
    {
      id: 3,
      name: 'My Application',
      sub: 'Applied (12) | Shortlisted (2)',
    },
    {
      id: 4,
      name: 'XYZ College',
      sub: 'Campus Placements',

    }
  ];

  return (
    <section className="app-showcase-section">
      <div className="app-showcase-container">

        <div className="app-showcase-header">
          <h2 className="app-showcase-title">Checkout Our App Interface Look</h2>
          <p className="app-showcase-subtitle">
            Experience the power of a unified campus ecosystem right in your pocket. <strong className="app-brand-bold">CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
          </p>
        </div>

 
        <div className="carousel-stage-container">
          <div className="carousel-track-3d">
            {screens.map((item, idx) => {
              let offset = idx - activeIndex;
              if (offset < -2) offset += screens.length;
              if (offset > 2) offset -= screens.length;

              return (
                <div
                  key={item.id}
                  className={`phone-bezel pos-offset-${offset}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="phone-screen-display">
                    <div className="dynamic-island">
                      <span className="notch-speaker"></span>
                    </div>

                    <div className="app-screen-body">
                      <div className="screen-status-bar">
                        <span className="status-time">9:41</span>
                        <div className="status-icons">
                          <span>📶</span>
                          <span>🔋</span>
                        </div>
                      </div>

                      <div className="screen-header-user">
                        <h4>{item.name}</h4>
                        <span className="bell-badge">🔔</span>
                      </div>
                      
                      <div className="screen-sub-row">
                        <span className="sub-title">{item.sub}</span>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-dots-row">
          {screens.map((_, dotIdx) => (
            <button
              key={dotIdx}
              aria-label={`Rotate to phone ${dotIdx + 1}`}
              className={`carousel-dot ${activeIndex === dotIdx ? 'dot-active' : ''}`}
              onClick={() => setActiveIndex(dotIdx)}
            />
          ))}
        </div>

        <div className="download-bottom-grid">
          <div className="download-text-col">
            <h3>Download App Now</h3>
            <p>
              Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you're a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn't start at graduation — it starts here.
            </p>

            <div className="store-badges-row">
              <a href="#google-play" className="store-badge-link" onClick={(e) => e.preventDefault()}>
                <img src={googlePlayBadge} alt="Get it on Google Play" className="store-badge-img" />
              </a>

              <a href="#app-store" className="store-badge-link" onClick={(e) => e.preventDefault()}>
                <img src={appStoreBadge} alt="Download on the App Store" className="store-badge-img" />
              </a>
            </div>
          </div>

          <div className="download-graphic-col">
            <img 
              src={iPhoneMockupImg} 
              alt="iPhone 12 Pro Mockup" 
              className="angled-phones-img" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}