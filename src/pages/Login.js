import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase';
import { NavLink, useNavigate } from 'react-router-dom'


import Navbar from '../components/Navbar';
 
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

                                                
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                <b>Sign up</b>
                            </NavLink>
                        </p>

                        </div>
                                                   
                    </div>

        </>
    )
}
 
export default Login