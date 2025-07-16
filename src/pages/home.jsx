import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>Hello, I’m Gifted</h2>
      <p>A Passionate Software Engineer</p>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        alt="Portrait"
        style={{ width: '200px', height: '200px', borderRadius: '50%', marginTop: '20px' }}
      />
    </div>
  );
}