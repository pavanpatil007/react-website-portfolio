import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='heading'>Checkout My Projects !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='I Have 4 Projects in Python 2 of them was commerical and two are on git hub '
              label='Python, Django'
              path='/services'
             
            />
            <CardItem
              src='images/img-2.jpg'
              text='Ecommerce Android is my Upcoming Project. I have completed 2 other mini- projects '
              label='Android'
              path='/services'
            />
          </ul>


          <ul className='cards__items'>

          <CardItem
              src='images/react-logo.png'
              text='Created a automation lab for college and projects for students'
              label='React'
              path='/sign-up'
            />
            <CardItem
              src='images/js-img2.png'
              text='Javascript'
              label='JavaScript'
              path='/services'
            />
             
            <CardItem
              src='images/ht-img.jpg'
              text='HTML'
              label='HTML/ BootStrap'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;