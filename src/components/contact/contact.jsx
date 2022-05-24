import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{IoLogoWhatsapp} from 'react-icons/io'
import{ useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7rx6ike', 'template_alzyt2h', form.current, '1JlZdaJ2nXgcbDEXJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>justchalchal@gmail.com</h5>
            <a href="mailto:justchalchal@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nischal Khadka</h5>
            <a href="https://fb.com/iamnischalkhadka" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
          <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+9779867762405</h5>
            <a href="https://api.whatsapp.com/send?phone+977-9867762405" target="_blank">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>



      </div>


    </section>
  )   
}

export default Contact