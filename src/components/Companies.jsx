import React from 'react';

const Companies = () => {
  const companiesData = [
    {
      id: 1,
      name: "Withus Media",
      description: "Platform Media Digital",
      icon: "fas fa-newspaper",
      color: "#3498db",
      descriptionText: "Platform media digital yang menyajikan berita terkini, konten informatif, dan hiburan berkualitas untuk masyarakat modern dengan jangkauan luas.",
      tags: ["Berita Digital", "Konten Kreatif", "Platform Media"]
    },
    {
      id: 2,
      name: "Withus Apps",
      description: "Pengembangan Aplikasi",
      icon: "fas fa-mobile-alt",
      color: "#9b59b6",
      descriptionText: "Pengembangan aplikasi web dan mobile yang inovatif dengan pengalaman pengguna yang luar biasa dan teknologi terkini untuk berbagai platform.",
      tags: ["Aplikasi Mobile", "Pengembangan Web", "UI/UX Design"]
    },
    {
      id: 3,
      name: "Withus Tech",
      description: "Riset & Pengembangan",
      icon: "fas fa-robot",
      color: "#e74c3c",
      descriptionText: "Pusat penelitian dan pengembangan teknologi masa depan termasuk AI, IoT, cloud computing, dan sistem otomasi untuk solusi bisnis modern.",
      tags: ["Artificial Intelligence", "Internet of Things", "Cloud Computing"]
    },
    {
      id: 4,
      name: "Withus Creative",
      description: "Agen Kreatif",
      icon: "fas fa-palette",
      color: "#f39c12",
      descriptionText: "Agen kreatif yang menyediakan solusi branding, desain grafis, produksi video, dan kampanye pemasaran yang impactful untuk berbagai klien.",
      tags: ["Branding", "Desain Grafis", "Produksi Video"]
    },
    {
      id: 5,
      name: "Withus Commerce",
      description: "E-commerce & Marketplace",
      icon: "fas fa-shopping-cart",
      color: "#2ecc71",
      descriptionText: "Platform e-commerce dan marketplace yang menghubungkan bisnis dengan konsumen melalui pengalaman berbelanja digital yang unggul dan aman.",
      tags: ["E-commerce", "Marketplace", "Retail Digital"]
    },
    {
      id: 6,
      name: "Withus Academy",
      description: "Pendidikan Digital",
      icon: "fas fa-graduation-cap",
      color: "#1abc9c",
      descriptionText: "Lembaga pendidikan yang menyelenggarakan kursus, bootcamp, dan webinar di bidang teknologi, kreativitas, dan kewirausahaan.",
      tags: ["Pendidikan Digital", "Bootcamp", "Webinar"]
    },
    {
      id: 7,
      name: "Withus Studio",
      description: "Produksi Konten Hiburan",
      icon: "fas fa-film",
      color: "#e67e22",
      descriptionText: "Studio produksi konten hiburan berkualitas tinggi termasuk film, animasi, podcast, dan musik untuk berbagai platform digital.",
      tags: ["Produksi Film", "Animasi", "Podcast"]
    },
    {
      id: 8,
      name: "Withus Capital",
      description: "Investasi & Inkubasi",
      icon: "fas fa-hand-holding-usd",
      color: "#34495e",
      descriptionText: "Perusahaan investasi dan inkubasi yang mendukung startup berbasis teknologi dan kreatif dengan pendanaan dan mentorship berkualitas.",
      tags: ["Investasi", "Inkubasi Startup", "Venture Capital"]
    },
    {
      id: 9,
      name: "Withus Foundation",
      description: "Program Sosial & CSR",
      icon: "fas fa-hands-helping",
      color: "#16a085",
      descriptionText: "Lembaga nirlaba yang fokus pada program CSR, pelatihan digital untuk UMKM, beasiswa, dan proyek keberlanjutan lingkungan.",
      tags: ["CSR", "Pelatihan UMKM", "Beasiswa"]
    }
  ];

  return (
    <section className="section companies" id="companies">
      <div className="container">
        <div className="section-title">
          <div className="subtitle">Portofolio Perusahaan</div>
          <h2>Ekosistem Withus Group</h2>
          <p>Diversifikasi bisnis kami mencakup berbagai sektor industri dengan fokus pada teknologi, kreativitas, dan dampak sosial.</p>
        </div>
        <div className="companies-grid">
          {companiesData.map(company => (
            <div key={company.id} className="company-card">
              <div className="company-header">
                <div className="company-icon" style={{background: company.color}}>
                  <i className={company.icon}></i>
                </div>
                <div className="company-title">
                  <h3>{company.name}</h3>
                  <p>{company.description}</p>
                </div>
              </div>
              <div className="company-content">
                <p>{company.descriptionText}</p>
                <div className="company-tags">
                  {company.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;