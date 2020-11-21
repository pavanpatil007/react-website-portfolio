import React from 'react';
import './servicecard.css';
import CardItem from './CardItem';

function Servicecards() {
  return (
    <>
     <div className='cards'>
      <h1 className='heading'>Checkout My Skills!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Python'
              label='Intermediat'
              path='/services'
             
            />
            <CardItem
              src='images/img-2.jpg'
              text='Android '
              label='BASIC'
              path='/services'
            />
          </ul>


          <ul className='cards__items'>

          <CardItem
              src='images/react-logo.png'
              text='React'
              label='INTERMEDIATE'
              path='/sign-up'
            />
            <CardItem
              src='images/js-img2.png'
              text='Javascript'
              label='MASTER'
              path='/services'
            />
             
            <CardItem
              src='images/ht-img.jpg'
              text='HTML , CSS'
              label='MASTER'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Servicecards;