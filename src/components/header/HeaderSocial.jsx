import React from 'react'
import {BsLinkedin} from'react-icons/bs'
import{FaGithubAlt} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="www.linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="www.github.com" target="_blank"><FaGithubAlt/></a>
        <a href="www.dribble.com" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocial