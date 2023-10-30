import React from 'react'
import './Success.scss'
import { Link } from 'react-router-dom'
import {BiMessageRoundedError} from 'react-icons/bi'


const Error = () => {
  return (
    <section className='container top --flex-center'>
            <div className="success">
                <div className="card-border-top">
                </div>
                <div className="img">
                    <BiMessageRoundedError size={50} color='#fff'/>
                </div>
                <span> Oops!!</span>
                <p className="job">Payment Processing Failed.</p>
                
                <Link to='/' className='--btn --btn-block --btn-secondary'>Dismiss</Link>
            </div>
    </section>
  )
}

export default Error