import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Email</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/pavan_patil45'target='_blank'>Instagram</a>
            <a href='https:/facebook.com/brand0001i/' target='_blank'>Facebook</a>
            <a href='https://www.youtube.com/channel/UCj-30E8glEa7_BCIr5K_l3Q/' target='_blank'>Youtube</a>
            <a href='https:/twitter.com/the_blackhat_/' target='_blank'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Coding Dream
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Coding Dream © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https:/facebook.com/brand0001i/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/pavan_patil45'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href="https://www.youtube.com/channel/UCj-30E8glEa7_BCIr5K_l3Q/" 
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https:/twitter.com/the_blackhat_/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
             </a> 
            <a
              class='social-icon-link twitter'
              href='https:/github.com/pavanpatil007/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;