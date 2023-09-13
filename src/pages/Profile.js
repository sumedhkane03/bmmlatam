import React, {useState} from 'react';
import {  GoogleAuthProvider, ProviderId, reload, signInWithEmailAndPassword, signInWithEmailLink   } from 'firebase/auth';
import { auth, signInWithGoogle } from '../Firebase';
import { NavLink, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

import { getAuth } from "firebase/auth";






const Profile = () => {
    const navigate = useNavigate();
    
       
    
 
    return(
        <>
        {/* <div className='bg-2' id = 'background-3'/> */}
        <div className='bg-2 fade-in' id = 'background-2'/>
                <Navbar/>
                <div className='loading-bar load-fast'/> 

        </>
    )
}
 
export default Profile