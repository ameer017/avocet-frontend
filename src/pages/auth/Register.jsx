import React, {useEffect, useState} from 'react'
import './auth.scss'
import Card from '../../components/card/Card'
import { BsCheck2All } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { TiUserAddOutline } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../redux/features/auth/authService'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { RESET, register, sendVerificationEmail } from '../../redux/features/auth/authSlice';
import PasswordInput from '../../components/passwordInput/PasswordInput'
import Loading from '../../components/loading/Loading'

const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
    address: ''
}

const Register = () => {
  const [formData, setFormData] = useState(initialState)

  const {name, email, password, password2, address} = formData

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isLoading, isLoggedIn, isSuccess, message} = useSelector((state) => state.auth)

  const [upperCase, setUpperCase] = useState(false)
  const [num, setNum] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [passLength, setPassLength] = useState(false)

  const timesIcon = <FaTimes color='red' size={15}/>
  const checkIcon = <BsCheck2All color='green' size={15} />

  const switchIcon = (condition) => {
      if(condition) {
        return checkIcon
      }else{
        return timesIcon
      }
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }


  // Password Strength
  useEffect(() => {
    // Check Lower and Uppercase  
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        setUpperCase(true)
    } else{
        setUpperCase(false)
    }

    // Check For Numbers
    if(password.match(/([0-9])/)) {
        setNum(true)
    } else{
        setNum(false)
    }

    // Check For Special char
    if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        setSpecialChar(true)
    } else{
        setSpecialChar(false)
    }

    // Check For password length
    if(password.length > 5) {
        setPassLength(true)
    } else{
        setPassLength(false)
    }
    
  }, [password])

  const registerUser = async (e) => {
    e.preventDefault()

    if(!name || !email || !password ) {
      return toast.error("All fields are required")
    }
    if(password.length < 6) {
      return toast.error("Password must be up to 6 characters")
    }
    if(!validateEmail(email)) {
      return toast.error("Please, add a valid email")
    }
    if(password != password2) {
      return toast.error("Password do not match")
    }


    const userData = {
      name, email, address, password
    }
    // console.log(userData)
    await dispatch(register(userData))
    await dispatch(sendVerificationEmail())
  };
  useEffect(() => {
    if(isSuccess, isLoggedIn){
      navigate('/profile')
    }
    dispatch(RESET())
  }, [isLoggedIn, isSuccess, dispatch, navigate])
  
  return (
    <div className='container auth'>
      {isLoading && <Loading/>}
        <Card>
        <div className='form'>
          <div className='--flex-center'>
            <TiUserAddOutline size={35} color='#999'/>
          </div>

          <h2>Register</h2>
          
          <form onSubmit={registerUser}>
            <input type='text' placeholder='Name' required name='name' value={name} onChange={handleInputChange}/>
            
            <input type='email' placeholder='Email' required name='email' value={email} onChange={handleInputChange}/>

            <input type='text' placeholder='Address' required name='address' value={address} onChange={handleInputChange}/>

            <PasswordInput placeholder='Password' name='password' value={password} onChange={handleInputChange} />
            
            <PasswordInput placeholder='confirm Password' name='password2' value={password2} onChange={handleInputChange} onPaste={(e) => {
              e.preventDefault()
              toast.error('cannot paste into input field')
              return false
            }}/>

            
            
            {/* password strength */}
              <Card cardClass='group'>
                  <ul className='form-list'>
                      <li>
                        <span className='indicator'> 
                          {switchIcon(upperCase)}
                          &nbsp; Lowercase & upperCase
                        </span>
                      </li>

                      <li>
                        <span className='indicator'>
                          {switchIcon(num)}
                          &nbsp; Number (0 - 9)
                        </span>
                      </li>

                      <li>
                        <span className='indicator'>
                          {switchIcon(specialChar)}
                          &nbsp; Special Character (!@#$%^&*-_)
                        </span>
                      </li>

                      <li>
                        <span className='indicator'>
                          {switchIcon(passLength)}
                          &nbsp; At least 6 characters
                        </span>
                      </li>
                  </ul>
              </Card>
            <button className='--btn --btn-success --btn-block' type='submit'>Register</button>
          </form>


          <span className='register'>
            <Link to='/' className='bg'>Home</Link>
            <p>&nbsp; Already have an account? &nbsp;</p>
            <Link to='/login' className='bg'>Login</Link>
          </span>
        </div>
        </Card>

        
    </div>
  )
}





export default Register