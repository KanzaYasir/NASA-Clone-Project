import React from 'react';
import satelliteVideo from './videos/satellitevideo.mp4'

export default function HomeSection() {
  return (
    <>
    
<div className='HomeSecContainer'>
    <div className='HomeSecVideo' style={{ 
    
    }}>
      <video 
        src= {satelliteVideo} // Update this path to your local video file
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
        autoPlay 
        loop 
        muted 
      >
       
     
      </video>
   
    </div>
    <div className="HomeContent">
         <h1 className='HomeSecH1'>
          NASA's Europa Clipper  
        </h1>
        <p>Earth's first mission to conduct reconnaissance of Jupiter's moon, Europa.</p>
        <button className='btn btn-danger'>The Mission</button>
<div className="HomeFooterContent">
  <div className="HomePara">
    <div className="margineLine"></div>
        <p style={{marginTop:"1vw", marginBottom:"0vw"}}>OCEAN WORLD</p>
        <p style={{fontWeight:"bold"}}>Discover Europa</p>
  </div>
   

  <div className="HomePara">
    <div className="margineLine"></div>
        <p style={{marginTop:"1vw", marginBottom:"0vw"}}>EXPERIENCE THE LAUNCH
      </p>
        <p style={{fontWeight:"bold"}}>  NASA Social Application</p>
  </div>
  <div className="HomePara">
    <div className="margineLine"></div>
        <p style={{marginTop:"1vw", marginBottom:"0vw"}}>EXPLORING THROUGH ART
       </p>
        <p style={{fontWeight:"bold"}}> Kids Art Challenge</p>
  </div>
</div>
       
    </div>
    
        </div>
     
    </>
  );
}
