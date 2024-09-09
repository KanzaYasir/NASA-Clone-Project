import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import './App.css'; // Ensure this path is correct for your CSS file

const SpaceMissionTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Define mission details
  const missions = [
    {
      title: 'Mission 1: Apollo 11 (1969)',
      description: 'First manned mission to the Moon.',
      keyEvent: 'Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon.',
      videoUrl: 'https://www.youtube.com/embed/nOcDftgR5UQ'
    },
    {
      title: 'Mission 2: Voyager 1 (1977)',
      description: 'Launched to study the outer planets and is now in interstellar space.',
      keyEvent: 'It sent back the first close-up images of Jupiter and Saturn.',
      videoUrl: 'https://www.youtube.com/embed/3LoWEncvTLQ'
    },
    {
      title: 'Mission 3: Hubble Space Telescope (1990)',
      description: 'Space-based telescope providing high-resolution images of space.',
      keyEvent: 'Revolutionized our understanding of the universe with its deep-field images.',
      videoUrl: 'https://www.youtube.com/embed/lzBO4LdxYl0'
    },
    {
      title: 'Mission 4: International Space Station (1998 - present)',
      description: 'Space station in low Earth orbit used for research and international collaboration.',
      keyEvent: 'Continues to host experiments and crew from multiple countries.',
      videoUrl: 'https://www.youtube.com/embed/NRgAz7ujn9E'
    },
    {
      title: 'Mission 5: Curiosity Rover (2012)',
      description: 'NASA’s Mars rover designed to explore the Gale Crater on Mars.',
      keyEvent: 'Discovered evidence of past water activity on Mars.',
      videoUrl: 'https://www.youtube.com/embed/N9hXqzkH7YA'
    },
    {
      title: 'Mission 6: SpaceX Falcon Heavy (2018)',
      description: 'The most powerful operational rocket in the world.',
      keyEvent: 'Successfully launched a Tesla Roadster into orbit around the Sun.',
      videoUrl: 'https://www.youtube.com/embed/sX1Y2JMK6g8'
    },
    {
      title: 'Mission 7: China’s Chang’e 5 (2020)',
      description: 'A mission to collect lunar samples and return them to Earth.',
      keyEvent: 'Successfully returned lunar samples to Earth for the first time since the 1970s.',
      videoUrl: 'https://www.youtube.com/embed/EiOW_bbSI9A'
    },
    {
      title: 'Mission 8: James Webb Space Telescope (2021)',
      description: 'Next-generation space telescope designed to study the universe in infrared.',
      keyEvent: 'Expected to provide deeper insights into the formation of stars and galaxies.',
      videoUrl: 'https://www.youtube.com/embed/1C_zuHf6lP4'
    },
    {
      title: 'Mission 9: Tianwen-1 (2021)',
      description: 'China’s Mars mission consisting of an orbiter, lander, and rover.',
      keyEvent: 'Successfully landed the Zhurong rover on Mars, marking China’s first mission to Mars.',
      videoUrl: 'https://www.youtube.com/embed/lb4VpWuUrjw'
    },
    {
      title: 'Mission 10: Artemis I (2022)',
      description: 'NASA’s mission to return humans to the Moon and establish a sustainable presence.',
      keyEvent: 'Uncrewed test flight of the Space Launch System (SLS) and Orion spacecraft.',
      videoUrl: 'https://www.youtube.com/embed/jrDv0OdMt5s'
    },
    {
      title: 'Mission 11: ExoMars Rover (2022)',
      description: 'A joint mission between ESA and Roscosmos to search for signs of past life on Mars.',
      keyEvent: 'Designed to deploy a rover to the Martian surface to search for signs of life.',
      videoUrl: 'https://www.youtube.com/embed/MldaFYv6DgU'
    }
  ];

  // Toggle active index
  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="timeline">
      <header>
        <h1>Space Mission Timeline</h1>
      </header>
      <div className="timeline-container">
        {missions.map((mission, index) => (
          <article key={index} className="timeline-item">
            <h2 className="timeline-title" onClick={() => handleToggle(index)}>
              {mission.title}
            </h2>
            <div
              className="timeline-content"
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              <p><strong>Description:</strong> {mission.description}</p>
              <p><strong>Key Event:</strong> {mission.keyEvent}</p>
              <LazyLoad height={315} offset={100}>
                <iframe
                  src={mission.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  title={`Video of ${mission.title}`}
                  style={{ width: '100%', height: '315px' }}
                ></iframe>
              </LazyLoad>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SpaceMissionTimeline;
