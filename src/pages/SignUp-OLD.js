import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, getAuth, updateProfile  } from 'firebase/auth';
import { auth } from '../Firebase'

import NavBar from '../components/Navbar';
import background from '../assets/NitesOut Gradient BG-rainbow.jpg';

import { db } from '../Firebase';
import Footer from '../components/Footer';

import '../css/SignUp.css';
import Alert from '../components/Alert';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [dpName,setDpName] = useState('');

    const [emailAlr,setEmailAlr] = useState(null);

    const emailExists = (e) => {
        //check if email exists in "user" collection
        //if it does, set emailAlr to true
        //else, set emailAlr to false
        e.preventDefault();
        
        
        var docRef = db.collection("user").doc(email);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setEmailAlr(true);
            } else {
                // doc.data() will be undefined in this case
                setEmailAlr(false);
                onSubmit(e);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }

 
    // const onSubmit = async (e) => {
    //   e.preventDefault()
     
    //   await createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         console.log(user);
    //         // ###########################
            
    //         db.collection("user").doc(user.email)
    //         .set({
    //             admin: false,
    //             uid: user.uid,
    //             kbreParticipant: false,
    //             password: password,
    //             username: dpName,
    //         },
    //         );
    //         // ###########################
    //         navigate("/login");
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // setEmailAlr(false);
    //         if(error.code === "auth/email-already-in-use"){
    //             // setEmailAlr(true);
    //             navigate("/login");
    //         }
    //         // console.log(errorCode, errorMessage);
    //         // ..
    //     });

    //     await updateProfile(auth.currentUser, {
    //         displayName: dpName
    //         }).then(() => {
    //         // Profile updated!
    //         // ...
    //         }).catch((error) => {
    //         // An error occurred
    //         // ...
    //         });
        
   
    // };
    const onSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log(user);
      
          // Add user data to the database
          await db.collection("user").doc(user.email).set({
            admin: false,
            uid: user.uid,
            kbreParticipant: false,
            password: password,
            username: dpName,
          });
      
          // Update user profile
          await updateProfile(auth.currentUser, {
            displayName: dpName,
          });
      
          navigate("/login");
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            setEmailAlr(true);
          } else {
            console.error("Error during signup:", error);
            // Handle other errors or display appropriate messages
          }
        }
      };
      
 
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

            {/* <div className='events-page-container fade-in'>                          */}
               <div className='signup-page-container fade-in'>
                    <div className='roundedRectangle'>

                    <form>
                        <div>
                            <label htmlFor="userName">
                                <b>Display Name: </b>
                            </label>
                            <input
                                
                                label="Display Name"
                                value={dpName}
                                onChange={(e) => setDpName(e.target.value)}  
                                required                                    
                                placeholder="Display Name"  
                                className='form-input'   
                                type='text'                           
                            />
                        </div>     
                        <br></br>
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
                        {emailAlr && (<Alert text={"Email already in use!"}/>) && (console.log("in use alert sent"))}
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
                                pattern='?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'      
                                title='Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters'        
                            />
                            <p className='alrHave'>Must contain at least one  number, one uppercase <br></br> and lowercase letter,and at least 8 or more characters</p>

                        </div>                                             
                        <br></br>
                        <button
                            type="button" 
                            onClick={emailExists} 
                            className='form-button'                       
                        >  
                            Sign up                                
                        </button>

                        <br></br>                                 
                    </form>

                    <p className='alrHave'>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            <b>Sign in </b>
                        </NavLink>
                    </p>       

                    </div> 
                </div>           
            {/* </div> */}
                <Footer/>
        </>
  )
}
 
export default Signup