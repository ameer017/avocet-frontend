import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RESET, verifyUser } from "../../redux/features/auth/authSlice";
import Loading from "../../components/loading/Loading";
import Card from "../../components/card/Card";
import './auth.scss'

const Verify = () => {
  const dispatch = useDispatch();
  const { verificationToken } = useParams();

  const { isLoading } = useSelector((state) => state.auth);

  const verifyAccount = async () => {
    await dispatch(verifyUser(verificationToken));
    await dispatch(RESET());
  };

  return (
    <section className="container auth">
      <Card cardClass='--flex-center'>

        {isLoading && <Loading/>}
        <div className="--center-all">
          <h2>Account Verification</h2>
          <small>To verify your account, click the button below. </small>
          <br />
          <button onClick={verifyAccount} className="--btn --btn-primary">
            Verify Account
          </button>
        </div>
      </Card>
    </section>
  );
};

export default Verify;