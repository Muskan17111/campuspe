import React, { useState } from 'react';
import './Opportunity.css';

export default function OpportunitySection({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeStep, setActiveStep] = useState(1);

  const filters = ['All', 'Colleges', 'Jobs', 'Internships', 'Freelance', 'Part-time'];

  const steps = [
    {
      id: 1,
      num: '01',
      title: 'Set your preferences',
      desc: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
      badge: 'Smart Profile',
      badgeClass: 'badge-purple'
    },
    {
      id: 2,
      num: '02',
      title: 'Discover relevant opportunities',
      desc: 'Explore colleges and career opportunities matched to your profile, interests and goals.',
      badge: 'AI-Matched',
      badgeClass: 'badge-blue'
    },
    {
      id: 3,
      num: '03',
      title: 'Get notified when something fits',
      desc: 'Get notified when a relevant college or new opportunity is found, so you can act early.',
      badge: 'Instant Alerts',
      badgeClass: 'badge-green'
    }
  ];

  const feedItems = [
    {
      id: 1,
      category: 'Colleges',
      title: 'IIM Bangalore',
      tag: 'Top College',
      tagClass: 'tag-purple',
      logo: '🏛️',
      logoBg: '#fef2f2',
      meta: ['🎓 MBA', '📍 Bangalore', '₹ 24L+'],
      desc: "India's premier management institute with global exposure...",
      btnText: 'View Details'
    },
    {
      id: 2,
      category: 'Internships',
      title: 'Product Intern',
      tag: 'Internship',
      tagClass: 'tag-blue',
      logo: 'G',
      logoBg: '#eff6ff',
      meta: ['📍 Bangalore', '🏢 Hybrid', '₹ 35K/mo'],
      desc: 'Work on real products, learn from top engineers and build...',
      btnText: 'Apply Now'
    },
    {
      id: 3,
      category: 'Freelance',
      title: 'Marketing Gig',
      tag: 'Freelance',
      tagClass: 'tag-green',
      logo: '⚡',
      logoBg: '#f8fafc',
      meta: ['🌐 Remote', '💼 Freelance', '₹ 15K - ₹ 25K'],
      desc: 'Create content and help with social media campaigns for...',
      btnText: 'View Details'
    }
  ];

  const displayedItems =
    activeFilter === 'All'
      ? feedItems
      : feedItems.filter((item) => item.category === activeFilter);

  return (
    <section  id="jobs" className="opp-section">
      <div className="opp-container">
        <div className="opp-left">
          <div className="opp-pill-tag">
            <span className="opp-dot">●</span> 01 • OPPORTUNITY DISCOVERY
          </div>

          <h2 className="opp-heading">
            Stop searching. <br />
            <span className="opp-heading-blue">Start getting matched.</span>
          </h2>

          <p className="opp-description">
            Tell CampusPe your skills, preferences and goals. We continuously monitor
            company career pages and job sources, find opportunities that match you,
            and notify you when they appear.
          </p>

          <div className="opp-steps-list">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`opp-step-card ${activeStep === step.id ? 'active-step' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="step-num-box">{step.num}</div>
                <div className="step-body">
                  <div className="step-top-row">
                    <h4>{step.title}</h4>
                    <span className={`step-badge ${step.badgeClass}`}>{step.badge}</span>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="opp-explore-btn"
            onClick={() => onOpenModal && onOpenModal('job')}
          >
            Explore opportunities →
          </button>
        </div>

        <div className="opp-right-wrapper">
          <div className="opp-feed-card">
            
            <div className="feed-header">
              <div className="feed-header-left">
                <div className="feed-sparkle-icon">✦</div>
                <div>
                  <h3>CampusPe Opportunity Feed</h3>
                  <p>Colleges & opportunities matched to you</p>
                </div>
              </div>
              <span className="feed-matched-badge">● 12 new matches today</span>
            </div>

            <div className="feed-tabs">
              {filters.map((tab) => (
                <button
                  key={tab}
                  className={`feed-tab-btn ${activeFilter === tab ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="feed-items-list">
              {displayedItems.length > 0 ? (
                displayedItems.map((item) => (
                  <div key={item.id} className="feed-item-card">
                    <div className="feed-item-top">
                      <div className="feed-item-logo" style={{ backgroundColor: item.logoBg }}>
                        {item.logo}
                      </div>
                      <div className="feed-item-info">
                        <div className="feed-title-row">
                          <h4>{item.title}</h4>
                          <span className={`feed-item-tag ${item.tagClass}`}>{item.tag}</span>
                        </div>
                        <div className="feed-meta-row">
                          {item.meta.map((m, idx) => (
                            <span key={idx}>{m}</span>
                          ))}
                        </div>
                      </div>
                      <button
                        className="feed-action-btn"
                        onClick={() => onOpenModal && onOpenModal('job')}
                      >
                        {item.btnText}
                      </button>
                    </div>
                    <p className="feed-item-desc">{item.desc}</p>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center', padding: '1.5rem', color: '#64748b' }}>
                  No items found for {activeFilter}.
                </p>
              )}
            </div>

            <div className="feed-footer">
              <a href="#all" onClick={(e) => { e.preventDefault(); setActiveFilter('All'); }}>
                View all matched opportunities →
              </a>
              <span>Curated for you • Updated daily</span>
            </div>

          </div>

          <div className="opp-handwritten-note">
            <svg width="36" height="32" viewBox="0 0 36 32" fill="none" className="note-arrow">
              <path
                d="M28 28C16 26 8 18 6 4M6 4L2 10M6 4L12 9"
                stroke="#6366f1"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              A mix of colleges, jobs, <br />
              internships and gigs — all in one place.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}