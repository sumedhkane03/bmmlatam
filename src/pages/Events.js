import {React, useEffect, useState} from 'react'

import Event from '../components/Event';
import Footer from '../components/Footer';

import '../css/Footer.css'
import '../css/Navbar.css'
import '../css/Events.css'
import Navbar from '../components/Navbar';



const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <>
        <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
        <div className='bg-2 fade-in' id = 'background-2'/>

        <Navbar/>
        {/* .loading-bar & .load -> Navbar.css */}
        <div className='loading-bar load-fast'/> 

        <div className='events-page-container'>
            <h1 className='events-page-title' id="team-page-title">Our Events</h1>
            <p className='alt-subtitle'>Join us in strengthening our Hindu community.</p>

            <div className='events-page-content'>
                <p className='timing-title'>Upcoming Events</p>

                <a href="/sundarkand" >
                <div className='highlight-event'>
                    <div className='highlight-event-tags'>
                        <p className='cool-tag'>Every Saturday</p>
                        <p>Guadalajara, MX</p>
                        <p>Sep 9, 2023</p>
                    </div>
                </div>
                </a>

                <p className='timing-title'>Past Events</p>

                <div className='events-grid'>
                    <Event
                            thumbnailID="hcc_may_thumb"
                            title="Hindu Cultural Connect 2023"
                            date="June 3, 2023"
                            location="Zapopan, MX"
                            pop="110"
                            link={"/hindu-cultural-connect"}
                        />
                </div>

                <div className='events-grid'>
                    <Event
                        thumbnailID="hhc_thumb"
                        title="Hindu Heritage Camp"
                        date="Jan. 8, 2023"
                        location="Guadalajara, MX"
                        pop="70"
                        link={"/hhc"}
                    />
                    <Event
                        thumbnailID="ak_ramayan"
                        title="Akhand Ramayan Path"
                        date="Mar. 25, 2023"
                        location="Guadalajara, MX"
                        pop="150"
                        link={"/ak-ramayan"}
                    />
                    <Event
                        thumbnailID="darshana"
                        title="Darshana Exhibition"
                        date="Nov. 11, 2022"
                        location="Guadalajara, MX"
                        pop="2000"
                        link={"/darshana"}
                    />
                    
                </div>

                

            </div>

        </div>
    
        <Footer/>
        
    </>
  )
}

export default Events