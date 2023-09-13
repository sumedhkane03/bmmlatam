import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Competitons from './pages/Competitions';

//Events
import HHC from './pages/event-pages/hhc';
import Darshana from './pages/event-pages/darshana';
import Ramayan from './pages/event-pages/ramayan';
import Sundarkand from './pages/event-pages/sundarkand'
import HinduCulturalConnect from './pages/event-pages/HinduCulturalConnect';


import Signup from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';

import BloodDrive from './pages/BloodDrive';

import Report from './pages/Report'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HashRouter>
  <BrowserRouter>
    <Routes>
        <Route path = "*" element = {<App/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/events" element = {<Events/>}/>
        <Route path = "/gallery" element = {<Gallery/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/competitions" element = {<Competitons/>}/>
        
        <Route path = "/hhc" element = {<HHC/>}/>
        <Route path = "/darshana" element = {<Darshana/>}/>
        <Route path = "/ak-ramayan" element = {<Ramayan/>}/>
        <Route path = "/sundarkand" element = {<Sundarkand/>}/>
        <Route path = "/hindu-cultural-connect" element= {<HinduCulturalConnect/>}/>
        
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/my-profile" element = {<Profile/>}/>

        <Route path = "/blood-drive" element = {<BloodDrive/>}/>

        <Route path = '/report' element = {<Report/>}/>

    </Routes>
    </BrowserRouter>
  // {/* </HashRouter> */}
);
