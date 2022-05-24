import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import{FaFacebook} from 'react-icons/fa'
import{AiFillTwitterCircle} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JUSTCHALCHAL</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://fb.com"><FaFacebook /></a>
        <a href="https://insta.com"><FaInstagram /></a>
        <a href="https://twitter.com"><AiFillTwitterCircle /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy;Nischal Khadka. All rights reserved.</small>


      </div>


    </footer>
    )
}

export default footer