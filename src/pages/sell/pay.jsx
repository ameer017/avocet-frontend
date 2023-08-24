import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { requestPayment } from '../../redux/features/payment/paymentSlice'
import Card from '../../components/card/Card'
import { getOrder } from '../../redux/features/auth/orderSlice'

  const initialState = {
    name: '', 
    email: '', 
    amount: ''
  }
const PaymentRequestComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const {loading, error, paymentRequestStatus, success} = useSelector((state) => state.payment);
  const {order} = useSelector((state) => state.order);
  
  const [formData, setFormData] = useState(initialState)
  const {name, email, amount} = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
  };
  

  const handlePaymentRequest = async (e) => {
    e.preventDefault();

    const requestData = {
      reference: `payment-${Date.now()}`,
      destination: {
        type: 'mobile_money',
        amount,
        currency: 'NGN',
        narration: 'Test Transfer Payment',
        mobile_money: {
          operator: 'eTranzact-ng',
          mobile_number: '2348142793892',
        },
        customer: {
          name,
          email,
        },
      },
    }
    console.log(requestData)
    await dispatch(requestPayment(requestData))  
  }

  useEffect(() => {
    if(success) {
      navigate('/profile')
    }
    dispatch(getOrder())
  }, [dispatch])

  return (
    <section className='top'>
      <div className='container'>
        <div>
          <h2>Payment Request Page.</h2>

          <div className='profile --mt'>
            <Card cardClass={'card'}>
              <form onSubmit={handlePaymentRequest}>
                <p>
                  <label>name:</label>
                  <input type='text' name='name' value={name} onChange={handleInputChange} placeholder='alim sanchez'/>
                </p>
                <p>
                  <label>email:</label>
                  <input type='email' name='email' value={order?.sellerEmail} onChange={handleInputChange} placeholder=''/>
                </p>
                <p>
                  <label>amount (#):</label>
                  <input type='text' name='amount' value={order?.amount} onChange={handleInputChange} placeholder='amount to be paid'/>
                </p>

                <button className='--btn --btn-success --btn-block' disabled={loading}>
                  {loading ? 'Requesting Payment...' : 'Request Payment'}
                </button>
                {paymentRequestStatus && <p>Payment requested successfully!</p>}
                {error && <p>Error requesting payment: {error.message}</p>}
              </form>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentRequestComponent