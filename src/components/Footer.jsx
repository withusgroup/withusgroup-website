import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleAnchorClick = (sectionId) => {
    if (window.location.pathname !== '/') {
      // Jika tidak di homepage, navigate ke homepage dulu
      window.location.href = `/#${sectionId}`;
    } else {
      // Jika sudah di homepage, scroll ke section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column footer-about">
            <h3>Withus Group</h3>
            <p>Ekosistem perusahaan yang berfokus pada pengembangan teknologi, media, kreativitas, dan pendidikan untuk menciptakan solusi berdampak bagi masyarakat dan bisnis.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Perusahaan Kami</h3>
            <ul className="footer-links">
              <li><a href="#"><i className="fas fa-chevron-right"></i> Withus Media</a></li>
              <li>
                <Link to="/tools-automatic">
                  <i className="fas fa-chevron-right"></i> WithUs Tools Automatic
                </Link>
              </li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Withus Tech</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Withus Creative</a></li>

              <li>
                <Link to="/withus-media">
                  <i className="fas fa-chevron-right"></i> Withus Media
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Tautan Cepat</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  <i className="fas fa-chevron-right"></i> Beranda
                </Link>
              </li>
              <li>
                <Link to="/tools-automatic">
                  <i className="fas fa-chevron-right"></i> Tools Automatic
                </Link>
              </li>
              <li>
                <a 
                  href="#tools"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('tools');
                  }}
                >
                  <i className="fas fa-chevron-right"></i> Tools Online
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAnchorClick('about');
                  }}
                >
                  <i className="fas fa-chevron-right"></i> Tentang
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
                  <i className="fas fa-chevron-right"></i> Kontak
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Kontak</h3>
            <ul className="footer-links">
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> Jl. Pandawa No. 395, Jakarta Pusat</a></li>
              <li><a href="tel:+622112345678"><i className="fas fa-phone"></i> +62 21 1234 5678</a></li>
              <li><a href="mailto:info@withusgroup.com"><i className="fas fa-envelope"></i> info@withusgroup.com</a></li>
              <li><a href="#"><i className="fas fa-clock"></i> Senin - Jumat: 9:00 - 17:00</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Withus Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
