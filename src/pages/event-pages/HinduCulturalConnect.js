import {React, useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import '../../css/Footer.css'
import '../../css/Navbar.css'
import '../../css/hhc.css'

import background from '../../assets/NitesOut Gradient BG-rainbow.jpg';

const HinduCulturalConnect = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return(
        <>
        <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
        <div className='bg-2 fade-in' id = 'background-2'/>
        
        <Navbar/>
        {/* .loading-bar & .load -> Navbar.css */}
        <div className='loading-bar load-fast'/> 

        <div className='main'>
            <h1 className='hhc-page-title'>TITLE</h1>
        <p className='hhc-page-title' id='hi'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla facilisi. Donec euismod, nunc id aliquam ultricies,
            nunc nisl ultricies nunc, vitae aliquam nunc nisl eu nunc.
        </p>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        

        <Footer/>

        </>
    )
}

export default HinduCulturalConnect
