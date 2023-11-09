import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestPayment, upgradePayment } from "../../redux/features/payment/paymentSlice";
import Card from "../../components/card/Card";
import Load from "../../components/load/Load";
import Error from "../success/Error";
import Success from "../success/Success";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  amount: "",
  bank: "",
  account: "",
};

const PaymentRequestComponent = () => {
  const [paymentData, setPaymentData] = useState(initialState);
  const { name, email, amount, bank, account } = paymentData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isLoading, isError, payment } = useSelector((state) => state.payment);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handlePaymentRequest = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!name || !email || !amount || !bank || !account) {
      return toast.error("All fields are required");
      
    }

    const requestData = { name, email, amount, bank, account };

    console.log(requestData);
    await dispatch(requestPayment(requestData));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/success");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      navigate("/error");
    }
  }, [isError, navigate]);

  useEffect(() => {
    if (isError) {
      dispatch({ type: 'payment/requestPayment/rejected', payload: "Please fill in all the required fields." });
      navigate('/error');
      return;

    }
  }, [isError, dispatch, navigate]);

  return (
    <section className="container auth top">
      <Card>
        <div className="form">
          <form onSubmit={handlePaymentRequest}>
            <h2>Payment Processing Page.</h2>
            <hr />

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
              className="--mb"
            />

            {loading ? (
              <Load />
            ) : (
              <button
                className="--btn --btn-success --btn-block"
                disabled={isLoading}
              >
                {loading ? <div className="loaded"></div> : "Process Payment"}
              </button>
            )}
          </form>
        </div>
      </Card>
    </section>
  );
};

export default PaymentRequestComponent;
