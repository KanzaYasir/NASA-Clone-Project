import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

export default function SpaceMissions() {
  // States for controlling autoplay
  const [youtubeSrc1, setYoutubeSrc1] = useState('https://www.youtube.com/embed/pjtomy2hXbA?si=rsm_N7YmI_Nf1Q3X&autoplay=0');
  const [youtubeSrc2, setYoutubeSrc2] = useState('https://www.youtube.com/embed/t9G36CDLzIg?si=lV1YTi49Aznz9xXo&autoplay=0');
  const [youtubeSrc3, setYoutubeSrc3] = useState('https://www.youtube.com/embed/sioX2bbkZms?si=5Uj6Kz9IQpv3Le07&autoplay=0');

  // Handle hover events for videos
  const handleMouseEnter = (videoId) => {
    if (videoId === 'video1') {
      setYoutubeSrc1('https://www.youtube.com/embed/pjtomy2hXbA?si=rsm_N7YmI_Nf1Q3X&autoplay=1');
    } else if (videoId === 'video2') {
      setYoutubeSrc2('https://www.youtube.com/embed/t9G36CDLzIg?si=lV1YTi49Aznz9xXo&autoplay=1');
    } else if (videoId === 'video3') {
      setYoutubeSrc3('https://www.youtube.com/embed/sioX2bbkZms?si=5Uj6Kz9IQpv3Le07&autoplay=1');
    }
  };

  const handleMouseLeave = (videoId) => {
    if (videoId === 'video1') {
      setYoutubeSrc1('https://www.youtube.com/embed/pjtomy2hXbA?si=rsm_N7YmI_Nf1Q3X&autoplay=0');
    } else if (videoId === 'video2') {
      setYoutubeSrc2('https://www.youtube.com/embed/t9G36CDLzIg?si=lV1YTi49Aznz9xXo&autoplay=0');
    } else if (videoId === 'video3') {
      setYoutubeSrc3('https://www.youtube.com/embed/sioX2bbkZms?si=5Uj6Kz9IQpv3Le07&autoplay=0');
    }
  };

  return (
    <section className="spaceMissions">
      <header>
        <h1 style={{ marginLeft: '3vw', fontSize: '3rem' }}>Space Missions</h1>
      </header>
      <div className="spaceMissionContainer">
        <div
          className="videoWrapper"
          onMouseEnter={() => handleMouseEnter('video1')}
          onMouseLeave={() => handleMouseLeave('video1')}
        >
          <iframe
            width="100%"
            height="100%"
            src={youtubeSrc1}
            title="NASA Space Mission Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div
          className="videoWrapper"
          onMouseEnter={() => handleMouseEnter('video2')}
          onMouseLeave={() => handleMouseLeave('video2')}
        >
          <iframe
            width="100%"
            height="100%"
            src={youtubeSrc2}
            title="NASA Space Mission Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div
          className="videoWrapper"
          onMouseEnter={() => handleMouseEnter('video3')}
          onMouseLeave={() => handleMouseLeave('video3')}
        >
          <iframe
            width="100%"
            height="100%"
            src={youtubeSrc3}
            title="NASA Space Mission Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
