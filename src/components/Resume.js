import React from 'react';

import './resume.css';
import '../App.css';
import { Button } from './Button'
import Footer from './Footer';





function Resume() {
    return (

        
  
        <body>
        <div className='resume-container'>
            <img className='resume-bg-img' src="/images/img-1.jpg"/>
            
           
            <h1 className='head'>Download My Resume From Here</h1>
            <a className='resume-link' href="/ppres.pdf" download>Download <i className='far fa-play-circle'/> </a>

       
            
           
               
        </div>

        <Footer/>

        </body>
    )
}

export default Resume
