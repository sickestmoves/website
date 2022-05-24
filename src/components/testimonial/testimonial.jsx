import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: AVTR1,
    cname: 'Lukitaa Doncic',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum cum porro est voluptate natus! Aperiam laboriosam itaque error similique consectetur at quaerat, explicabo magni saepe pariatur. Quod, maxime facere?'
  },
  {
    id: 2,
    image: AVTR2,
    cname: 'Kevin Durant',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum cum porro est voluptate natus! Aperiam laboriosam itaque error similique consectetur at quaerat, explicabo magni saepe pariatur. Quod, maxime facere?'
  },
  {
    id: 3,
    image: AVTR3,
    cname: 'Cristiano Ronaldo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum cum porro est voluptate natus! Aperiam laboriosam itaque error similique consectetur at quaerat, explicabo magni saepe pariatur. Quod, maxime facere?'
  },
  {
    id: 4,
    image: AVTR4,
    cname: 'Elonia Musk',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum cum porro est voluptate natus! Aperiam laboriosam itaque error similique consectetur at quaerat, explicabo magni saepe pariatur. Quod, maxime facere?'
  }
]

const testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Reciews from Clients</h5>
      <h2>Testimonials</h2>


      <Swiper className='container testimonial__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
    {
      data.map(({id, image, cname, review}) => {
        return(
          <SwiperSlide key={id} className='testimonial'>
            <div className='client__avatar'>
              <img src={image} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{cname}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
        )
      })
    }
    </Swiper>
    </section>
  )
}

export default testimonial