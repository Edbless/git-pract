import React from 'react';

export default function Projects() {
  return (
    <div style={{ padding: '40px' }}>
      <h2>Projects</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        <div>
          <img src="https://images.unsplash.com/photo-1581093588401-22f0b6a7c6c3" alt="Project 1" style={{ width: '300px' }} />
          <p>Project One: E-commerce App</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1584697964192-c9c05aa3a62c" alt="Project 2" style={{ width: '300px' }} />
          <p>Project Two: Blog Website</p>
        </div>
      </div>
    </div>
  );
}