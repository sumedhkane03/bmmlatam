import React, {useState} from 'react';
import {  GoogleAuthProvider, ProviderId, reload, signInWithEmailAndPassword, signInWithEmailLink   } from 'firebase/auth';
import { auth, signInWithGoogle } from '../Firebase';
import { NavLink, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

import { getAuth, signInWithRedirect } from "firebase/auth";

import {signInWithPopup} from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const handleLogout = () => {
    auth.signOut();
    // useNavigate("/home");

}


const GoogleSI = () =>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
        {/* <div className='bg-2' id = 'background-3'/> */}
        <div className='bg-2 fade-in' id = 'background-2'/>
                <Navbar/>
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
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <br></br>
                            <div>
                                <label htmlFor="password">
                                    <b>Password: </b>
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    minLength={8}
                                />
                            </div>
                            
                            <br></br>

                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                                <br></br>
                            </div>       

                            <br></br>    
                            
                            <div>

                            <button onClick={GoogleSI}><i className="fab fa-google"></i>Sign in with google</button>

                            </div>

                                                
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                <b>Sign up</b>
                            </NavLink>
                        </p>

                        <div>
                            <button onClick={handleLogout}>Log out</button>
                        </div>

                        </div>
                                                   
                    </div>

        </>
    )
}
 
export default Login