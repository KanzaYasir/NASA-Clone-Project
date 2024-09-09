import React from "react";
import podcast from "./images/podcast1.png";
import podcast2 from './images/podcast2.png';
import podcast3 from './images/podcast3.png';
import podcast4 from './images/podcast4.png';

export default function Podcasts() {
  return (
    <section className="podcastsSection">
      <header>
        <h1>Featured Podcasts</h1>
      </header>
      <div className="podcastContainer">
        <article className="podcast">
          <img src={podcast} id="podcastImg" alt="Artemis IV: Gateway Gadget Fuels Deep Space Dining" />
          <div className="podcastContent">
            <p>2 Min Watch</p>
            <h5 style={{ fontWeight: "bold" }}>Artemis IV: Gateway Gadget Fuels Deep Space Dining</h5>
            <p>Article</p>
          </div>
        </article>
        <article className="podcast">
          <img src={podcast2} id="podcastImg" alt="NASA Earth Scientists Take Flight, Set Sail to Verify PACE Satellite Data" />
          <div className="podcastContent">
            <p>5 Min Watch</p>
            <h5 style={{ fontWeight: "bold" }}>
              NASA Earth Scientists Take Flight, Set Sail to Verify PACE Satellite Data
            </h5>
            <p>Article</p>
          </div>
        </article>
        <article className="podcast">
          <img src={podcast3} id="podcastImg" alt="What’s Up: September 2024 Skywatching Tips from NASA" />
          <div className="podcastContent">
            <p>2 Min Watch</p>
            <h5 style={{ fontWeight: "bold" }}>What’s Up: September 2024 Skywatching Tips from NASA</h5>
            <p>Article</p>
          </div>
        </article>
        <article className="podcast">
          <img src={podcast4} id="podcastImg" alt="NASA’s Webb Reveals Distorted Galaxy Forming Cosmic Question Mark" />
          <div className="podcastContent">
            <p>6 Min Watch</p>
            <h5 style={{ fontWeight: "bold" }}>NASA’s Webb Reveals Distorted Galaxy Forming Cosmic Question Mark</h5>
            <p>Article</p>
          </div>
        </article>
      </div>
    </section>
  );
}
