import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SocialHubSection from './components/SocialHubSection';
import ContactForm from './components/ContactForm';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/socials" element={<SocialHubSection />} />
            <Route path="/contact" element={<ContactForm />} />
            {/* 404 Route */}
            <Route
              path="*"
              element={
                <SectionWrapper className="text-center py-20 bg-gray-50">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h2>
                  <p className="text-lg text-gray-700 mb-8">The page you're looking for does not exist.</p>
                  <a href="/" className="text-blue-600 hover:underline">Return Home</a>
                </SectionWrapper>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;