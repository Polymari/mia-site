import React, { useState } from 'react';
import './CommunityForum.css'; // We'll create this CSS file next

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Budi', industry: 'Culinary', region: 'Jakarta', title: 'Resep Rahasia Rendang', content: 'Saya ingin berbagi resep rendang yang sudah turun-temurun di keluarga saya.', replies: 2 },
    { id: 2, user: 'Siti', industry: 'Fashion', region: 'Bandung', title: 'Tren Fashion Muslim 2025', content: 'Diskusi tentang tren fashion muslim yang akan populer tahun depan.', replies: 5 },
    { id: 3, user: 'Joko', industry: 'Crafts', region: 'Yogyakarta', title: 'Tips Pemasaran Kerajinan', content: 'Bagaimana cara memasarkan produk kerajinan tangan agar lebih dikenal?', replies: 1 },
  ]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostIndustry, setNewPostIndustry] = useState('Culinary');
  const [newPostRegion, setNewPostRegion] = useState('Jakarta');
  const [filterIndustry, setFilterIndustry] = useState('All');
  const [filterRegion, setFilterRegion] = useState('All');

  const industries = ['All', 'Culinary', 'Fashion', 'Crafts', 'Electronics', 'Services'];
  const regions = ['All', 'Jakarta', 'Bandung', 'Yogyakarta', 'Surabaya', 'Medan', 'Makassar'];

  const handleAddPost = () => {
    if (!newPostTitle || !newPostContent) {
      alert('Judul dan konten postingan tidak boleh kosong.');
      return;
    }
    const newPost = {
      id: posts.length + 1,
      user: 'Pengguna Baru', // Placeholder for current user
      industry: newPostIndustry,
      region: newPostRegion,
      title: newPostTitle,
      content: newPostContent,
      replies: 0,
    };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
  };

  const filteredPosts = posts.filter(post => {
    const matchesIndustry = filterIndustry === 'All' || post.industry === filterIndustry;
    const matchesRegion = filterRegion === 'All' || post.region === filterRegion;
    return matchesIndustry && matchesRegion;
  });

  return (
    <div className="community-forum-container">
      <h2>Forum Komunitas</h2>
      <p>Berinteraksi dan berbagi pengetahuan dengan sesama UMKM berdasarkan industri dan wilayah.</p>

      <div className="forum-filters">
        <select value={filterIndustry} onChange={(e) => setFilterIndustry(e.target.value)}>
          {industries.map(ind => <option key={ind} value={ind}>{ind === 'All' ? 'Semua Industri' : ind}</option>)}
        </select>
        <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}>
          {regions.map(reg => <option key={reg} value={reg}>{reg === 'All' ? 'Semua Wilayah' : reg}</option>)}
        </select>
      </div>

      <div className="new-post-section">
        <h3>Buat Postingan Baru</h3>
        <div className="form-group">
          <label htmlFor="postTitle">Judul:</label>
          <input
            type="text"
            id="postTitle"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            placeholder="Judul postingan Anda"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postContent">Konten:</label>
          <textarea
            id="postContent"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Tulis postingan Anda di sini..."
            rows="5"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="postIndustry">Industri:</label>
          <select id="postIndustry" value={newPostIndustry} onChange={(e) => setNewPostIndustry(e.target.value)}>
            {industries.filter(ind => ind !== 'All').map(ind => <option key={ind} value={ind}>{ind}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="postRegion">Wilayah:</label>
          <select id="postRegion" value={newPostRegion} onChange={(e) => setNewPostRegion(e.target.value)}>
            {regions.filter(reg => reg !== 'All').map(reg => <option key={reg} value={reg}>{reg}</option>)}
          </select>
        </div>
        <button onClick={handleAddPost}>Posting</button>
      </div>

      <h3>Postingan Terbaru</h3>
      {filteredPosts.length === 0 ? (
        <p>Belum ada postingan di kategori ini.</p>
      ) : (
        <div className="post-list">
          {filteredPosts.map(post => (
            <div key={post.id} className="post-card">
              <h4>{post.title}</h4>
              <p className="post-meta">Oleh: {post.user} | Industri: {post.industry} | Wilayah: {post.region}</p>
              <p>{post.content}</p>
              <span className="post-replies">💬 {post.replies} Balasan</span>
              <button className="btn-small">Lihat Detail</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityForum;