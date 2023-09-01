import React, {useEffect, useLayoutEffect, useState} from 'react'
import './Profile.scss'
import Card from '../../components/card/Card'
import PageMenu from '../../components/pageMenu/PageMenu';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUser, selectUser, setStripeAccountId, updateUser } from '../../redux/features/auth/authSlice';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedoutUser';
import Notification from '../../components/notification/Notification';
import { AdminAuthorLink, SellerLink, ShowOnLogin } from '../../components/protect/hiddenLink';
import { UserName } from './UpdateProfile';

const cloud_name = import.meta.env.VITE_APP_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_APP_UPLOAD_PRESET;

export const shortenText = (text, n) => {
    if (text.length > n) {
      const shoretenedText = text.substring(0, n).concat("...");
      return shoretenedText;
    }
    return text;
  };

const Profile = () => {
    useRedirectLoggedOutUser('/login')
    const dispatch = useDispatch()

    const {isLoading, user, totalAmountBySeller} = useSelector((state) => state.auth)

    const initialState = {
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        address: user?.address || "",
        photo: user?.photo || "",
        role: user?.role || "",
        isVerified: user?.isVerified || false,
      };

    const [profile, setProfile] = useState(initialState)
    const [imagePreview, setImagePreview] = useState(null)

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])


      useLayoutEffect(() => {
        if(user) {
            setProfile({
                ...profile, 
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                photo: user.photo,
                role: user.role,
                isVerified: user.isVerified,
            })
        }
      }, [user])

  return (
    <>
    <section className='top'>
        <div className='container'>
            {/* {isLoading && <Loader/>} */}
            {!profile.isVerified && <Notification />}
            <PageMenu/>
            <h2>Profile</h2>

                <ShowOnLogin>
                    <h4 className='--flex-start'>
                        Hi! {profile?.name}
                    </h4>
                    <p>Let's save the world together</p>
                </ShowOnLogin>

            <div className='--flex-start profile'>
                <Card cardClass={'card'}>
                    {!isLoading && user && (

                        <>
                            <div className='profile-photo'>
                                <div>
                                    <img src={imagePreview === null ?  user?.photo : imagePreview} alt='profile'/>

                                    <h3 className='--mt'>Role: {profile.role}</h3>    
                                </div>
                            </div>

                            <section>
                                <hr/>
                                <p className='--mt'>
                                    Name: {profile?.name}
                                </p>
                                <hr/>
                                <p className='--mt'>
                                    Email: {profile?.email}
                                </p>
                                <AdminAuthorLink>
                                    <hr/>
                                    <p className='--mt'>
                                        Telephone: {profile?.phone}
                                    </p>
                                </AdminAuthorLink>
                                <hr/>
                                <p className='--mt'>
                                    Address: {profile?.address}
                                </p>
                                <SellerLink>
                                {/* <hr/>
                                {user.role === 'Seller' && (
                                    <p>Total Amount Earned: {totalAmountBySeller[user._id]}</p>
                                )} */}
                                {/* <hr/>
                                <p className='--mt'>
                                    Bank Name: {profile?.bank}
                                </p>
                                <hr/>
                                <p className='--mt'>
                                    Account Number: {profile?.account_Num}
                                </p> */}
                                </SellerLink>
                            </section>

                        </>
                    )}
                </Card>
            </div>
        </div>

    </section>
    </>
  )
};

 

export default Profile