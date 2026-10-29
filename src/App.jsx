import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import OpportunitySection from './components/opportunity';
import ResumeUpload from './components/resumeSection/resume';
import ForCollege from './components/forCollege/forCollege';
import ForEmployer from './components/forEmployee/forEmployee';
import AppShowcase from './components/appshowcase/appshowcase';
import FooterSection from './components/footer/footer';
import './App.css';

export default function App() {
  return (
    <div className="campuspe-app">
      <Navbar />
      <main>
        <Hero />
        <OpportunitySection />
         <ResumeUpload />
            <ForCollege />
      <ForEmployer/>
      <AppShowcase/>
      </main>
      <FooterSection />
    </div>
  );
}
