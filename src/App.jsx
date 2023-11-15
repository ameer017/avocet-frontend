import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ScrollToTop } from 'react-router-scroll-to-top';

import axios from 'axios';
import {
  getLoginStatus,
  getUser,
  selectIsLoggedIn,
  selectUser,
} from './redux/features/auth/authSlice';

import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';
import Reset from './pages/auth/Reset';
import CodedLogin from './pages/auth/CodedLogin';
import Profile from './pages/profile/Profile';
import Verify from './pages/auth/Verify';
import Collector from './pages/auth/Collector';
import ChangePassword from './pages/changePassword/ChangePassword';
import UserList from './pages/userList/UserList';
import Order from './pages/order/Order';
import NewAbout from './pages/About/NewAbout';
import Contact from './pages/Contact/Contact';
import Faqs from './pages/Faqs/Faqs';
import Sell from './pages/sell/Sell';
import Terms from './components/terms/Terms';
import Privacy from './components/terms/Privacy';
import PaymentRequestComponent from './pages/sell/pay';
import Success from './pages/success/Success';
import PaymentList from './pages/userList/PaymentList';
import OrderCreationSuccessPage from './pages/success/OrderCreationSuccessPage';
import UpdateProfile from './pages/profile/UpdateProfile';
import Error from './pages/success/Error';
import GetStarted from './pages/GetStarted/GetStarted';

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <>
      <Router>
        <ScrollToTop />
        <ToastContainer />
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/collector" element={<Collector />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/success" element={<Success />} />
              <Route path="/error" element={<Error />} />
              <Route
                path="/order-creation-success"
                element={<OrderCreationSuccessPage />}
              />
              <Route path="/resetPassword/:resetToken" element={<Reset />} />
              <Route path="/loginWithCode/:email" element={<CodedLogin />} />
              <Route
                path="/verify/:verificationToken"
                element={
                  <Layout>
                    <Verify />
                  </Layout>
                }
              />
              <Route
                path="/profile"
                element={
                  <Layout>
                    <Profile />
                  </Layout>
                }
              />
              <Route
                path="/get-started"
                element={
                  <Layout>
                    <GetStarted />
                  </Layout>
                }
              />
              <Route
                path="/updateProfile"
                element={
                  <Layout>
                    <UpdateProfile />
                  </Layout>
                }
              />
              <Route path="/sell" element={ <Sell />} />
              <Route
                path="/pay"
                element={
                  <Layout>
                    <PaymentRequestComponent />
                  </Layout>
                }
              />
              <Route
                path="/changePassword"
                element={
                  <Layout>
                    <ChangePassword />
                  </Layout>
                }
              />
              <Route
                path="/users"
                element={
                  <Layout>
                    <UserList />
                  </Layout>
                }
              />
              <Route
                path="/payment"
                element={
                  <Layout>
                    <PaymentList />
                  </Layout>
                }
              />
              <Route
                path="/about"
                element={
                  <Layout>
                    <NewAbout />
                  </Layout>
                }
              />
              <Route
                path="/contact"
                element={
                  <Layout>
                    <Contact />
                  </Layout>
                }
              />
              <Route
                path="/faq"
                element={
                  <Layout>
                    <Faqs />
                  </Layout>
                }
              />
              <Route
                path="/terms"
                element={
                  <Layout>
                    <Terms />
                  </Layout>
                }
              />
              <Route
                path="/privacy"
                element={
                  <Layout>
                    <Privacy />
                  </Layout>
                }
              />
              <Route
                path="/order"
                element={
                  <Layout>
                    <Order />
                  </Layout>
                }
              />
            </Routes>
        </GoogleOAuthProvider>
      </Router>
    </>
  );
}

export default App;
