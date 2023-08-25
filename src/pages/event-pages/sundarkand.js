import {React, useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import '../../css/Footer.css'
import '../../css/Navbar.css'
import '../../css/hhc.css'

import background from '../../assets/NitesOut Gradient BG-rainbow.jpg';

const Sundarkand = () => {
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

        <div className='events-page-container'>

            <h1 className='hhc-page-title'>Sunderkand</h1>
            {/* description below */}
            <p className='event-desc'> <b>Saturday Aug 26, 2023 | 10:00 AM </b> </p>
            <p className='event-desc'><b>Av. Cuauhtémoc 632, Cd del Sol, 45050 Zapopan, Jal., Mexico </b></p>
            <p className='event-desc'><b>Subramanian ji's home: Apartment Number: </b> </p>


            <br></br>
            <br></br>


            <p className='event-desc'>
                Sunderkand Path every Saturday, many devotees of Shri Ram ji and Shri Hanuman ji get together to recite Sunderkand every Saturday at various homes.
                Everyone is welcome to join, information will be updated here or you may join our WhatsApp Group
                by clicking the WhatsApp logo on the Contact Us Page.
            </p>

            {/* <img src='../../assets/gallery/lo4.jpg'></img> */}
        </div>

        <Footer/>

    </>
    )
}

export default Sundarkand;