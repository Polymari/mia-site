import React, { useState } from 'react';
import './MicroLearningContent.css'; // We'll create this CSS file next

const MicroLearningContent = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoContent = [
    {
      id: 1,
      title: 'Fotografi Produk dengan Ponsel',
      description: 'Pelajari cara mengambil foto produk yang menarik hanya dengan menggunakan ponsel Anda.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube embed URL
      duration: '3:45',
      completed: false,
    },
    {
      id: 2,
      title: 'Strategi Pemasaran Digital untuk UMKM',
      description: 'Pahami dasar-dasar pemasaran digital untuk menjangkau lebih banyak pelanggan.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube embed URL
      duration: '4:10',
      completed: false,
    },
    {
      id: 3,
      title: 'Manajemen Keuangan Sederhana',
      description: 'Tips praktis mengelola keuangan bisnis kecil Anda agar tetap sehat.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube embed URL
      duration: '2:50',
      completed: false,
    },
  ];

  const handleVideoClick = (video) => {
    setActiveVideo(video);
  };

  const handleMarkComplete = (id) => {
    // In a real app, this would update user progress in a backend
    alert(`Video "${videoContent.find(v => v.id === id).title}" ditandai sebagai selesai!`);
    // For demonstration, we'll just update the local state (though not persistent)
    const updatedContent = videoContent.map(video =>
      video.id === id ? { ...video, completed: true } : video
    );
    // This would typically trigger a re-render with updated completion status
    // For this mock, we'll just show an alert.
  };

  return (
    <div className="micro-learning-container">
      <h2>Konten Micro-learning</h2>
      <p>Tingkatkan pengetahuan dan keterampilan Anda dengan tutorial video singkat.</p>

      {activeVideo ? (
        <div className="video-player-section">
          <h3>{activeVideo.title}</h3>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src={activeVideo.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>{activeVideo.description}</p>
          <button onClick={() => handleMarkComplete(activeVideo.id)}>Tandai Selesai</button>
          <button onClick={() => setActiveVideo(null)} className="btn-secondary">Kembali ke Daftar</button>
        </div>
      ) : (
        <div className="video-list">
          {videoContent.map((video) => (
            <div key={video.id} className="video-card" onClick={() => handleVideoClick(video)}>
              <h4>{video.title}</h4>
              <p>{video.description}</p>
              <span className="video-duration">Durasi: {video.duration}</span>
              {video.completed && <span className="completion-badge">✅ Selesai</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MicroLearningContent;