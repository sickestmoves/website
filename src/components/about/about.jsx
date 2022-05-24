import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaRegUser} from 'react-icons/fa'
import {GiFilmProjector} from 'react-icons/gi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Hell nah</small>
            </article>

            <article className='about__card'>
            <FaRegUser className='about__icon' />
              <h5>Clients</h5>
              <small>Tons and Tons</small>
            </article>

            <article className='about__card'>
            <GiFilmProjector className='about__icon' />
              <h5>Projects</h5>
              <small>Tons and Tons</small>
            </article>
          </div>
          <p>
          Nischal Khadka, the founder of Buddhism who later became known as “the Buddha,” lived during the 5th century B.C. Gautama was born into a wealthy family as a prince in present-day Nepal. </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>

      </div>
    </section>
  )
}

export default about