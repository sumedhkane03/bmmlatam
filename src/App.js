import {React, useState, useEffect, useRef} from 'react'

// all css imports
import './css/Home.css' // main css file
import './css/Navbar.css'
import './css/MockUp.css'
import './css/Features.css'
import './css/Waitlist.css'

// icon imports, visit https://react-icons.github.io/react-icons/ for more

// component imports, visit src\components for more details

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Alert from './components/Alert'

// back-end import, Firebase, supports waitlist
import { db } from './Firebase';

// AOS animation library import, animation on scroll
import Aos from 'aos'
import "aos/dist/aos.css";

// Link import, used for routing links to other pages on the website
import { Link } from 'react-router-dom'

import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';

const Home = () => {

    // variable that keeps track of the user's window size width and height
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    // listener that constantly updates the window size variables when user changes it
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // useEffect function runs once directly when page loads
    useEffect(() => {
        //  Initializing AnimateOnScroll, tweak this function to change animation duration and delay
        Aos.init({
            once: 'true',
            duration: 1000,
            delay: 200
        });

        //  Scroll to top of page when page loads
        window.scrollTo(0, 0);

        //  Adding event listener to window to update window size variables
        window.addEventListener("resize", updateDimensions);

        //  Removing event listener when component unmounts
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("logged in, uid: ", uid)
              console.log("email: ",user.email)
              console.log("password", user.displayName)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, []);

    // function to find if any part of an element is in the viewport, returns boolean
    // el is a document element, ex. document.querySelector(".element-class-name")
    function elementInViewport(el) {
        // don't worry about the code here, just know it works- keep it abstract
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
      
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
      
        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
    }

    // variable to check if the user is currently viewing the very top of the page
    const [offLanding, setOffLanding] = useState(false);
    // changes the background once the user scrolls past the landing page
    function changeBGOnScroll(){
        // don't worry about the code, just know it works- keep it abstract
        const bgTrigger1 = document.querySelector(".landing-logo");

        if (!elementInViewport(bgTrigger1)){ // user is off landing page
            document.getElementById('background').classList.remove('fade-in');
            document.getElementById('background').classList.add('fade-away');

            document.getElementById('landing-items').classList.remove('landing-fade-in');
            document.getElementById('landing-items').classList.add('landing-fade-out');

            setOffLanding(true);
        } else { // user is on landing page
            document.getElementById('background').classList.remove('fade-away');
            document.getElementById('background').classList.add('fade-in');

            document.getElementById('landing-items').classList.remove('landing-fade-out');
            document.getElementById('landing-items').classList.add('landing-fade-in');

            setOffLanding(false);
        }
    }

    // running the function everytime the user scrolls to keep track of the user's scroll position
    window.onscroll = function() {
            changeBGOnScroll();
    };

    // reference variable that holds the users email input
    const userEmail = useRef();

    // variables that hold the visibility state of the waitlist and invite popup
    const [invite, setInvite] = useState(false); // ex. setInvite(false) will make it dissapear
    const [waitlist, setWaitlist] = useState(false); // ex. setWaitlist(true) will make it appear

    // saves the user's email and adds it to the back-end waitlist
    const saveAnswer = (event) => {
        event.preventDefault();

        try{
            db.collection("waitlist").add({
                email: userEmail.current.value
            });
            //console.log("dne");
        } catch {
            console.log("post error");
        }

        popUpLeave("wl");
        setTimeout(()=>{setInvite(true)}, 305);
    };

    // function that makes the waitlist popup dissapear smoothly
    // popupType is either "wl" for waitlist or "inv" for invite
    function popUpLeave(popupType){

        if(popupType === "wl"){
            document.getElementById("cool-popup").classList.remove("popup-container-enter");
            document.getElementById("cool-popup").classList.add("popup-container-leave");
    
            document.getElementById("blurry-bg").classList.remove("dark-bg-enter");
            document.getElementById("blurry-bg").classList.add("dark-bg-leave");

            setTimeout(()=>{
                setWaitlist(false);
            }, 300);
        }
        if (popupType === "inv"){
            document.getElementById("cool-popup-2").classList.remove("popup-container-enter");
            document.getElementById("cool-popup-2").classList.add("popup-container-leave");
    
            document.getElementById("blurry-bg-2").classList.remove("dark-bg-enter");
            document.getElementById("blurry-bg-2").classList.add("dark-bg-leave");

            setTimeout(()=>{
                setInvite(false);
            }, 300);
        }
    }

  return (
    <html>
    
    {/* background on landing page */}
    <div className='bg fade-in' id = 'background'/>

    {/* background everywhere else, there are 2 backgrounds on top of eachother with one fading in and out over the span of 10 seconds infinitely to give it a animated effect */}
    <div className='bg-2 fade-in bg-animate' id = 'background-3'/>
    <div className='bg-2 fade-in' id = 'background-2'/>

    {/* MAILING LIST POPUP */}
    {(waitlist) && (
        <>
            <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("wl")}} id="blurry-bg"/>
            <div className='popup-container popup-container-enter' id="cool-popup">
                <div className='popup nitesout-card'>
                    <p className='popup-text'>Join our mailing list!<br/>Email updates of events, competitions and other items.</p>
                    <form id='nitesout-waitlist' className='popup-inputs' onSubmit={saveAnswer}>
                        <input ref={userEmail} type='email' placeholder='Your Email Address'/>
                        <button type='submit'>Join</button> 
                    </form>
                </div>
            </div>  
        </>
    )}

    {/* holds all different sections on the homepage */}
    <div className = 'pages'>
        
        <Navbar/>

        {/* .loading-bar -> Navbar.css */}
        <div className='loading-bar load-fast'/> 
        
        <Alert id='cookies' text={"By visiting this website, you agree to our use of cookies."}/>

        {/* .landing -> Home.css */}
        <div className='landing'>
            {/* center text and logo */}
            <div className='landing-content'>
                <img src={require("./assets/hsslogo.png")} alt="logo" className='landing-logo'/>
                <h1 className='landing-title'>BHARAT MAHOTSAV<br/>MANDAL</h1>
                <h2 className='landing-sub'>वसुधैव कुटुम्बकम्</h2>
                {/* big glowing button */}
                <p className='landing-waitlist' onClick={()=>{setWaitlist(true)}}>Join Mailing list</p>
                <div className='subhashitam-box'>
                    <h4 className='subhashitam'>
                        न ही कश्चित् विजानाति 
                        किं कस्य श्वो भविष्यति। <br></br>
                        अतः श्वः करणीयानि 
                        कुर्यादद्यैव बुद्धिमान्॥
                        
                    </h4>
                </div>

                <div className='meaning-box'>
                    <h4 className='subhashitam-meaning'>
                    No one knows what is going to happen tomorrow. <br></br>So doing all of tomorrow's task today is a signature of wise.
                    </h4>
                </div>
            </div>

            <div className='bar-node' id='bar-node-1'>
                <img src={require("./assets/ShriRam.png")} alt="bar node" className='bar-img'/>
                {/* 2-3 seperate rings surrounding each bar image */}
                <div className='ring'/>
                <div className='ring' id = "ring-1-2"/>


                {/* WhiteTag are the tags that appear around the bar images */}
            </div>

            <div className='bar-node' id='bar-node-3'>
                <img src={require("./assets/omLogo.png")} alt="bar node" className='bar-img'/>
                <div className='ring'/>
                <div className='ring' id = "ring-1-2"/>
                
            </div>

        </div>
        {/*<div className='under-landing'> under-landing styling -> Home.css */}
        
            <Footer/>
        
    </div>
    </html>
  )
}

export default Home