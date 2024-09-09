import React from 'react';
import nasalogo from './images/nasa-logo.svg';
import fbImg from './images/fb-icon.png';
import instaImg from './images/instaImg.png';
import xImg from './images/XImg.png';
import youtubeImg from './images/youtubeImg.png';

export default function Footer() {
  return (
    <div className="p-8 bg-gray-800 text-white">
      <div className="flex flex-col">
        <img
          className="mt-14 h-[8vh] ml-[3vw]"
          src={nasalogo}
          alt="NASA Logo"
        />
        <div className="flex flex-wrap gap-8 mb-8">
          <div className="flex-1 min-w-[200px]">
            <h4>National Aeronautics and Space Administration</h4>
            <p className="my-4">
              NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
            </p>
            <p>About NASA's Mission</p>
            <h4 className="cursor-pointer">Join Us</h4>
          </div>
          <div className="flex-1 min-w-[200px]">
            <p>Home</p>
            <p>News & Events</p>
            <p>Multimedia</p>
            <p>NASA+</p>
            <p>Missions</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <p>Humans in Space</p>
            <p>Earth & Climate</p>
            <p>The Solar System</p>
            <p>The Universe</p>
            <p>Science</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <p>Aeronautics</p>
            <p>Learning Resources</p>
            <p>About NASA</p>
            <p>NASA en Español</p>
            <p>Technology</p>
          </div>
          <div className="flex-1 min-w-[200px]">
            <p>Follow</p>
            <div className="flex gap-2">
            <a href="www.facebook.com">  <img src={fbImg} alt="Facebook" className="w-[3vw] h-[3vw] object-contain" /></a>
             <a href="www.instagram.com"> <img src={instaImg} alt="Instagram" className="w-[3vw] h-[3vw] object-contain" /></a>
             <a href="www.twitter.com"> <img src={xImg} alt="X" className="w-[3vw] h-[3vw] object-contain" /></a>
              <a href="www.youtube.com"><img src={youtubeImg} alt="YouTube" className="w-[3vw] h-[3vw] object-contain" /></a>
            </div>
            <p>More NASA social Accounts</p>
            <p>NASA Newsletters</p>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <h4>Contact Information</h4>
          <p>Email: contact@nasa.gov</p>
          <p>Phone: +1 (202) 358-0001</p>
          <p>Address: NASA Headquarters, 300 E Street SW, Washington, D.C. 20546</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <h4>Contact Us</h4>
          <form className="flex flex-col">
            <input className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-800 text-white" type="text" placeholder="Name" required />
            <input className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-800 text-white" type="email" placeholder="Email" required />
            <textarea className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-800 text-white" placeholder="Message" rows="4" required></textarea>
            <button className="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
