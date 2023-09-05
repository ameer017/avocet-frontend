import React, {useEffect, useState} from 'react'
import './new.scss'
import { BiLogIn } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { validateEmail } from '../../redux/features/auth/authService'
import { toast } from 'react-toastify'
import { RESET, login, loginWithGoogle, sendLoginCode } from '../../redux/features/auth/authSlice'
import { GoogleLogin } from '@react-oauth/google';
import Loading from '../../components/loading/Loading'


const initialState = {
  email: '',
  password: ''
}

const Login = () => {
  const [formData, setFormData] = useState(initialState)
  const {email, password} = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, message, isError, twoFactor } =
    useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const loginUser = async(e) => {
    e.preventDefault()

    if(!email || !password) {
      return toast.error("All fields are required")
    }
    if(!validateEmail(email)) {
      return toast.error("Please, add a valid email")
    }

    const userData = {
       email, password
    }
    // console.log(userData)
    await dispatch(login(userData))
  }

  useEffect(() => {
    if(isSuccess, isLoggedIn){
      navigate('/profile')
    }

    if(isError && twoFactor) {
        dispatch(sendLoginCode(email));
        navigate(`/loginWithCode/${email}`);
      
    }

    dispatch(RESET())
  }, [isLoggedIn, isSuccess, dispatch, navigate, isError, twoFactor, email])

  const googleLogin = async (credentialResponse) => {
    console.log(credentialResponse);
    await dispatch(
      loginWithGoogle({ userToken: credentialResponse.credential })
    );
  };

  return (
        <div className='container__form'>

          {isLoading && <Loading/>}
          <div className='form'>
            <div className='--flex-center'>
              <BiLogIn size={35} color='#999'/>
            </div>

            <h2 style={{textAlign: 'center'}}>Login</h2>

            <div className='--flex-center'>
              <GoogleLogin
                onSuccess={googleLogin}
                onError={() => {
                console.log('Login Failed');
                toast.error('Login failed')
              }}
              />
            </div>

            <br/>
            <p className='--text-center --fw-bold'>or</p>


            <form onSubmit={loginUser}>
              <div className='input-box'>
                <input type='email' placeholder='Email' required name='email' value={email} onChange={handleInputChange}/>
              </div>

              <div className='input-box margin__bottom'>
                <PasswordInput placeholder='Password' name='password' value={password} onChange={handleInputChange}/>
              </div>
              
              <button className='--btn --btn-success --btn-block ' type='submit'>{isLoading && <Loading/>}Login</button>
            </form>

            <Link to='/forgot' className='bg'>Forgot password</Link>

            <span className='flex --mt'>
              <Link to='/' className='bg'>Home</Link>
              <p>&nbsp; Don't have an account &nbsp;</p>
              <Link to='/register' className='bg'>Register</Link>
            </span>
          </div>
        </div>
  )
}

export default Login