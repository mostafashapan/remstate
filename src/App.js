import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipSectionCard from './components/SkipSection/SkipSectionCard';
import './styles/App.css';

const App = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <div className="min-h-screen bg-gray-300 accent text-white">
      <Router>
        <Navbar />
        <main className="flex-grow overflow-y-auto pb-20">
          <Routes>
            <Route path="/" element={<SkipSectionCard selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />} />
          </Routes>
        </main>
        <Footer selectedSkip={selectedSkip} />
      </Router>
    </div>
  );
};

export default App;
