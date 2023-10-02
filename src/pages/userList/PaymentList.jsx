import React, { useEffect, useState } from 'react'
import './UserList.scss'
import PageMenu from '../../components/pageMenu/PageMenu'
import { useSelector } from 'react-redux'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedoutUser'
import { useDispatch } from 'react-redux'
import { getPaymentDetails } from '../../redux/features/payment/paymentSlice'
import { shortenText } from '../profile/Profile';


const PaymentList = () => {
    useRedirectLoggedOutUser('/login')
    const dispatch = useDispatch()

    const {payment, payments, loading, succes, error} = useSelector((state) => state.payment)


    useEffect(() => {
        dispatch(getPaymentDetails())

    }, [dispatch]);


  return (
    <section className='top'>
        <div className='container'>
            <PageMenu/>

            <div className='user-list'>
                <div className='table'>

                    <div className='--flex-between'>
                        <span>
                            <h3>Payment Information.</h3>
                        </span>
                    </div>

                        {!loading && payments?.length === 0 ? 
                        (
                            <p>No Payment Found 😱</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>s/n</th>
                                        <th>Transaction ID</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Narration</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {payments?.map((data, index) => {

                                        const {_id, name, amount, referenceId, narration, type} = data;

                                        return (

                                            <tr key={_id}>
                                                <td>{index + 1}</td>
                                                <td>{referenceId}</td>
                                                <td>{name}</td>
                                                <td>#{amount}</td>
                                                <td>{narration}</td>
                                                <td>{shortenText(type, 8)}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                         )}
                </div>
            </div>


        </div>
    </section>
  )
}

export default PaymentList