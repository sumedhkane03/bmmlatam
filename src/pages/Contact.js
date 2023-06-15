import {React, useEffect, useState} from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../css/Contact.css';
import '../css/Navbar.css';
import '../css/Footer.css';


import background from '../assets/NitesOut Gradient BG-rainbow.jpg';
import Member from '../components/Member';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
        <div className='bg-2 fade-in' id = 'background-2'/>
        <Navbar/>
        <div className='loading-bar load-fast'/> 
        <div className='events-page-container'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='team-members'>
                <Member
                    picture={<img src={require('../assets/contactlogo.png')}/>}
                    name='Bharat Mahotsav Mandal'
                    role='Contact Us'
                    major="Jay Shree Ram"
                    ig="https://www.instagram.com/bmmlatam/"
                    li="https://chat.whatsapp.com/JsHM25F4vRtLpRfDCKuSmJ"
                    git="https://twitter.com/bmmlatam"
                    id="none"
                    fb="https://www.facebook.com/bmmlatam"
                />
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Contact;