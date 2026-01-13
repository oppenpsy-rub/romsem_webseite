import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Studium from './pages/Studium';
import Seminar from './pages/Seminar';
import Forschung from './pages/Forschung';
import Kontakt from './pages/Kontakt';
import News from './pages/News';
import Staff from './pages/Staff';
import International from './pages/International';
import StudyBA from './pages/StudyBA';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studium" element={<Studium />} />
          <Route path="/studium/ba" element={<StudyBA />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/personal" element={<Staff />} />
          <Route path="/forschung" element={<Forschung />} />
          <Route path="/internationales" element={<International />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<div className="container mx-auto py-20 px-4 text-center"><h1 className="text-3xl font-bold text-rub-blue">404</h1><p className="mt-4 text-gray-600">Seite nicht gefunden.</p></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
