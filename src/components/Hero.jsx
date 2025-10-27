import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-rocket"></i>
            <span>Transformasi Digital Masa Depan</span>
          </div>
          <h1>Membangun Ekosistem Inovasi yang Mengubah Dunia</h1>
          <p>Withus Group menghubungkan teknologi, kreativitas, dan kewirausahaan untuk menciptakan solusi berdampak yang membentuk masa depan digital.</p>
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">Jelajahi Perusahaan</a>
            <a href="#contact" className="btn btn-outline">Mulai Kolaborasi</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">9</div>
              <div className="stat-label">Perusahaan</div>
            </div>
            <div className="stat">
              <div className="stat-value">150+</div>
              <div className="stat-label">Profesional</div>
            </div>
            <div className="stat">
              <div className="stat-value">12</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Visual Elements */}
      <div className="hero-visual">
        <div className="floating-card">
          <div className="card-icon" style={{background: '#3498db'}}>
            <i className="fas fa-newspaper"></i>
          </div>
          <div className="card-content">
            <h4>Withus Media</h4>
            <p>Platform Berita Digital</p>
          </div>
        </div>
        <div className="floating-card">
          <div className="card-icon" style={{background: '#9b59b6'}}>
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="card-content">
            <h4>Withus Apps</h4>
            <p>Pengembangan Aplikasi</p>
          </div>
        </div>
        <div className="floating-card">
          <div className="card-icon" style={{background: '#e74c3c'}}>
            <i className="fas fa-robot"></i>
          </div>
          <div className="card-content">
            <h4>Withus Tech</h4>
            <p>Riset Teknologi AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;