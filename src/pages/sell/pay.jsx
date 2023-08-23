import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOrder } from '../../redux/features/auth/orderSlice';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import Card from '../../components/card/Card';
import { initiatePayment, resetPaymentState } from '../../redux/features/payment/paymentSlice';



const PaymentComponent = () => {
  const dispatch = useDispatch()
  const {isLoading, order} = useSelector((state) => state.order)
  const {user} = useSelector((state) => state.auth)
  // const paymentLink = useSelector((state) => state.payment.paymentLink); 
  
  const initialState = {
    name: user?.name || "",
    type: order?.type || "",
    weight: order?.weight || "",
    amount: order?.amount || "",
    phone: order?.phone || "",
    address: order?.address || "",
    email: order?.sellerEmail || "",
  }

  const [formData, setFormData] = useState(initialState);

  const config = {
    public_key: 'FLWPUBK_TEST-491e470d88ecdd5c5e237a79979a758f-X',
    tx_ref: Date.now(),
    amount: order?.amount,
    currency: 'NGN',
    payment_options: 'card, mobilemoney, ussd',
    customer: {
      email: order?.sellerEmail,
      phone_num: order?.phone,
      name: 'Avocet',
    },
    customizations: {
      title: 'Avocet Payment',
      description: 'Payment for plastic sold',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  
    const fwConfig = {
      ...config,
      text: 'Pay with Flutterwave!',
      callback: (response) => {
         console.log(response);
        closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => {},
    };


    useEffect(() => {
      dispatch(getOrder());
      return () => {
        dispatch(initiatePayment())
        dispatch(resetPaymentState()); // Reset payment state when the component unmounts
      };
    }, [dispatch]);

  useLayoutEffect(() => {
    if(order) {
        setFormData({
            ...formData, 
            type: order?.type,
            weight: order?.weight,
            amount: order?.amount,
            phone: order?.phone,
            address: order?.address,
            email: order?.sellerEmail,
        })
    }
  }, [order])

  return (
    <div className='container auth'>
    <Card cardClass={'card'}>
      <p>Type: {order?.type}</p>
      <p>Weight: {order?.weight}kg</p>
      {formData.amount !== '' && <p>Amount: #{formData.amount}</p>}
      <p>Phone Num: {order?.phone}</p>
      <p>Email: {order?.sellerEmail}</p>
      <FlutterWaveButton {...fwConfig} className='--btn --btn-primary' />
      {/* {paymentLink && (
        <a href={paymentLink} target='_blank' rel='noopener noreferrer'>
          Proceed to Payment
        </a>
      )} */}
      {/* {error && <p>Error: {error}</p>} */}
    </Card>
  </div>
  );
};

export default PaymentComponent;
