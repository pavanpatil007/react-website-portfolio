import React from 'react'

import { Button } from './Button'

export const Servicesection = () => {
    return (
        <div className='hero-container'>
           
            <h1>OUR SERVICES</h1>
            <p>We work in all domains !</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Contact Us</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Our Clients <i className='far fa-play-circle'/></Button>
            </div>
            
        </div>
    )
}
