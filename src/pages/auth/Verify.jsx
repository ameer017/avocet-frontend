import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RESET, verifyUser } from "../../redux/features/auth/authSlice";
import Loading from "../../components/loading/Loading";
import "./new.scss";
import Load from "../../components/load/Load";

const Verify = () => {
  const dispatch = useDispatch();
  const { verificationToken } = useParams();

  const { isLoading } = useSelector((state) => state.auth);

  const verifyAccount = async () => {
    await dispatch(verifyUser(verificationToken));
    await dispatch(RESET());
  };

  return (
    <section className="container__form">
      <div className="--center-all">
        <h2>Account Verification</h2>
        <small>To verify your account, click the button below. </small>
        <br />
        {isLoading ? (
          <Load />
        ) : (
          <button onClick={verifyAccount} className="--btn --btn-primary">
            Verify Account
          </button>
        )}
      </div>
    </section>
  );
};

export default Verify;
