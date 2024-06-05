import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ReservarSala from './components/ReservarSala';
import Login from './components/Login';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className={`flex ${darkMode ? 'bg-[#161f3e] text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex-grow px-6">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/reservarSala" element={<ReservarSala darkMode={darkMode} />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
