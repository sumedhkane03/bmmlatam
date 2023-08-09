import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Firebase'

import NavBar from '../components/Navbar';
import background from '../assets/NitesOut Gradient BG-rainbow.jpg';

import { db } from '../Firebase';

import '../css/SignUp.css';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ###########################
            
    db.collection("mail")
    .add({
      to: user.email,
      message: {
        subject: "Welcome!",
        html: `
          Namaste,

          Thank you for signing up for our mailing list.

          Glad to have you as a part of the community.

          OM 🙏, 
          
          BMM LATAM
        `,
      },
    });
            // ###########################
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
            <>
                {/* <div className='bg-2' id = 'background-3'/> */}
                <div className='bg-2 fade-in' id = 'background-2'/>
                <NavBar/>
                <div className='loading-bar load-fast'/> 

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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

               <div className='events-page-container fade-in'>                         

                    <div className='roundedRectangle'>

                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                <b>Email address: </b>
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="password">
                                <b>Password: </b>
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        <br></br>
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>

                        <br></br>                                 
                    </form>

                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            <b>Sign in </b>
                        </NavLink>
                    </p>       

                    </div>            
                </div>
            </>
  )
}
 
export default Signup