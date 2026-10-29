import React, { useState } from 'react';
import './resume.css';


export default function ResumeUpload() {
  const [fileName, setFileName] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadSuccess(true);
    }
  };

  return (
    <section className="resume-section">
      <div className="resume-container">
        <div className="resume-header">
          <div className="resume-badge">
            <span>✦</span> TRY IT LIVE <span className="badge-sub">v2.1 AI Engine</span>
          </div>

          <h2 className="resume-title">
            Upload your resume. <br />
            <span className="resume-title-blue">Find jobs that fit.</span>
          </h2>

          <p className="resume-desc">
            Upload once. CampusPe reads your skills, experience, and preferences — <br />
            then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        <div className="upload-box-card">
          <div className="upload-inner-content">
            <h3>Upload your resume</h3>
            <p className="upload-specs">PDF, DOC, or DOCX — Up to 10MB • 10W's use it to understand your skills and experience.</p>

            {uploadSuccess ? (
              <div className="success-banner">
                <span>✅ Successfully uploaded: <strong>{fileName}</strong></span>
              </div>
            ) : (
              <label className="upload-btn-label">
                Upload resume ↑
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFileChange} 
                  style={{ display: 'none' }} 
                />
              </label>
            )}

            <p className="drag-drop-text">or drag and drop your file here</p>

            <div className="format-pills-row">
              <span className="fmt-pill">PDF</span>
              <span className="fmt-pill">DOC</span>
              <span className="fmt-pill">DOCX</span>
            </div>
          </div>
        </div>

        <div className="resume-status-bar">
          <div className="status-item">
            <span className="status-icon green-check">✓</span>
            <div>
              <strong>Resume analyzed</strong>
              <span>Ready in 4s</span>
            </div>
          </div>

          <div className="status-divider"></div>

          <div className="status-item">
            <span className="status-icon blue-check">✓</span>
            <div>
              <strong>Skills extracted</strong>
              <span>Ready instantly</span>
            </div>
          </div>

          <div className="status-divider"></div>

          <div className="status-item">
            <span className="status-icon blue-check">✓</span>
            <div>
              <strong>Top 10% matched</strong>
              <span>Product & Analytics</span>
            </div>
          </div>

          <div className="status-divider"></div>

          <div className="status-item">
            <span className="status-icon blue-check">✓</span>
            <div>
              <strong>1,000+ sources searched</strong>
              <span>Real-time aggregation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}