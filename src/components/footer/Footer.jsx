import React from 'react'
import './Footer.scss'
import {ImFacebook, ImTwitter, ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <hr className='--color-dark'/>
        <div className=' --py2 footer '>
          <div className='title --flex-between'>
            <h1>AVOCET</h1>

            <div>
              <p>Become a client today!</p>
              <input type='email' placeholder='yourname@gmail.com' className='--mb'/>
              <button className='--mt --btn --btn-primary'>Submit</button>
            </div>

          </div>

          <div className='--flex-center gap --mb'>
            <nav>
              <Link to='/about' className='bg'>Company &nbsp;</Link>
              <Link to='/contact' className='bg'>Contact &nbsp;</Link>
              <Link to='/faq' className='bg'>FAQ</Link>
            </nav>
          </div>
          <div className='--flex-center gap --mb'>
            <nav>
              <Link to='/terms' className='bg'>Terms and Conditions</Link>
              <Link to='/privacy' className='bg'>Privacy Policy</Link>
            </nav>
          </div>

          <p className='--text-center --mt'>All Rights Reserved. &copy; 2023</p>
        </div>

    </>
  )
}

export default Footer