import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import YouTubeSection from './components/YouTubeSection';
import InstagramSection from './components/InstagramSection';
import FacebookSection from './components/FacebookSection';
import TelegramSection from './components/TelegramSection';
import XSection from './components/XSection';
import LinkedInSection from './components/LinkedInSection';
import ContactForm from './components/ContactForm';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/youtube" element={<YouTubeSection />} />
            <Route path="/instagram" element={<InstagramSection />} />
            <Route path="/facebook" element={<FacebookSection />} />
            <Route path="/telegram" element={<TelegramSection />} />
            <Route path="/x" element={<XSection />} />
            <Route path="/linkedin" element={<LinkedInSection />} />
            <Route path="/contact" element={<ContactForm />} />
            {/* Optional: Add a 404 page */}
            <Route
              path="*"
              element={
                <SectionWrapper className="text-center py-20 bg-gray-50">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h2>
                  <p className="text-lg text-gray-700">The page you're looking for does not exist.</p>
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
