import '../../App.css';
import React from 'react';
import Cards from '../Cards';

import Herosection from '../Herosection';
import Footer from '../Footer';


function Home(){
    return(
        <>
            <Herosection/>
            <Cards/>
            <Footer/>
          
        </>

    )
}

export default Home;