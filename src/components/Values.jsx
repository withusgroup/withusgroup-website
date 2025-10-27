import React from 'react';

const Values = () => {
  const valuesData = [
    {
      id: 1,
      icon: "fas fa-lightbulb",
      title: "Inovasi",
      description: "Kami terus mendorong batas-batas kreativitas dan teknologi untuk menciptakan solusi yang revolusioner dan berdampak."
    },
    {
      id: 2,
      icon: "fas fa-users",
      title: "Kolaborasi",
      description: "Kami percaya kekuatan terbesar datang dari kerja sama tim dan kemitraan yang saling menguntungkan untuk mencapai tujuan bersama."
    },
    {
      id: 3,
      icon: "fas fa-shield-alt",
      title: "Integritas",
      description: "Kejujuran, transparansi, dan etika bisnis menjadi fondasi dalam setiap interaksi dan operasional perusahaan kami."
    },
    {
      id: 4,
      icon: "fas fa-heart",
      title: "Dampak Sosial",
      description: "Kami berkomitmen untuk menciptakan nilai tidak hanya bagi bisnis, tetapi juga bagi masyarakat dan lingkungan sekitar."
    }
  ];

  return (
    <section className="section" id="values">
      <div className="container">
        <div className="section-title">
          <div className="subtitle">Nilai-Nilai Kami</div>
          <h2>Prinsip yang Membimbing Setiap Langkah Kami</h2>
          <p>Nilai-nilai ini menjadi fondasi dalam setiap keputusan dan tindakan yang kami ambil untuk menciptakan dampak positif.</p>
        </div>
        <div className="values-grid">
          {valuesData.map(value => (
            <div key={value.id} className="value-card">
              <div className="value-icon">
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;