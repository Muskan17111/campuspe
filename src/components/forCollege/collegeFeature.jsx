import React, { useState } from 'react';
import './college.css';


export default function CollegeFeatureCards() {
  const [activeCard, setActiveCard] = useState(1);

  const collegeCards = [
    {
      id: 1,
      num: '01',
      tag: 'VERIFIED PROFILE',
      title: 'Build your college profile',
      desc: 'Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.',
      badges: ['🟢 NAAC A++ Ready', '100% Verified']
    },
    {
      id: 2,
      num: '02',
      tag: 'DIRECT ENQUIRIES',
      title: 'Students find your courses',
      desc: 'Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.',
      badges: ['💬 Direct Enquiries', '⚡ Fast Responses < 2Hrs']
    },
    {
      id: 3,
      num: '03',
      tag: 'CAMPUS RECRUITING',
      title: 'Recruiters discover your College',
      desc: 'Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.',
      badges: ['🏢 450+ Hiring Partners', '🔗 Connect Directly']
    },
    {
      id: 4,
      num: '04',
      tag: 'LIVE HUB',
      title: 'Track placements in real time',
      desc: 'Track students, interviews, offers and placements live on our centralized dashboard.',
      badges: ['🔴 LIVE PLACEMENTS', 'Students: Interviews : Offers']
    }
  ];

  return (
    <div className="colleges-right">
      {collegeCards.map((card) => (
        <div
          key={card.id}
          className={`college-feature-card ${activeCard === card.id ? 'active-college-card' : ''}`}
          onClick={() => setActiveCard(card.id)}
        >
          <div className="college-card-header">
            <span className="college-card-tag">
              {card.num} • {card.tag}
            </span>
            <div className="college-badges-row">
              {card.badges.map((b, idx) => (
                <span key={idx} className="college-badge-pill">{b}</span>
              ))}
            </div>
          </div>

          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );
}