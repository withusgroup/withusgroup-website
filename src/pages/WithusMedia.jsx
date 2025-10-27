import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WithusMedia = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: 'fas fa-newspaper',
      title: 'Berita Terkini',
      description: 'Update berita harian dari dalam dan luar negeri dengan fakta terverifikasi.'
    },
    {
      icon: 'fas fa-globe-asia',
      title: 'Fakta Dunia',
      description: 'Fakta menarik dan mengejutkan dari berbagai belahan dunia.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Tips & Edukasi',
      description: 'Konten edukatif dan tips praktis untuk kehidupan sehari-hari.'
    },
    {
      icon: 'fas fa-vial',
      title: 'Science & Tech',
      description: 'Perkembangan terbaru dalam dunia sains dan teknologi.'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Kesehatan',
      description: 'Informasi kesehatan, tips hidup sehat, dan perkembangan medis.'
    },
    {
      icon: 'fas fa-coins',
      title: 'Ekonomi & Bisnis',
      description: 'Analisis ekonomi, perkembangan bisnis, dan tips keuangan.'
    }
  ];

  const featuredContent = [
    {
      badge: 'Trending',
      date: '2 Hari Lalu',
      views: '250K Views',
      title: '5 Fakta Menarik tentang Artificial Intelligence yang Perlu Kamu Tahu',
      description: 'AI telah mengubah banyak aspek kehidupan. Temukan fakta menarik seputar perkembangan AI di dunia.',
      tags: ['Teknologi', 'AI', 'Masa Depan']
    },
    {
      badge: 'New',
      date: '5 Jam Lalu',
      views: '50K Views',
      title: 'Update Terkini: Perkembangan Teknologi Hijau di Indonesia',
      description: 'Bagaimana Indonesia memanfaatkan teknologi hijau untuk masa depan yang lebih berkelanjutan?',
      tags: ['Lingkungan', 'Teknologi', 'Indonesia']
    },
    {
      badge: 'Popular',
      date: '1 Minggu Lalu',
      views: '500K Views',
      title: '7 Kebiasaan Sehari-hari yang Bisa Mengubah Hidup Anda',
      description: 'Kebiasaan kecil yang dilakukan konsisten dapat membawa perubahan besar dalam hidup Anda.',
      tags: ['Tips', 'Produktivitas', 'Hidup Sehat']
    },
    {
      badge: 'Viral',
      date: '3 Hari Lalu',
      views: '1.2M Views',
      title: 'Misteri Segitiga Bermuda Akhirnya Terpecahkan?',
      description: 'Penelitian terbaru mengungkap kemungkinan penjelasan ilmiah dibalik misteri Segitiga Bermuda.',
      tags: ['Misteri', 'Sains', 'Sejarah']
    },
    {
      badge: 'Hot',
      date: '1 Hari Lalu',
      views: '300K Views',
      title: '10 Inovasi Teknologi 2023 yang Akan Mengubah Dunia',
      description: 'Dari AI hingga bioteknologi, temukan inovasi yang akan membentuk masa depan kita.',
      tags: ['Inovasi', '2023', 'Teknologi']
    },
    {
      badge: 'Trending',
      date: '4 Hari Lalu',
      views: '400K Views',
      title: 'Bagaimana Cara Kerja Cryptocurrency dan Blockchain?',
      description: 'Penjelasan sederhana tentang teknologi blockchain dan mata uang kripto untuk pemula.',
      tags: ['Crypto', 'Blockchain', 'Teknologi']
    }
  ];

  const platforms = [
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      color: '#FF0000',
      description: 'Channel YouTube Withus Indonesia dengan video informatif, fakta menarik, dan berita terkini.',
      stats: [
        { value: '250K', label: 'Subscribers' },
        { value: '10M+', label: 'Views' }
      ],
      link: 'https://youtube.com/@withusIndonesia'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      color: '#E1306C',
      description: 'Instagram Withus Indonesia dengan konten visual menarik, infografis, dan story updates.',
      stats: [
        { value: '150K', label: 'Followers' },
        { value: '5M+', label: 'Reach' }
      ],
      link: 'https://instagram.com/withus_indonesia'
    },
    {
      name: 'TikTok',
      icon: 'fab fa-tiktok',
      color: '#000000',
      description: 'TikTok Withus Media dengan konten video pendek, fakta cepat, dan tren terkini.',
      stats: [
        { value: '100K', label: 'Followers' },
        { value: '3M+', label: 'Likes' }
      ],
      link: 'https://tiktok.com/@withusmedia'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      color: '#1877F2',
      description: 'Facebook Withus Media dengan artikel lengkap, diskusi komunitas, dan update berita.',
      stats: [
        { value: '80K', label: 'Followers' },
        { value: '2M+', label: 'Engagement' }
      ],
      link: 'https://facebook.com/withusmedia'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      color: '#1DA1F2',
      description: 'Twitter Withus Media dengan update real-time, thread informatif, dan interaksi langsung.',
      stats: [
        { value: '60K', label: 'Followers' },
        { value: '1M+', label: 'Impressions' }
      ],
      link: 'https://twitter.com/withusmedia'
    }
  ];

  return (
    <div className="withus-media-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero media-hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge media-badge">
              <i className="fas fa-bolt"></i>
              <span>Konten Terbaru Setiap Hari</span>
            </div>
            <h1>Platform Konten Digital & Berita Terkini</h1>
            <p>Withus Media menyajikan berita terkini, fakta menarik, dan konten informatif dari seluruh dunia melalui berbagai platform digital.</p>
            <div className="hero-actions">
              <a href="#content" className="btn btn-primary">Jelajahi Konten</a>
              <a href="#platforms" className="btn btn-outline">Ikuti Media Sosial</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">500K+</div>
                <div className="stat-label">Pengikut</div>
              </div>
              <div className="stat">
                <div className="stat-value">1M+</div>
                <div className="stat-label">Tayangan/Bulan</div>
              </div>
              <div className="stat">
                <div className="stat-value">5+</div>
                <div className="stat-label">Platform</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Visual Elements */}
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-icon" style={{background: '#ff0000'}}>
              <i className="fab fa-youtube"></i>
            </div>
            <div className="card-content">
              <h4>YouTube</h4>
              <p>@withusIndonesia</p>
            </div>
          </div>
          <div className="floating-card">
            <div className="card-icon" style={{background: '#E1306C'}}>
              <i className="fab fa-instagram"></i>
            </div>
            <div className="card-content">
              <h4>Instagram</h4>
              <p>@withus_indonesia</p>
            </div>
          </div>
          <div className="floating-card">
            <div className="card-icon" style={{background: '#1DA1F2'}}>
              <i className="fab fa-tiktok"></i>
            </div>
            <div className="card-content">
              <h4>TikTok</h4>
              <p>@withusmedia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section media-categories" id="categories">
        <div className="container">
          <div className="section-title">
            <div className="subtitle">Kategori Konten</div>
            <h2>Jelajahi Berbagai Jenis Konten</h2>
            <p>Withus Media menyajikan berbagai jenis konten informatif dan menghibur untuk memenuhi kebutuhan informasi Anda.</p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="section media-featured-content" id="content">
        <div className="container">
          <div className="section-title">
            <div className="subtitle">Konten Pilihan</div>
            <h2>Konten Terbaru & Terpopuler</h2>
            <p>Jelajahi konten-konten terbaru dan paling populer dari Withus Media di berbagai platform.</p>
          </div>
          <div className="content-grid">
            {featuredContent.map((content, index) => (
              <div key={index} className="content-card">
                <div className="content-image">
                  <div className="content-badge">{content.badge}</div>
                </div>
                <div className="content-info">
                  <div className="content-meta">
                    <span><i className="far fa-calendar"></i> {content.date}</span>
                    <span><i className="far fa-eye"></i> {content.views}</span>
                  </div>
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                  <div className="content-tags">
                    {content.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section className="section media-social-platforms" id="platforms">
        <div className="container">
          <div className="section-title">
            <div className="subtitle">Platform Kami</div>
            <h2>Ikuti Withus Media di Semua Platform</h2>
            <p>Dapatkan konten terbaru dan terbaik dari Withus Media melalui berbagai platform media sosial.</p>
          </div>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="platform-card">
                <div className="platform-icon" style={{background: platform.color}}>
                  <i className={platform.icon}></i>
                </div>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <div className="platform-stats">
                  {platform.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="platform-stat">
                      <div className="platform-stat-value">{stat.value}</div>
                      <div className="platform-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <a href={platform.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {platform.name === 'YouTube' ? 'Kunjungi Channel' : 
                   platform.name === 'Instagram' ? 'Follow Instagram' :
                   platform.name === 'TikTok' ? 'Follow TikTok' :
                   platform.name === 'Facebook' ? 'Like Facebook' : 'Follow Twitter'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta media-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Jangan Lewatkan Konten Menarik Lainnya!</h2>
            <p>Bergabunglah dengan komunitas Withus Media dan dapatkan update konten terbaru langsung di platform favorit Anda.</p>
            <a href="#platforms" className="btn">Ikuti Semua Platform</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WithusMedia;