import React from 'react'
import './Success.scss'
import { Link } from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/fa'


const Success = () => {
  return (
    <section className='container top --flex-center'>
            <div className="success">
                <div className="card-border-top">
                </div>
                <div className="img">
                    <FaCheckCircle size={50} color='#fff'/>
                </div>
                <span> Success!!</span>
                <p className="job">Payment Processed.</p>
                
                <Link to='/' className='--btn --btn-block --btn-secondary'>Done</Link>
            </div>
    </section>
  )
}

export default Success