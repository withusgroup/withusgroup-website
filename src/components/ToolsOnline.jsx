import React, { useState } from 'react';

const ToolsOnline = () => {
  const [activeTool, setActiveTool] = useState('shortlink');
  const [shortUrl, setShortUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [captionStyle, setCaptionStyle] = useState('professional');
  const [textInput, setTextInput] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [conversionType, setConversionType] = useState('uppercase');
  const [qrData, setQrData] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [businessIdea, setBusinessIdea] = useState('');
  const [industry, setIndustry] = useState('technology');

  const tools = [
    {
      id: 'shortlink',
      name: '🔗 Shortlink Generator',
      icon: 'fas fa-link',
      description: 'Buat tautan pendek yang mudah dibagikan'
    },
    {
      id: 'caption',
      name: '🧾 Caption Maker',
      icon: 'fas fa-font',
      description: 'Buat caption menarik untuk media sosial'
    },
    {
      id: 'textconverter',
      name: '🔠 Text Converter',
      icon: 'fas fa-exchange-alt',
      description: 'Konversi teks ke berbagai format'
    },
    {
      id: 'qrcode',
      name: '📷 QR Code Generator',
      icon: 'fas fa-qrcode',
      description: 'Buat QR code dari teks atau URL'
    },
    {
      id: 'business',
      name: '💡 Ide Bisnis Generator',
      icon: 'fas fa-lightbulb',
      description: 'Dapatkan inspirasi ide bisnis kreatif'
    },
    {
      id: 'password',
      name: '🔐 Password Generator',
      icon: 'fas fa-key',
      description: 'Buat password yang kuat dan aman'
    }
  ];

  // Shortlink Generator
  const generateShortLink = () => {
    if (!originalUrl) {
      alert('Masukkan URL terlebih dahulu');
      return;
    }
    
    // Simulasi generate short URL (dalam real app, ini akan call API)
    const shortCode = Math.random().toString(36).substring(2, 8);
    const shortUrl = `https://withus.id/${shortCode}`;
    setShortUrl(shortUrl);
  };

  // Caption Maker
  const generateCaption = () => {
    const baseText = caption || 'Foto hari ini';
    const styles = {
      professional: `🌟 ${baseText}\n\nMomen berharga yang ingin saya bagikan hari ini. Setiap detik adalah kesempatan untuk tumbuh dan berkembang! ✨\n\n#WithusGroup #InspirasiHarian #Motivasi`,
      casual: `Hey! 👋\n\n${baseText} nih, guys! Lumayan seru juga ya 😄\n\nKalian gimana hari ini? Cerita dong di kolom komentar! 👇\n\n#DailyPost #CasualTalk #FunTime`,
      inspirational: `✨ ${baseText.toUpperCase()}\n\n"Kesuksesan dimulai dengan tekad untuk mencoba."\n\nJangan pernah berhenti bermimpi dan berusaha! 💫\n\n#Motivation #Inspiration #SuccessMindset`,
      promotional: `🎯 ${baseText}\n\n🔥 SPECIAL OFFER! 🔥\n\nDapatkan penawaran eksklusif hanya untuk kamu! Jangan lewatkan kesempatan ini! 🚀\n\nLink di bio! 👆\n\n#Promo #SpecialOffer #Deal`
    };
    
    setCaption(styles[captionStyle]);
  };

  // Text Converter
  const convertText = () => {
    if (!textInput) return;
    
    const conversions = {
      uppercase: textInput.toUpperCase(),
      lowercase: textInput.toLowerCase(),
      titlecase: textInput.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      ),
      alternatcase: textInput.split('').map((char, index) => 
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      ).join(''),
      reverse: textInput.split('').reverse().join(''),
      removeSpaces: textInput.replace(/\s+/g, '')
    };
    
    setTextOutput(conversions[conversionType]);
  };

  // QR Code Generator
  const generateQRCode = () => {
    if (!qrData) {
      alert('Masukkan teks atau URL terlebih dahulu');
      return;
    }
    
    // Simulasi QR code generation (dalam real app, gunakan library seperti qrcode)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;
    setQrCode(qrUrl);
  };

  // Business Idea Generator
  const generateBusinessIdea = () => {
    const techIdeas = [
      'Aplikasi manajemen keuangan untuk UMKM dengan AI analytics',
      'Platform e-learning khusus skill digital untuk pelajar',
      'Marketplace produk lokal dengan sistem dropshipping',
      'Layanan konsultasi digital marketing untuk bisnis tradisional',
      'Aplikasi delivery makanan sehat dengan meal planning'
    ];
    
    const creativeIdeas = [
      'Studio konten kreatif untuk brand dan influencer',
      'Jasa pembuatan website portfolio untuk kreator',
      'Platform kolaborasi musisi dan produser lokal',
      'Brand agency khusus produk sustainable',
      'Workshop digital skill untuk komunitas'
    ];
    
    const serviceIdeas = [
      'Layanan subscription box produk lokal berkala',
      'Jasa konsultasi bisnis online untuk pemula',
      'Platform freelance khusus industri kreatif',
      'Layanan digitalisasi bisnis tradisional',
      'Agency social media management'
    ];
    
    const ideaPools = {
      technology: techIdeas,
      creative: creativeIdeas,
      service: serviceIdeas,
      all: [...techIdeas, ...creativeIdeas, ...serviceIdeas]
    };
    
    const ideas = ideaPools[industry];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    setBusinessIdea(randomIdea);
  };

  // Password Generator
  const generatePassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    setTextOutput(password);
    setConversionType('password');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Teks berhasil disalin!');
  };

  const renderToolContent = () => {
    switch (activeTool) {
      case 'shortlink':
        return (
          <div className="tool-content">
            <h3>🔗 Shortlink Generator</h3>
            <p>Buat tautan pendek yang mudah diingat dan dibagikan</p>
            
            <div className="input-group">
              <label>Masukkan URL Panjang:</label>
              <input
                type="url"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder="https://example.com/very-long-url-path"
                className="input-field"
              />
            </div>
            
            <button onClick={generateShortLink} className="btn btn-primary">
              <i className="fas fa-magic"></i> Generate Short Link
            </button>
            
            {shortUrl && (
              <div className="result-section">
                <label>Short URL:</label>
                <div className="result-box">
                  <code>{shortUrl}</code>
                  <button 
                    onClick={() => copyToClipboard(shortUrl)}
                    className="btn btn-outline"
                  >
                    <i className="fas fa-copy"></i> Salin
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'caption':
        return (
          <div className="tool-content">
            <h3>🧾 Caption Maker</h3>
            <p>Buat caption menarik untuk berbagai platform media sosial</p>
            
            <div className="input-group">
              <label>Gaya Caption:</label>
              <select 
                value={captionStyle} 
                onChange={(e) => setCaptionStyle(e.target.value)}
                className="input-field"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual & Fun</option>
                <option value="inspirational">Inspirational</option>
                <option value="promotional">Promotional</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Ide Caption (opsional):</label>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Masukkan ide caption dasar atau biarkan kosong untuk generate otomatis"
                className="input-field"
                rows="3"
              />
            </div>
            
            <button onClick={generateCaption} className="btn btn-primary">
              <i className="fas fa-wand-magic-sparkles"></i> Generate Caption
            </button>
            
            {caption && (
              <div className="result-section">
                <label>Hasil Caption:</label>
                <div className="result-box">
                  <pre>{caption}</pre>
                  <button 
                    onClick={() => copyToClipboard(caption)}
                    className="btn btn-outline"
                  >
                    <i className="fas fa-copy"></i> Salin Caption
                  </button>
                </div>
                <div className="caption-stats">
                  <span>Panjang: {caption.length} karakter</span>
                  <span>Baris: {caption.split('\n').length}</span>
                </div>
              </div>
            )}
          </div>
        );

      case 'textconverter':
        return (
          <div className="tool-content">
            <h3>🔠 Text Converter</h3>
            <p>Konversi teks ke berbagai format dengan mudah</p>
            
            <div className="input-group">
              <label>Jenis Konversi:</label>
              <select 
                value={conversionType} 
                onChange={(e) => setConversionType(e.target.value)}
                className="input-field"
              >
                <option value="uppercase">UPPERCASE</option>
                <option value="lowercase">lowercase</option>
                <option value="titlecase">Title Case</option>
                <option value="alternatcase">aLtErNaTiNg cAsE</option>
                <option value="reverse">Reverse Text</option>
                <option value="removeSpaces">Remove Spaces</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Teks Input:</label>
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Masukkan teks yang ingin dikonversi"
                className="input-field"
                rows="3"
              />
            </div>
            
            <button onClick={convertText} className="btn btn-primary">
              <i className="fas fa-sync-alt"></i> Konversi Teks
            </button>
            
            {textOutput && (
              <div className="result-section">
                <label>Hasil Konversi:</label>
                <div className="result-box">
                  <pre>{textOutput}</pre>
                  <button 
                    onClick={() => copyToClipboard(textOutput)}
                    className="btn btn-outline"
                  >
                    <i className="fas fa-copy"></i> Salin
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case 'qrcode':
        return (
          <div className="tool-content">
            <h3>📷 QR Code Generator</h3>
            <p>Buat QR code dari teks, URL, atau informasi lainnya</p>
            
            <div className="input-group">
              <label>Masukkan Teks atau URL:</label>
              <textarea
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                placeholder="https://example.com atau teks apapun"
                className="input-field"
                rows="3"
              />
            </div>
            
            <button onClick={generateQRCode} className="btn btn-primary">
              <i className="fas fa-qrcode"></i> Generate QR Code
            </button>
            
            {qrCode && (
              <div className="result-section">
                <label>QR Code:</label>
                <div className="qr-code-container">
                  <img src={qrCode} alt="QR Code" className="qr-code" />
                  <div className="qr-actions">
                    <a href={qrCode} download="qrcode.png" className="btn btn-outline">
                      <i className="fas fa-download"></i> Download
                    </a>
                    <button 
                      onClick={() => copyToClipboard(qrData)}
                      className="btn btn-outline"
                    >
                      <i className="fas fa-copy"></i> Salin Teks
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'business':
        return (
          <div className="tool-content">
            <h3>💡 Ide Bisnis Generator</h3>
            <p>Dapatkan inspirasi ide bisnis kreatif berdasarkan industri</p>
            
            <div className="input-group">
              <label>Pilih Industri:</label>
              <select 
                value={industry} 
                onChange={(e) => setIndustry(e.target.value)}
                className="input-field"
              >
                <option value="technology">Technology</option>
                <option value="creative">Creative Industry</option>
                <option value="service">Service Business</option>
                <option value="all">Semua Industri</option>
              </select>
            </div>
            
            <button onClick={generateBusinessIdea} className="btn btn-primary">
              <i className="fas fa-lightbulb"></i> Generate Ide Bisnis
            </button>
            
            {businessIdea && (
              <div className="result-section">
                <label>Ide Bisnis:</label>
                <div className="result-box business-idea">
                  <h4>✨ {businessIdea}</h4>
                  <div className="idea-actions">
                    <button 
                      onClick={() => copyToClipboard(businessIdea)}
                      className="btn btn-outline"
                    >
                      <i className="fas fa-copy"></i> Salin Ide
                    </button>
                    <button 
                      onClick={generateBusinessIdea}
                      className="btn btn-primary"
                    >
                      <i className="fas fa-refresh"></i> Ide Lainnya
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'password':
        return (
          <div className="tool-content">
            <h3>🔐 Password Generator</h3>
            <p>Buat password yang kuat dan aman untuk akun Anda</p>
            
            <div className="password-info">
              <div className="password-strength">
                <span>Kekuatan Password:</span>
                <div className="strength-bar">
                  <div className="strength-fill strong"></div>
                </div>
                <span className="strength-text">Sangat Kuat</span>
              </div>
              
              <ul className="password-tips">
                <li>✓ Panjang minimal 12 karakter</li>
                <li>✓ Kombinasi huruf besar & kecil</li>
                <li>✓ Mengandung angka dan simbol</li>
                <li>✓ Unik untuk setiap akun</li>
              </ul>
            </div>
            
            <button onClick={generatePassword} className="btn btn-primary">
              <i className="fas fa-key"></i> Generate Password
            </button>
            
            {textOutput && conversionType === 'password' && (
              <div className="result-section">
                <label>Password Baru:</label>
                <div className="result-box password-box">
                  <code className="password-text">{textOutput}</code>
                  <button 
                    onClick={() => copyToClipboard(textOutput)}
                    className="btn btn-outline"
                  >
                    <i className="fas fa-copy"></i> Salin Password
                  </button>
                </div>
                <div className="password-warning">
                  <i className="fas fa-exclamation-triangle"></i>
                  Simpan password di tempat yang aman dan jangan bagikan ke siapa pun!
                </div>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="tool-content">
            <h3>Pilih Tool</h3>
            <p>Silakan pilih tool yang ingin Anda gunakan dari menu di samping</p>
          </div>
        );
    }
  };

  return (
    <section className="section tools-section" id="tools">
      <div className="container">
        <div className="section-title">
          <div className="subtitle">
            <i className="fas fa-tools"></i>
            Withus Tools Online
          </div>
          <h2>Kumpulan Tools Digital Gratis</h2>
          <p>Berbagai alat digital praktis untuk membantu produktivitas dan kreativitas Anda</p>
        </div>

        <div className="tools-container">
          <div className="tools-sidebar">
            <h3>📋 Daftar Tools</h3>
            <div className="tools-list">
              {tools.map(tool => (
                <button
                  key={tool.id}
                  className={`tool-item ${activeTool === tool.id ? 'active' : ''}`}
                  onClick={() => setActiveTool(tool.id)}
                >
                  <div className="tool-icon">
                    <i className={tool.icon}></i>
                  </div>
                  <div className="tool-info">
                    <div className="tool-name">{tool.name}</div>
                    <div className="tool-desc">{tool.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="tools-main">
            <div className="tools-content">
              {renderToolContent()}
            </div>
            
            <div className="tools-features">
              <h4>🌟 Keunggulan Withus Tools</h4>
              <div className="features-grid">
                <div className="feature-card">
                  <i className="fas fa-bolt"></i>
                  <h5>Cepat & Efisien</h5>
                  <p>Proses instan tanpa perlu registrasi</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-shield-alt"></i>
                  <h5>Aman & Privasi</h5>
                  <p>Data tidak disimpan di server kami</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-mobile-alt"></i>
                  <h5>Responsif</h5>
                  <p>Akses dari desktop maupun mobile</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-sync-alt"></i>
                  <h5>Update Berkala</h5>
                  <p>Tools terus dikembangkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsOnline;