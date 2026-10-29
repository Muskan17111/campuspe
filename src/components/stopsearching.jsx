import React, { useState } from 'react';
import './OpportunitySection.css';

export default function StopSearching({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(1);

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

  return (
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
            className={`opp-step-card ${activeStep === step.id ? 'active-step' : ''}`} onClick={() => setActiveStep(step.id)} > <div className="step-num-box">{step.num}</div> <div className="step-body"> <div className="step-top-row"> <h4>{step.title}</h4> <span className={`step-badge ${step.badgeClass}`}>{step.badge}</span>
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
  );
}