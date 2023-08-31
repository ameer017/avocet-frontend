import React, {useEffect, useState} from 'react'
import './auth.scss'
import Card from '../../components/card/Card'
import { GrInsecure } from 'react-icons/gr'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RESET, loginWithCode, sendLoginCode } from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import Loading from '../../components/loading/Loading'


const CodedLogin = () => {
  const [loginCodes, setLoginCodes] = useState(['', '', '', '', '', ''])
  const {email} = useParams()

  const dispatch =useDispatch();
  const navigate = useNavigate()

  const { isLoading, isLoggedIn, isSuccess,  } =
    useSelector((state) => state.auth);

    const sendUserLoginCode = async () => {
      await dispatch(sendLoginCode(email));
      await dispatch(RESET());
    };

    const loginUserWithCode = async (e) => {
    e.preventDefault()

    const joinedCode = loginCodes.join('')

    if (joinedCode === '') {
      return toast.error('Please fill in the login code')
    }
    if (joinedCode.length !== 6) {
      return toast.error('Access code must be 6 characters')
    }

    await dispatch(loginWithCode({ code: joinedCode, email }))
  }
  
  const handleCodeInputChange = (index, value) => {
    const updatedCodes = [...loginCodes]
    updatedCodes[index] = value
    setLoginCodes(updatedCodes)
  }
    useEffect(() => {
      if (isSuccess && isLoggedIn) {
        navigate("/profile");
      }
  
      dispatch(RESET());
    }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <div className='container auth'>
      {isLoading && <Loading/>}

        <Card>
        <div className='form'>
          <div className='--flex-center'>
            <GrInsecure size={35} color='#999'/>
          </div>

          <h2>Enter Access Code</h2>
          

          <form onSubmit={loginUserWithCode}>
            <div className='input-fields --mb'>
              {loginCodes.map((code, index) => (
                <input
                  key={index}
                  type='tel'
                  maxLength='1'
                  required
                  value={code}
                  onChange={(e) => handleCodeInputChange(index, e.target.value)}
                  className='input'
                />
              ))}
            </div>

            <button className='--btn --btn-primary --btn-block' type='submit'>Proceed To Login</button>
            <span className='--flex-center'>check your email for login access</span>

            <div className='links'>
            <p>
                <Link to='/'>Home</Link>
            </p>

            <p onClick={sendUserLoginCode} className="v-link --color-primary">
                <b>Resend Code</b>
              </p>
          </div>
          </form>


        </div>
        </Card>
    </div>
  )
}

export default CodedLogin