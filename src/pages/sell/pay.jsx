import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestPayment } from '../../redux/features/payment/paymentSlice';
import Card from '../../components/card/Card';
const initialState = {
  name:  '',
  email:  '',
  amount: '',
  bank: '',
  account: ''
}
import './Pay.css'


const PaymentRequestComponent = () => {
  const [paymentData, setPaymentData] = useState(initialState);
  const {name, email, amount, bank, account} = paymentData;
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {success, payment} = useSelector((state) => state.payment)

  const handleInputChange = async (e) => {
    const {name, value} = e.target
    setPaymentData({...paymentData, [name]: value})
  }


  const handlePaymentRequest = async (e) => {
    e.preventDefault();
    const requestData = {name, email, amount, bank, account} 
  
    console.log(requestData)
    await dispatch(requestPayment(requestData));

      setTimeout(() => {
        navigate('/success');
      }, 10000);
  };
  

  useEffect(() =>
    {
       if(payment && success ) {
          navigate('/success')
        }
    }, [success, navigate])
    

  return (
    <section className='container auth top'>
      <Card>
        <div className='form'>
          <form onSubmit={handlePaymentRequest}>
          <h2>Payment Request Page.</h2>
            <hr/>

            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email"
            />

            <input
              type="text"
              name="amount"
              value={amount}
              onChange={handleInputChange}
              placeholder="Amount"
            />

            <input
              type="text"
              name="bank"
              value={bank}
              onChange={handleInputChange}
              placeholder="Bank Code"
            />

            <input
              type="text"
              name="account"
              value={account}
              onChange={handleInputChange}
              placeholder="Account Number"
            />

              <button className='--btn --btn-success --btn-block' disabled={success}>
                  {success ? <div className="loaded"></div> : 'Request Payment'}
                </button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default PaymentRequestComponent;
