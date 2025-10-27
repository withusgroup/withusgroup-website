import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ToolDetail = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();

  const toolData = {
    'ai-caption': {
      name: 'AI Caption & Ide Generator',
      description: 'Generate caption kreatif dan ide konten dengan AI',
      icon: 'fas fa-robot',
      color: '#8B5CF6'
    },
    'qr-custom': {
      name: 'QR Code Custom', 
      description: 'Buat QR code custom dengan desain menarik',
      icon: 'fas fa-qrcode',
      color: '#10B981'
    },
    // Add other tools...
  };

  const tool = toolData[toolId] || {
    name: 'Tool Tidak Ditemukan',
    description: 'Tool yang Anda cari tidak tersedia',
    icon: 'fas fa-exclamation-triangle',
    color: '#EF4444'
  };

  return (
    <>
      <Header />
      <div className="tool-detail-page">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            <i className="fas fa-arrow-left"></i> Kembali
          </button>
          
          <div className="tool-detail-header">
            <div className="tool-icon-large" style={{ background: tool.color }}>
              <i className={tool.icon}></i>
            </div>
            <div className="tool-detail-info">
              <h1>{tool.name}</h1>
              <p>{tool.description}</p>
            </div>
          </div>

          <div className="tool-detail-content">
            <div className="coming-soon-message">
              <i className="fas fa-tools"></i>
              <h2>Fitur Sedang Dalam Pengembangan</h2>
              <p>Tool <strong>{tool.name}</strong> akan segera hadir. Kami sedang bekerja keras untuk menyempurnakan fitur ini.</p>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/tools-automatic')}
              >
                <i className="fas fa-arrow-left"></i>
                Kembali ke Daftar Tools
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ToolDetail;