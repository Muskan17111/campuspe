import React, { useState } from 'react';
import './employee.css';

export default function EmployerFeature() {
  const [activeCard, setActiveCard] = useState(1);

  const employerCards = [
    {
      id: 1,
      num: '01',
      tag: 'INSTANT SETUP',
      title: 'Post a role in minutes',
      desc: 'Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.',
      badges: ['⚡ 5 Min Deployment', '100+ Campus Network']
    },
    {
      id: 2,
      num: '02',
      tag: 'INSTANT SETUP',
      title: 'Receive a matched shortlist',
      desc: 'Get candidates matched to your role by skills, experience, location and hiring requirements.',
      badges: ['🎯 Zero CV Clutter', 'Top 5% Fit Pool']
    },
    {
      id: 3,
      num: '03',
      tag: 'INSTANT SETUP',
      title: 'Connect with candidates directly',
      desc: 'Message, schedule interviews, and move candidates through your pipeline — all in one place.',
      badges: ['💬 In-App Scheduling', '1-Click Video Calls']
    },
    {
      id: 4,
      num: '04',
      tag: 'INSTANT SETUP',
      title: 'Reduce your time-to-hire',
      desc: 'Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.',
      badges: ['⏱️ < 3 DAYS', '97% Placement Rate']
    }
  ];

  return (
    <div className="employers-right">
      {employerCards.map((card) => (
        <div
          key={card.id}
          className={`employer-feature-card ${activeCard === card.id ? 'active-employer-card' : ''}`}
          onClick={() => setActiveCard(card.id)}
        >
          <div className="employer-card-header">
            <span className="employer-card-tag">
              {card.num} • {card.tag}
            </span>
            <div className="employer-badges-row">
              {card.badges.map((b, idx) => (
                <span key={idx} className="employer-badge-pill">{b}</span>
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