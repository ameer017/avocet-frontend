import React, {useEffect, useLayoutEffect, useState} from 'react'
import './Profile.scss'
import Card from '../../components/card/Card'
import PageMenu from '../../components/pageMenu/PageMenu';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUser, selectUser, updateUser } from '../../redux/features/auth/authSlice';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedoutUser';
import { toast } from 'react-toastify';

const cloud_name = import.meta.env.VITE_APP_CLOUD_NAME;
const upload_preset = import.meta.env.VITE_APP_UPLOAD_PRESET;

export const shortenText = (text, n) => {
    if (text.length > n) {
      const shoretenedText = text.substring(0, n).concat("...");
      return shoretenedText;
    }
    return text;
};

const UpdateProfile = () => {
    useRedirectLoggedOutUser('/login')
    const dispatch = useDispatch()

    const {isLoading, isLoggedIn, isSuccess, message, user} = useSelector((state) => state.auth)

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
    const [uploadedProfileImage, setUploadedProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);


    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const handleImageChange = (e) => {
        setUploadedProfileImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setProfile({...profile, [name]: value})
    }

    const saveProfile = async (e) => {
        e.preventDefault();

        let imageURL;
        try {
            if(uploadedProfileImage !== null && (
                uploadedProfileImage.type === 'image/jpeg' || 
                uploadedProfileImage.type === 'image/jpg' || 
                uploadedProfileImage.type === 'image/png' 
            )) {
                const image = new FormData()
                image.append('file', uploadedProfileImage)
                image.append('cloud_name', cloud_name)
                image.append('upload_preset', upload_preset)

                // save image to cloudinary

                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/dcb8hrswl/image/upload",
                    {method: 'post', body: image}
                );

                const imgData = await response.json()
                    console.log(imgData)

                imageURL = imgData.url.toString()


            }

            // save profile to mongo DB
            const userData = {
                name: profile.name,
                phone: profile. phone,
                address: profile.address,
                photo: uploadedProfileImage ? imageURL : profile.photo
            }
            dispatch(updateUser(userData))
            
            toast.success("Image Uploaded")
        } catch (error) {
            toast.error(error.message)
        }
      };

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
            <PageMenu/>
            <h2>Update Profile</h2>

            <div className='--flex-start profile'>
                <Card cardClass={'card'}>
                    {!isLoading && user && (

                        <>
                            <div className='profile-photo'>
                                <div>
                                    <img src={imagePreview === null ?  user?.photo : imagePreview} alt='profile'/>
                                    <h3>Role: {profile.role}</h3>    
                                </div>
                            </div>

                            <form onSubmit={saveProfile}>
                                <p>
                                    <label>Change photo</label>
                                    <input type='file' accept='image/*' name='image' onChange={handleImageChange}/>
                                </p>
                                <p>
                                    <label>Name:</label>
                                    <input type='text' name='name' value={profile?.name} onChange={handleInputChange}/>
                                </p>
                                <p>
                                    <label>Email:</label>
                                    <input type='email' name='email' value={profile?.email} onChange={handleInputChange} disabled/>
                                </p>
                                <p>
                                    <label>Phone Num:</label>
                                    <input type='text' name='phone' value={profile?.phone} onChange={handleInputChange}/>
                                </p>
                                <p>
                                    <label>Address:</label>
                                    <input type='text' value={profile?.address} name='address' onChange={handleInputChange} />
                                </p>

                                <button className='--btn --btn-primary --btn-block'>Update Profile</button>
                            </form>
                        </>
                    )}
                </Card>
            </div>
        </div>

    </section>
    </>
  )
};

 export const UserName = () => {
  const user = useSelector(selectUser);

  const userName = user?.name || '...'

  return <p className='--color-white'>Hi { shortenText( userName, 5)} |</p>
}

export default UpdateProfile