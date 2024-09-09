import React from 'react';
import './App.css'; // Adjust the path if needed
import universeImg from './images/universeImg.png';

export default function Exploration() {
  return (
    <div>
      <div className="Explorecontainer">
        <img src={universeImg} alt="Universe" />
        <div className="exploreContent" style={{color:"white"}}>
          <h1 style={{fontSize:"3rem", width:"25vw"}}>Explore the Universe from your Inbox</h1>
          <h6 style={{fontWeight:"bold"}}>Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.</h6>
          <h6>We will never share your email address.

<b>Privacy Policy</b> </h6>
<h4 style={{fontWeight:"bold"}}>Sign Up</h4>
        </div>
      </div>
    </div>
  );
}
