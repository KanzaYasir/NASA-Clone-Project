import React from 'react';
import weatherImg from './images/weatherImg.png';

export default function WeatherData() {
  return (
    <section className="weatherDataSection">
      <header>
        <h1>Current Weather News</h1>
      </header>
      <div className="WeatherContainer">
        <article className="WeatherData">
          <p>Today</p>
          <h2>Image Of The Day</h2> {/* Changed to <h2> for better hierarchy */}
          <h3 style={{ marginTop: "3vw" }}>
            CubeSats are pictured after being deployed into Earth orbit
          </h3>
          <p className='para' style={{ marginTop: "2vw" }}>
            Tiny satellites, also known as CubeSats, are pictured after being deployed into Earth orbit from a small satellite orbital deployer on the outside of the International Space Station’s Kibo laboratory module.
          </p>
          <a href="/image-archive" style={{ fontWeight: "bold", cursor: "pointer" }}>
            Browse Image Archive
          </a>
        </article>
        <figure className="WeatherImg">
          <img src={weatherImg} id="weatherImg" alt="CubeSats deployed into Earth orbit" />
          <figcaption style={{ textAlign: "right", marginRight: "3vw", fontWeight: "bold", cursor: "pointer" }}>
            <a href="/full-image">View full Image</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
