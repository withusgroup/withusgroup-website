import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Step durations (lebih lama)
    const steps = [
      { duration: 1200, action: () => setCurrentStep(1) },  // Logo muncul
      { duration: 1000, action: () => setCurrentStep(2) },  // Text muncul
      { duration: 2500, action: () => setCurrentStep(3) },  // Loading bar (lebih lama)
      { duration: 800, action: () => setCurrentStep(4) },   // Complete animation
      { duration: 600, action: () => setIsVisible(false) }, // Fade out
      { duration: 400, action: onFinish }                   // Finish callback
    ];

    // Loading progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // 25ms per 1% = 2.5 detik total

    let totalTime = 0;
    steps.forEach((step, index) => {
      totalTime += step.duration;
      setTimeout(() => {
        step.action();
      }, totalTime);
    });

    return () => {
      clearInterval(progressInterval);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen-wrapper ${currentStep >= 4 ? 'splash-fade-out' : ''}`}>
      {/* Background Elements */}
      <div className="splash-bg-container">
        <div className="splash-floating-shape splash-shape-1"></div>
        <div className="splash-floating-shape splash-shape-2"></div>
        <div className="splash-floating-shape splash-shape-3"></div>
        <div className="splash-floating-shape splash-shape-4"></div>
        <div className="splash-floating-shape splash-shape-5"></div>
        <div className="splash-gradient-orb splash-orb-1"></div>
        <div className="splash-gradient-orb splash-orb-2"></div>
        <div className="splash-gradient-orb splash-orb-3"></div>
      </div>

      {/* Main Content */}
      <div className="splash-main-content">
        {/* Logo Animation */}
        <div className={`splash-logo-container ${currentStep >= 1 ? 'splash-visible' : ''}`}>
          <div className="splash-logo-main">
            <div className="splash-logo-circle">
              <div className="splash-logo-inner">
                <span>W</span>
              </div>
              <div className="splash-logo-glow"></div>
            </div>
            <div className="splash-logo-rings">
              <div className="splash-ring splash-ring-1"></div>
              <div className="splash-ring splash-ring-2"></div>
              <div className="splash-ring splash-ring-3"></div>
              <div className="splash-ring splash-ring-4"></div>
            </div>
          </div>
        </div>

        {/* Text Animation */}
        <div className={`splash-text-container ${currentStep >= 2 ? 'splash-visible' : ''}`}>
          <h1 className="splash-company-name">
            <span className="splash-text-gradient">WITHUS</span>
            <span className="splash-text-group">GROUP</span>
          </h1>
          <p className="splash-company-tagline">Innovating the Future Together</p>
        </div>

        {/* Loading Animation */}
        <div className={`splash-loading-container ${currentStep >= 3 ? 'splash-visible' : ''}`}>
          <div className="splash-loading-bar">
            <div 
              className="splash-loading-progress" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="splash-loading-text">
            <span>Loading {loadingProgress}%</span>
            <span className="splash-loading-dots">
              <span className="splash-dot">.</span>
              <span className="splash-dot">.</span>
              <span className="splash-dot">.</span>
            </span>
          </div>
        </div>

        {/* Additional Loading Messages */}
        <div className={`splash-status-messages ${currentStep >= 3 ? 'splash-visible' : ''}`}>
          <div className="splash-status-item">
            <span className="splash-status-check">✓</span>
            <span>Initializing Systems</span>
          </div>
          <div className="splash-status-item">
            <span className="splash-status-check">✓</span>
            <span>Loading Assets</span>
          </div>
          <div className="splash-status-item">
            <span className={`splash-status-check ${loadingProgress > 70 ? 'splash-status-active' : ''}`}>
              {loadingProgress > 70 ? '✓' : '⋯'}
            </span>
            <span>Preparing Interface</span>
          </div>
        </div>

        {/* Particle Effects */}
        <div className="splash-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="splash-particle" 
              style={{
                animationDelay: `${i * 0.3}s`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Version Info */}
      <div className="splash-version-info">
        <span>v2.0.1</span>
        <div className="splash-tech-stack">
          <span>Withus Tech</span>
          <span>•</span>
          <span>Withus Academy</span>
          <span>•</span>
          <span>Withus App Powered</span>
        </div>
      </div>

      {/* Skip Button */}
      <button 
        className="splash-skip-button"
        onClick={() => {
          setIsVisible(false);
          setTimeout(onFinish, 400);
        }}
      >
        Skip Intro
      </button>
    </div>
  );
};

export default SplashScreen;