import {React, useState, useRef, useEffect} from 'react'

import { Link, useNavigate } from 'react-router-dom';
import {MdClose, MdMenu} from 'react-icons/md';
import { db, auth } from '../Firebase';

import { onAuthStateChanged, getAuth, updateProfile, signOut } from "firebase/auth";


import '../css/Navbar.css'
import Alert from './Alert';

const Navbar = () => {  

    const navigate = useNavigate();

    const userEmail = useRef();

    const [invite, setInvite] = useState(false);
    const [waitlist, setWaitlist] = useState(false);

    const [displayName,setDisplayName] = useState(null);

    console.log(auth.currentUser);



    const saveAnswer = (event) => {
        event.preventDefault();

        try{
            db.collection("waitlist").add({
                email: userEmail.current.value
            });
        } catch {
            console.log("post error");
        }

        popUpLeave("wl");
        setTimeout(()=>{setInvite(true)}, 305);
    };

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

    const [comingSoon, setComingSoon] = useState(false);

    const comingSoonPop = () => {
        setComingSoon(true);
        setTimeout(()=>{
            setComingSoon(false);
        }, 7000);
    }

    // setting up variables for window width and height
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // setting up listener for window resize
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
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
              console.log("password", user.providerId)
              console.log("name: ", user.displayName)
              setDisplayName(user.displayName);
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, []);

    const menuLeave = () => {
        document.getElementById("cool-menu").classList.remove("menu-enter");
        document.getElementById("cool-menu").classList.add("menu-leave");

        setTimeout(()=>{
            setMenu(false);
        }, 400);
    };

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            console.log("Signed out successfully")
            window.location.reload(true);
        }).catch((error) => {
        // An error happened.
        });
    }

    const [menu, setMenu] = useState(false);

    return (
        <>
            {menu && (
                <div className='menu-container menu-enter' id='cool-menu'>
                    <MdClose className='close-menu' onClick={menuLeave}/>
                    <Link to='/'><p className='menu-btn'>Home</p></Link>
                    {/* <Link to='/blood-drive'><p className='menu-btn red-text-mobile'>Blood Drive</p></Link> */}
                    <Link to='/events'><p className='menu-btn'>Events</p></Link>
                    <Link to='/about'><p className='menu-btn'>About us</p></Link>
                    <Link to='/gallery'><p className='menu-btn'>Gallery</p></Link>
                    <Link to='/contact'><p className='menu-btn'>Contact us</p></Link>
                    <Link to='/competitions'><p className='menu-btn'>Competitions</p></Link>
                    <Link to='signup'><p className='menu-btn'>Sign up</p></Link>

                    <Link to='/my-profile'><p className='menu-btn'>{displayName}</p></Link>
                    {/* <Link to='/shop'><p className='menu-btn'>Shop</p></Link> */}
                    {/* <Link to='/daytime-dager' target="_blank"><p className='menu-btn'>Darty</p></Link> */}

                    {/*<p className='menu-btn menu-highlight' onClick={()=>{
                        menuLeave();
                        
                        setTimeout(()=>{
                            setWaitlist(true);
                        }, 200);
                        
                    }}>Join Waitlist</p>*/}
                </div>
            )}

            {comingSoon && (
                <Alert text="Coming Soon"/>
            )}

            {/* Event Invite */}
            {invite && (
                <>
                    <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("inv")}} id='blurry-bg-2'/>
                    <div className='popup-container popup-container-enter' id="cool-popup-2">
                        <div className='popup gold-card'>
                            <p className='invite-thanks'>You're Invited!</p>
                            {/* <img src={require("../assets/events/NasheDi-txt.png")} alt="litesout" className='invite-img'/> */}
                            <a href = "https://www.eventbrite.com/e/nashe-di-night-tickets-565509593417" className='get-tickets' target="_blank">
                                Get Tickets
                            </a>
                            <p className='invite-thanks'>Use Code "CantWait" For 20% Off</p>
                        </div>
                    </div>
                </>
            )}

            {/* Drink Deal */}
            {/* {invite && (
                <>
                    <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("inv")}} id='blurry-bg-2'/>
                    <div className='popup-container popup-container-enter' id="cool-popup-2">
                        <div className='popup'>
                            <p className='invite-thanks'>You're Invited!</p>
                            <img src={require("../assets/events/clear-litesout.png")} alt="litesout" className='invite-img'/>
                        </div>
                    </div>
                </>
            )} */}

            {/* {(waitlist) && (
                <>
                    <div className='dark-bg dark-bg-enter' onClick={()=>{popUpLeave("wl")}} id="blurry-bg"/>
                    <div className='popup-container popup-container-enter' id="cool-popup">
                        <div className='popup nitesout-card'>
                            <p className='popup-text'>Want NitesOut in your city?<br/>Join our waitlist.</p>
                            <form id='nitesout-waitlist' className='popup-inputs' onSubmit={saveAnswer}>
                                <input ref={userEmail} type='email' placeholder='Your Email Address'/>
                                <button type='submit'>Join</button> 
                            </form>
                        </div>
                    </div>  
                </>
            )} */}
        
        {width > 900 && (
            <div className='nav' id='nav'>
                <div className='top_logo' id='top_logo'>
                <Link to='/'><div className='toplogo'><img src={require("../assets/hsslogo.png")} alt="logo" className='logo' id="small_topcorner"/ ></div></Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/'><p className='nav-btn'>Home</p></Link> 
                    <Link to='/about'><p className='nav-btn'>About us</p></Link>
                    <Link to='/events'><p className='nav-btn'>Events</p></Link>

                    {/* <Link to='/blood-drive'><p className='menu-btn red-text'>Blood Drive</p></Link> */}

                    <Link to='/gallery'><p className='nav-btn'>Gallery</p></Link>
                    <Link to='/contact'><p className='nav-btn'>Contact us</p></Link>
                    <Link to='/competitions'><p className='nav-btn'>Competitions</p></Link>


                    {/* <Link to='/signup'><p className='nav-btn'>Sign Up</p></Link> */}
                    {(displayName != null) && (
                        <>
                    <Link to='/my-profile'><p className='nav-btn'>{displayName}</p></Link>

                    {/* <button className='nav-btn' onClick={handleLogout}>Sign out</button> */}
                    </>
                    )}
                    {(displayName === null) && (<Link to='/signup'><p className='nav-btn'>Sign up</p></Link>)}
                    
                    
                    
                    {/* <Link to='/signup'><p className='nav-btn'>SIGN UP!</p></Link> */}
                    {/*<Link to='/daytime-dager' target="_blank"><p className='nav-btn'>Darty</p></Link>*/}
                    {/* <p className='nav-btn' onClick={comingSoonPop}>Shop</p> */}
                    {/*<p className='nav-highlight' onClick={()=>{setWaitlist(true)}}>Join Waitlist</p>*/}
                </div>
            </div>
        )}
        {width < 900 && (
            <div className='mobile-nav' id='mobile-nav'>
                <div className='top_logo' id='top_logo'>
                <Link to='/'><img src={require("../assets/cornerlogo.png")} alt="logo" className='logo' id="small_topcorner"/ ></Link>
                </div>
                {/* <img src={require("../assets/hsslogo.png")} alt="logo" className='logo'/> */}
                <MdMenu className='open-menu' onClick={()=>{setMenu(true)}}/>
            </div>
        )}

        </>
    )
}

export default Navbar;