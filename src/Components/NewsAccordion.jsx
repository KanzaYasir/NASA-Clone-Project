import React from 'react';
import news from './images/news.png';
import article1 from './images/article1.png';
import article2 from './images/article2.png';

export default function NewsAccordion() {
  return (
    <>
      <section className="newsSection">
        <header>
          <h1>Featured News</h1>
          <h2>More NASA News</h2> {/* Changed to <h2> for a better hierarchical structure */}
        </header>
      </section>
      
      <section className="newsContainer">
        <article className="news1">
          <img src={news} id="news" alt="NASA Starliner news conference" />
          <div className="newsContent">
            <p>News Release</p>
            <p>4 Min Read</p>
            <h3 style={{ fontWeight: "bold" }}>NASA Sets Coverage for Starliner News Conference, Return to Earth</h3>
          </div>
        </article>
        
        <article className="article">
          <img src={article1} id="article1" alt="NASA to Support DARPA Robotic Satellite Servicing Program" />
          <div className="article1content">
            <p style={{ fontWeight: "bold", color: "white" }}>NASA to Support DARPA Robotic Satellite Servicing Program</p>
          </div>
          <p style={{ color: "white" }}>2 min read</p>
        </article>
        
        <article className="article2">
          <img src={article2} id="article2" alt="NASA’s Hubble and MAVEN Help Solve Mars Water Mystery" />
          <div className="article2content">
            <p style={{ fontWeight: "bold", color: "white" }}>NASA’s Hubble, MAVEN Help Solve the Mystery of Mars’ Escaping Water</p>
          </div>
          <p style={{ color: "white" }}>2 min read</p>
        </article>
      </section>
    </>
  );
}
