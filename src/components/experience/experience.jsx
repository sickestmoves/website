import React from 'react'
import './experience.css'
import {BiChevronRightCircle} from 'react-icons/bi'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have?</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon' />
            <div>
            <h4>JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon' />
            <dir>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </dir>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon' />
            <div>
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>Photoshop</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
        <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>Mango</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>My SQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>Phython</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>DBMS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiChevronRightCircle className='experience__detail-icon'/>
            <div>
            <h4>Styke</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        
        </div>

      </div>
    </section>
  
  )
}

export default experience