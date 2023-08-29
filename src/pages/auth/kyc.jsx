import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RESET } from "../../redux/features/auth/kycSlice";


const initialState = {
  irstName: '',
  middleName: '',
  lastName: '',
  DOB: '',
  gender: '',
  stateOfOrigin: '',
  localGovt: '',
  VIN: '',
  photo: ''
}

const Kyc = () => {
  const [formData, setFormData] = useState(initialState);
  const {firstName,
    middleName,
    lastName,
    DOB,
    gender,
    stateOfOrigin,
    localGovt,
    VIN,
    photo
  } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isLoading, isSuccess, message, user} = useSelector((state) => state.kyc)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const createKycData = async(e) => {
    e.preventDefault();

    if(!firstName || !middleName || !lastName || !DOB || !gender || !stateOfOrigin || !localGovt || !VIN || !photo) {
      return toast.error('Please, fill in all the required fields.')
    }

    if(NIN.length < 11) {
      return toast.error("NIN must be up to 11 characters")
    }

    const kycData = {
      firstName,
      middleName,
      lastName,
      DOB,
      gender,
      stateOfOrigin,
      localGovt,
      VIN,
      photo
    }

    console.log(kycData)
    await dispatch(createKyc(kycData))
  }

  useEffect(() => {
    if(isSuccess){
      navigate('/profile')
    }
    dispatch(RESET())
  }, [isSuccess, dispatch, navigate])

  return(
    <div className="container auth">
      <Card>
        <div className="form">
          <h2>KYC Verification</h2>

          <form onSubmit={createKycData}>
            <input type='text' placeholder='first name..' required name='firstName' value={firstName} onChange={handleInputChange}/>
            
            <input type='text' placeholder='middle name..' required name='middleName' value={middleName} onChange={handleInputChange}/>

            <input type='text' placeholder='last name..' required name='lastName' value={lastName} onChange={handleInputChange}/>

            <input type='date' placeholder='DOB' required name='DOB' value={DOB} onChange={handleInputChange}/>

            <input type='text' placeholder='gender' required name='gender' value={gender} onChange={handleInputChange}/>

            <input type='text' placeholder='state of origin' required name='stateOfOrigin' value={stateOfOrigin} onChange={handleInputChange}/>

            <input type='text' placeholder='local Gov of origin' required name='localGovt' value={localGovt} onChange={handleInputChange}/>

            <input type='number' placeholder='voter identity card num' required name='VIN' value={VIN} onChange={handleInputChange}/>

            <label>Digital Passport:</label>
            <input type="file" name="photo" value={photo} onChange={handleInputChange} accept=".png, .jpg, .jpeg"/>
            
            <button className='--btn --btn-primary --btn-block' type='submit'>Verify</button>
          </form>
        </div>
      </Card>
    </div>
  )
};
export default Kyc;