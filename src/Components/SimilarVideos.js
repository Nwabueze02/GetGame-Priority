// SimilarVideos.js
import React from 'react';
import './SimilarVideos.css';

const SimilarVideos = () => {
  return (
    <div className="similar-videos">
      <h2>Recommended Videos</h2>
      <ul>
        <li>Video 1: Improving Your Shooting Form</li>
        <li>Video 2: Drills for Better Accuracy</li>
        <li>Video 3: Enhancing Your Vertical Jump</li>
        {/* Add more recommended videos */}
      </ul>
    </div>
  );
}

export default SimilarVideos;
