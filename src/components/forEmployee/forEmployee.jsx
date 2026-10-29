import React, { useState } from 'react';
import EmployerDiscovery from './employeeDiscovery';
import EmployerFeature from './employeeFeature';
import './employee.css';

export default function ForEmployer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', org: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({ name: '', email: '', org: '', phone: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section  id="employers" className="employers-section">
      <div className="employers-container">
        <EmployerDiscovery onOpenModal={handleOpenModal} />
        <EmployerFeature />
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎉</div>
                <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Successfully Submitted!</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  We've received your job posting request and sent confirmation to <strong>{formData.email}</strong>.
                </p>
                <button className="role-btn" onClick={handleCloseModal}>Done</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <span className="modal-tag">CAMPUSPE EMPLOYER PORTAL</span>
                <h3>Post a Job / Hire Talent</h3>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter company name"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <button type="submit" className="role-btn" style={{ marginTop: '0.5rem' }}>
                  Submit Details
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}