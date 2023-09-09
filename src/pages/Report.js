import {React, useEffect, useState} from 'react'
import Member from '../components/Member';

import Footer from '../components/Footer';

import '../css/Footer.css'
import '../css/Team.css'
import '../css/Navbar.css'
import Navbar from '../components/Navbar';


import ImageSlider from '../components/ImageSlider';

const Team = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [wlActive, setWlActive] = useState(false);


    const slides = [
      {url: require("../assets/gallery/lo1.jpg"), title: "first"},
      {url: require("../assets/gallery/lo2.jpg"), title: "second"},
      {url: require("../assets/gallery/lo3.jpg"), title: "third"},
      {url: require("../assets/gallery/lo4.jpg"), title: "fourth"},
    ];


    const containerStylesMob = {
      width: "375px",
      height: "210px",
      margin: "0 auto",
    };

    const containerStyles = {
      width: "750px",
      height: "420px",
      margin: "0 auto",
    };
    
    


  return (
    <>
        <div className='bg-2 fade-in bg-animate' id = 'background-2'/>
        <div className='bg-2 fade-in' id = 'background-2'/>
        
        <Navbar/>
        {/* .loading-bar & .load -> Navbar.css */}
        <div className='loading-bar load-fast'/> 
        
        <div className='events-page-container'>
        <h1 className='events-page-title' id='team-page-title'>Image Slideshow</h1>
        </div>

        {/* <div className='events-page-container'>

            <h1 className='events-page-title' id='team-page-title'>Image Slideshow</h1>

            <div className='events-page-items HTMLINDENT'>
            Namaste, my name is Sumedh Kane. I am going into my third year as an undergraduate student at the University of Maryland. 
            I am a pratham varsh shikshit and my matru shakha is Shalivahana Shakha in Ellicott City, Maryland. 
            I have had the wonderful opportunity to go as a vistarak to Guadalajara, Mexico. In total I have spent 20 days there, 
            one week in January 2023 and two weeks in May/June 2023. After going there I learned a lot about the location, the people, 
            and the fundamentals of starting sangh work in a new location. 
            I will share these in this report.
            </div>

            <div className='events-page-items'>
                <b>A. Location Overview</b>
                <br></br>
                <br></br>
                <p className='HTMLINDENT'>While there are multiple cities in Mexico with a significant Hindu population, I visited Guadalajara.
                 Guadalajara is a metropolitan city around 300 miles northwest of Mexico City with 1.4 million residents,
                  of which roughly 4,000 are Hindu. There are a couple of temples and a few Indian grocery stores as well. 
                  The Hindu population in Guadalajara moved there for work, the main companies which sponsor Indians are Tata 
                  Consultancy Services, Hindustan Computers Limited, and AmDocs. Typically the folks who come to Guadalajara to 
                  work are only there for around 1-2 years then move back to India, however there is a good number of families who 
                  have lived in Guadalajara for 5+ years. There are many families with young children as well as men who have come 
                  alone without their families to work. The children attend international schools where they are taught in both 
                  English and Spanish. With most citizens of Guadalajara not knowing English and only knowing Spanish, it has become 
                  a necessity to learn the basics of the language, as well as to find others of a similar Indian/Hindu background to 
                  mingle with. There are many close knit families who meet regularly and are friends.
                  </p>

            </div>

            <div className='events-page-items'>
                <b>B. Problem Areas</b>
                <br></br>
                <br></br>
                <p className='HTMLINDENT'>As with any location, there are a few challenging aspects to starting and maintaining Sangh work in Guadalajara,
                 and Mexico as a whole. As mentioned above, the families moving to Mexico do so for work. Typically due to the differences in 
                 language and culture, as well as the remoteness from India, these families only stay for an average of two years before returning to 
                 India. Naturally families do not tend to come in waves and are constantly flowing in and out of Guadalajara, making it difficult to
                  hold a large sankhya that is regularly coming to shakha and involved with sangh activities. Although people may not be ready to 
                  dedicate time weekly, whenever there is an event such as a Ramayan Path, Geeta Path, Hindu Heritage Camp, or Rath Yatra, Hindus 
                  show up with enthusiasm in large numbers, giving us a clear need for Sangh work in Mexico. Another problem area is the lack of 
                  personal transportation amongst karyakartas. Unlike the U.S. most families in Guadalajara do not possess their own personal vehicles,
                   and opt to use ridesharing services such as Uber, instead. One last prominent problem area is the training of core karyakartas. 
                   Although the core team is dedicated, some are used to the paddati of RSS in Bharat, and some are completely new to the Sangh parivar.
                    Due to this, it is imperative that the shikshan of the core karyakarta team be managed in order to assure the smooth running of shakhas
                     and other activities. The team is doing well and all have unique strengths that work well together, they have had basic training 
                     which has definitely helped so far, 
                there just needs to be continued and more advanced training happening now and in the future.
                </p>
            </div>
        
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        {(window.innerWidth >  900) && (
        <div style={containerStyles}>
        <ImageSlider slides={slides}/>
        </div>
        )
        }

        {(window.innerWidth <  900) && (
        <div style={containerStylesMob}>
        <ImageSlider slides={slides}/>
        </div>
        )
        }

        <Footer/>

    </>
  )
}

export default Team