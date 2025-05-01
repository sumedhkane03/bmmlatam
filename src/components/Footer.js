import React from 'react'
import '../css/Footer.css'

import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='foot-branding'>
            <span>Code & Design by </span>
            <img src={require('../assets/hsslogo.png')}/>
            <span>Bharat Mahotsav Mandal LATAM</span>
            <a target="_blank" href="https://www.instagram.com/bmmlatam/">
                <FaInstagram className='foot-social'/>
            </a>
            {/*
            <a target="_blank" href="https://twitter.com/nitesoutent">
                <FaTwitter className='foot-social'/>
            </a>
            <a target="_blank" href="">
                <FaTiktok className='foot-social'/>
            </a>
            */}
        </div>

        {/* href='mailto:contact@bmmlatam.org' */}
        <p className='text-white' ><a href='mailto:contact@bmmlatam.org'><MdEmail className='text-white '/> </a>  contact@bmmlatam.org</p>

    </div>
  )
}

export default Footer