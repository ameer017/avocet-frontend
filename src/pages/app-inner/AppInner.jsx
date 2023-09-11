import React from 'react'
import './AppInner.scss'
import { Link, useNavigate } from 'react-router-dom'
import { AdminAuthorLink, ShowOnLogin, ShowOnLogout } from '../../components/protect/hiddenLink'

const AppInner = () => {
  
  const navigate = useNavigate()

  const registerCollector = () => {
    navigate('/collector')
  }
  const confirmOrder = () => {
    navigate('/confirm')
  }

  return (
    <section className='container inner'>
        <div>
            <img src='https://images.pexels.com/photos/6083648/pexels-photo-6083648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' loading='lazy'/>
        </div>

        <div className='inner-right'>
          <h2>Register as a collector.</h2>
          <ShowOnLogout>
            <h5>As a collector, you are to: ...</h5>

            <ul style={{listStyle: 'disc', fontSize: '14.5px', fontFamily: 'nunito'}}>
              <li>Interact with sellers to coordinate pickup times.</li>
              <li>Ensure a smooth waste pickup process.</li>
              <li>Ensure that the waste is properly sorted, <br/> weighed, and packaged for further processing.</li>
              <li>Address must contain - House number, Street Name, <br/>Nearest Landmark, State of Residence. </li>
            </ul>
          </ShowOnLogout>
          <button className='--btn --btn-success' onClick={registerCollector}>Click here</button>

          <hr className='color-dark'/>
          <ShowOnLogout>
              <p className='--mt'>Already a collector? Login instead.</p> 
              <Link className='--btn --btn-danger' to='/login'>Login</Link> 
            
          </ShowOnLogout>

        </div>
    </section>
  )
}

export default AppInner