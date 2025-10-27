import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ToolsAutomatic = () => {
  const navigate = useNavigate();

  const toolsData = [
    {
      id: 'ai-caption',
      name: 'AI Caption & Ide Generator',
      icon: 'fas fa-robot',
      rating: '⭐⭐⭐⭐',
      difficulty: 'Tinggi',
      category: '✍️ Kreatif',
      description: 'Generate caption kreatif dan ide konten dengan AI untuk media sosial',
      features: ['Caption Instagram', 'Ide Konten', 'Hashtag Generator', 'Multiple Languages'],
      color: '#8B5CF6',
    },
    {
      id: 'qr-custom',
      name: 'QR Code Custom',
      icon: 'fas fa-qrcode',
      rating: '⭐⭐⭐',
      difficulty: 'Sedang',
      category: '📷 Visual',
      description: 'Buat QR code custom dengan desain dan warna sesuai brand Anda',
      features: ['Custom Design', 'Color Picker', 'Logo Embed', 'Analytics'],
      color: '#10B981',
    },
    {
      id: 'text-to-speech',
      name: 'Text-to-Speech',
      icon: 'fas fa-volume-up',
      rating: '⭐⭐⭐⭐',
      difficulty: 'Sedang',
      category: '🔊 Unik',
      description: 'Konversi teks menjadi suara natural dengan berbagai pilihan voice',
      features: ['Multiple Voices', 'Export Audio', 'Speed Control', 'Multiple Languages'],
      color: '#3B82F6',
    },
    {
      id: 'speech-to-text',
      name: 'Speech-to-Text',
      icon: 'fas fa-microphone',
      rating: '⭐⭐⭐',
      difficulty: 'Sedang',
      category: '🗣️ Praktis',
      description: 'Transkripsi suara menjadi teks secara real-time dengan akurasi tinggi',
      features: ['Real-time', 'Multiple Languages', 'Export Text', 'Punctuation'],
      color: '#EF4444',
    },
    {
      id: 'auto-cv',
      name: 'Auto CV & Surat',
      icon: 'fas fa-file-alt',
      rating: '⭐⭐⭐⭐',
      difficulty: 'Tinggi',
      category: '💼 Mahasiswa',
      description: 'Buat CV dan surat lamaran profesional secara otomatis dengan template',
      features: ['CV Templates', 'Cover Letters', 'ATS Friendly', 'Export PDF'],
      color: '#F59E0B',
    },
    {
      id: 'converter-calc',
      name: 'Converter & Calculator',
      icon: 'fas fa-calculator',
      rating: '⭐⭐',
      difficulty: 'Rendah',
      category: '🧮 Umum',
      description: 'Kumpulan tools konversi dan kalkulator untuk kebutuhan sehari-hari',
      features: ['Unit Converter', 'Currency', 'Date Calculator', 'Math Tools'],
      color: '#6B7280',
    },
    {
      id: 'image-editor',
      name: 'AI Image Editor',
      icon: 'fas fa-magic',
      rating: '⭐⭐⭐⭐',
      difficulty: 'Tinggi',
      category: '🎨 Desain',
      description: 'Edit dan enhance gambar dengan AI-powered tools',
      features: ['Background Remove', 'Upscale', 'Filter AI', 'Batch Process'],
      color: '#EC4899',
    },
    {
      id: 'plagiarism-checker',
      name: 'Plagiarism Checker',
      icon: 'fas fa-search',
      rating: '⭐⭐⭐',
      difficulty: 'Sedang',
      category: '📚 Edukasi',
      description: 'Deteksi similarity dan plagiarism dalam dokumen teks',
      features: ['Deep Search', 'Multiple Sources', 'Report Export', 'Bulk Check'],
      color: '#8B5CF6',
    },
    {
      id: 'social-scheduler',
      name: 'Social Media Scheduler',
      icon: 'fas fa-calendar-alt',
      rating: '⭐⭐⭐⭐',
      difficulty: 'Tinggi',
      category: '📱 Sosial',
      description: 'Jadwalkan postingan media sosial secara otomatis',
      features: ['Multi-Platform', 'Analytics', 'Best Time Post', 'Bulk Upload'],
      color: '#10B981',
    },
    {
      id: 'seo-analyzer',
      name: 'SEO Analyzer',
      icon: 'fas fa-chart-line',
      rating: '⭐⭐⭐',
      difficulty: 'Tinggi',
      category: '🔍 Marketing',
      description: 'Analisis SEO website dan dapatkan rekomendasi improvement',
      features: ['Keyword Analysis', 'Backlink Check', 'Site Audit', 'Competitor Analysis'],
      color: '#3B82F6',
    },
    {
      id: 'password-manager',
      name: 'Password Generator & Manager',
      icon: 'fas fa-lock',
      rating: '⭐⭐',
      difficulty: 'Rendah',
      category: '🔐 Keamanan',
      description: 'Generate dan manage password yang kuat dan aman',
      features: ['Strong Generator', 'Encrypted Storage', 'Auto-fill', 'Security Audit'],
      color: '#EF4444',
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization',
      icon: 'fas fa-chart-bar',
      rating: '⭐⭐⭐',
      difficulty: 'Tinggi',
      category: '📊 Analytics',
      description: 'Buat visualisasi data dan chart yang menarik dari data mentah',
      features: ['Multiple Chart Types', 'CSV Import', 'Real-time', 'Export HD'],
      color: '#F59E0B',
    }
  ];

  const featuredTools = toolsData.filter(tool => 
    ['ai-caption', 'text-to-speech', 'auto-cv', 'social-scheduler'].includes(tool.id)
  );

  const handleToolClick = (toolId) => {
    navigate(`/tools/${toolId}`);
  };

  return (
    <>
      <Header />
      <div className="tools-automatic-page">
        {/* Hero Section */}
        <section className="tools-hero">
          <div className="container">
            <div className="tools-hero-content">
              <div className="hero-badge">
                <i className="fas fa-bolt"></i>
                <span>AI-Powered Tools</span>
              </div>
              <h1>WithUs Tools Automatic</h1>
              <p className="hero-subtitle">
                Kumpulan tools AI otomatis untuk meningkatkan produktivitas dan kreativitas Anda. 
                Dari generator konten hingga analisis data - semua dalam satu platform.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-value">12+</div>
                  <div className="stat-label">Tools AI</div>
                </div>
                <div className="stat">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Free</div>
                </div>
                <div className="stat">
                  <div className="stat-value">∞</div>
                  <div className="stat-label">Unlimited Use</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="featured-tools-section">
          <div className="container">
            <div className="section-title">
              <h2>✨ Tools Unggulan</h2>
              <p>Tools paling populer yang akan mengubah cara Anda bekerja</p>
            </div>
            <div className="featured-tools-grid">
              {featuredTools.map(tool => (
                <div 
                  key={tool.id} 
                  className="featured-tool-card"
                  onClick={() => handleToolClick(tool.id)}
                  style={{ '--accent-color': tool.color }}
                >
                  <div className="featured-tool-header">
                    <div className="tool-icon" style={{ background: tool.color }}>
                      <i className={tool.icon}></i>
                    </div>
                    <div className="tool-meta">
                      <span className="tool-rating">{tool.rating}</span>
                      <span className="tool-category">{tool.category}</span>
                    </div>
                  </div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <div className="tool-features">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                  <button className="tool-cta-btn">
                    Gunakan Tool <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Tools Grid */}
        <section className="all-tools-section">
          <div className="container">
            <div className="section-title">
              <h2>🛠️ Semua Tools Tersedia</h2>
              <p>Jelajahi koleksi lengkap tools AI kami</p>
            </div>
            
            <div className="tools-filter">
              <button className="filter-btn active">Semua</button>
              <button className="filter-btn">AI Generator</button>
              <button className="filter-btn">Produktivitas</button>
              <button className="filter-btn">Desain</button>
              <button className="filter-btn">Analisis</button>
            </div>

            <div className="all-tools-grid">
              {toolsData.map(tool => (
                <div 
                  key={tool.id} 
                  className="tool-card"
                  onClick={() => handleToolClick(tool.id)}
                  style={{ '--accent-color': tool.color }}
                >
                  <div className="tool-card-header">
                    <div className="tool-icon" style={{ background: tool.color }}>
                      <i className={tool.icon}></i>
                    </div>
                    <div className="tool-badges">
                      <span className="rating-badge">{tool.rating}</span>
                      <span className="difficulty-badge">{tool.difficulty}</span>
                    </div>
                  </div>
                  
                  <div className="tool-card-content">
                    <h3>{tool.name}</h3>
                    <span className="tool-category">{tool.category}</span>
                    <p>{tool.description}</p>
                    
                    <div className="tool-features">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <i className="fas fa-check"></i>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tool-card-footer">
                    <button className="use-tool-btn">
                      <i className="fas fa-play"></i>
                      Gunakan Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="tools-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Siap Meningkatkan Produktivitas Anda?</h2>
              <p>Dengan WithUs Tools Automatic, dapatkan akses ke semua tools AI premium secara gratis</p>
              <div className="cta-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => handleToolClick('ai-caption')}
                >
                  <i className="fas fa-rocket"></i>
                  Mulai Sekarang
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => navigate('/')}
                >
                  <i className="fas fa-home"></i>
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ToolsAutomatic;