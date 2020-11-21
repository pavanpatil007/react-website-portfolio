import React from 'react'

import './Herosection.css';
import './resume.css';
import '../App.css';


function Herosection() {
  
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>PAVAN PATIL</h1>
            <p>I AM A DEVELOPER</p>
            <div className="hero-btns">
                <a className='btn btn--outline btn--large' href="/ppres.pdf" download>Download Resume </a>
                <a className='btn btn--primary btn--large' href="https:/github.com/pavanpatil007/" target='_blank' download>Visit GitHub Profile </a>
            </div>
            
            
        </div>
    )
}

export default Herosection

