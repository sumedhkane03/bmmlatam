import React, {useState} from 'react';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { getAuth, onAuthStateChanged } from "firebase/auth";






const Profile = () => {
    const navigate = useNavigate();

    const [displayName, setDisplayName] = useState();
    const [userEmail,setUserEmail] = useState();
    const [uid,setUid] = useState();


    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User

              // ...

              setDisplayName(user.displayName);
              setUserEmail(user.email);
              setUid(user.uid);
              console.log(user.toJSON());
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, []);   
    
 
    return(
        <>
        <div className='bg-2 fade-in' id = 'background-2'/>
                <Navbar/>
                <div className='loading-bar load-fast'/>
            
            <div className='events-page-container'>
                <p className='events-page-title'>{displayName}</p>
                <p className='events-page-title'>{userEmail}</p>
                <p className='events-page-title'>{uid}</p>
            </div>
            <Footer/>
        </>
    )
}
 
export default Profile