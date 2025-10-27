import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleAnchorClick = (sectionId) => {
    if (location.pathname !== '/') {
      // Jika tidak di homepage, navigate ke homepage dulu
      window.location.href = `/#${sectionId}`;
    } else {
      // Jika sudah di homepage, scroll ke section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">W</div>
            <div className="logo-text">WITHUS GROUP</div>
          </Link>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Beranda
              </Link>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick('about');
                }}
              >
                Tentang
              </a>
            </li>
            <li>
              <a 
                href="#companies" 
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick('companies');
                }}
              >
                Perusahaan
              </a>
            </li>
            <li>
              <a 
                href="#tools" 
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick('tools');
                }}
              >
                Tools Online
              </a>
            </li>
            <li>
              <Link 
                to="/tools-automatic" 
                className={isActive('/tools-automatic') ? 'active' : ''}
                onClick={closeMenu}
              >
                Tools Automatic
              </Link>
            </li>
            <li>
              <a 
                href="#values" 
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick('values');
                }}
              >
                Nilai
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick('contact');
                }}
              >
                Kontak
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <a 
              href="#contact" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                handleAnchorClick('contact');
              }}
            >
              Hubungi Kami
            </a>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;