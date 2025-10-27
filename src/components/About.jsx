import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <div className="subtitle">Tentang Kami</div>
          <h2>Ekosistem Inovasi yang Terintegrasi</h2>
          <p>Withus Group adalah perusahaan induk yang menghubungkan berbagai bidang industri melalui teknologi dan kolaborasi untuk menciptakan nilai tambah yang berkelanjutan.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Visi & Misi Perusahaan</h3>
            <p>Withus Group berkomitmen untuk menjadi pelopor dalam transformasi digital dengan mengintegrasikan teknologi mutakhir ke dalam berbagai aspek kehidupan dan bisnis.</p>
            <p>Kami percaya bahwa kolaborasi antara teknologi, kreativitas, dan kewirausahaan adalah kunci untuk menciptakan solusi yang relevan dan berdampak luas bagi masyarakat.</p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="feature-content">
                  <h4>Fokus pada Inovasi</h4>
                  <p>Terus mengembangkan solusi teknologi terkini untuk berbagai industri.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="feature-content">
                  <h4>Kolaborasi Strategis</h4>
                  <p>Membangun kemitraan yang saling menguntungkan dengan berbagai pihak.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="feature-content">
                  <h4>Pertumbuhan Berkelanjutan</h4>
                  <p>Menjaga pertumbuhan jangka panjang dengan strategi yang tepat.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-content">
                  <h4>Tim Berpengalaman</h4>
                  <p>Didukung oleh profesional dengan pengalaman di berbagai bidang.</p>
                </div>
              </div>
            </div>
            
            <a href="#companies" className="btn btn-primary">Jelajahi Perusahaan Kami</a>
          </div>
          <div className="about-visual">
            <div className="visual-main"></div>
            <div className="visual-card">
              <h4>Transformasi Digital</h4>
              <p>Membantu bisnis beradaptasi dengan era digital melalui solusi teknologi.</p>
            </div>
            <div className="visual-card">
              <h4>Inovasi Berkelanjutan</h4>
              <p>Terus berinovasi untuk menciptakan produk dan layanan yang relevan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;