import { useState, useEffect } from 'react';

export const useSplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    console.log('useSplashScreen hook running'); // Debug

    // Development mode check yang lebih kompatibel
    const isDevelopment = 
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' ||
      process.env.NODE_ENV === 'development';

    if (isDevelopment) {
      const skipSplash = localStorage.getItem('dev_skip_splash');
      console.log('Development mode, skipSplash:', skipSplash); // Debug
      if (skipSplash === 'true') {
        setShowSplash(false);
        return;
      }
    }

    // Check if user has seen splash before
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    console.log('hasSeenSplash:', hasSeenSplash); // Debug

    if (hasSeenSplash) {
      setShowSplash(false);
    } else {
      localStorage.setItem('hasSeenSplash', 'true');
    }
  }, []);

  const handleSplashFinish = () => {
    console.log('Splash finished'); // Debug
    setShowSplash(false);
    
    // Set flag untuk skip di development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      localStorage.setItem('dev_skip_splash', 'true');
    }
  };

  return { showSplash, handleSplashFinish };
};