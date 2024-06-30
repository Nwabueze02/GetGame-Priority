// Home.js
import React from 'react';
import UserStats from './UserStats'; // Placeholder component for displaying user statistics
import VideoAnalysis from './VideoAnalysis'; // Placeholder component for video analysis
import SimilarVideos from './SimilarVideos'; // Placeholder component for similar videos
import './Home.css'; 
import StickyBanner from './StickyBanner'; // You can use this for notifications or important information

// Component to render homepage content
const Home = () => {
  return (
    <div>
      <StickyBanner />
      <div className="home-container">
        <div className="row">
          <VideoAnalysis /> {/* Component to analyze uploaded basketball practice videos */}
          <UserStats /> {/* Component to show user's performance statistics */}         
          <SimilarVideos /> {/* Component to show similar videos for improvement */}
        </div>
      </div>
    </div>
  );
}

export default Home;
