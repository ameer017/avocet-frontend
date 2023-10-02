import React from 'react'
import './Success.scss'
import { Link } from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/fa'


const OrderCreationSuccess = () => {
  return (
    <section className='container top --flex-center'>
            <div className="success">
                <div className="card-border-top">
                </div>
                <div className="img">
                    <FaCheckCircle size={50} color='#fff'/>
                </div>
                <span> Congratulations!!</span>
                <p className="job">Your Order has been created and sent to the collector you picked successfully.</p>
                <p className="job">please, wait patiently while we finalize your order processing.</p>
                
                <Link to='/profile' className='--btn --btn-block --btn-secondary'>Dismiss</Link>
            </div>
    </section>
  )
}

export default OrderCreationSuccess