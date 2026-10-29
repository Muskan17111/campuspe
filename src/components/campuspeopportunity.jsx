import React, { useState } from 'react';
import './opportunitySection.css';

export default function CampusPeOpportunity({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Colleges', 'Jobs', 'Internships', 'Freelance', 'Part-time'];

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
    },
    {
      id: 4,
      category: 'Jobs',
      title: 'Frontend Developer',
      tag: 'Full-Time Job',
      tagClass: 'tag-blue',
      logo: '💻',
      logoBg: '#f0fdf4',
      meta: ['📍 Bangalore / Remote', '💼 Full-time', '₹ 8L - ₹ 12L'],
      desc: 'Build responsive React interfaces for high-growth startups...',
      btnText: 'Apply Now'
    },
    {
      id: 5,
      category: 'Part-time',
      title: 'Campus Ambassador',
      tag: 'Part-time',
      tagClass: 'tag-purple',
      logo: '🚀',
      logoBg: '#faf5ff',
      meta: ['🌐 Remote', '⏰ 6 hrs/wk', '₹ 8K/mo + Perks'],
      desc: 'Represent top tech brands on your college campus and lead events...',
      btnText: 'Apply Now'
    }
  ];

  const displayedItems =
    activeFilter === 'All'
      ? feedItems.slice(0, 3)
      : feedItems.filter((item) => item.category === activeFilter);

  return (
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
          {displayedItems.map((item) => (
            <div key={item.id} className="feed-item-card">
              <div className="feed-item-top">
                <div
                  className="feed-item-logo"
                  style={{ backgroundColor: item.logoBg }}
                >
                  {item.logo}
                </div>

                <div className="feed-item-info">
                  <div className="feed-title-row">
                    <h4>{item.title}</h4>
                    <span className={`feed-item-tag ${item.tagClass}`}>
                      {item.tag}
                    </span>
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
          ))}
        </div>

  
        <div className="feed-footer">
          <a
            href="#all-matches"
            onClick={(e) => {
              e.preventDefault();
              setActiveFilter('All');
              onOpenModal && onOpenModal('job');
            }}
          >
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
  );
}