import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ToolsAutomatic from './pages/ToolsAutomatic';
import ToolDetail from './pages/ToolDetail';
import WithusMedia from './pages/WithusMedia';
import ParticleBackground from './components/ParticleBackground';
import SplashScreen from './components/SplashScreen';
import { useSplashScreen } from './hooks/useSplashScreen';

function App() {
  const { showSplash, handleSplashFinish } = useSplashScreen();

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <div className="App">
      <ParticleBackground />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tools-automatic" element={<ToolsAutomatic />} />
        <Route path="/tools/:toolId" element={<ToolDetail />} />
        <Route path="/withus-media" element={<WithusMedia />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;