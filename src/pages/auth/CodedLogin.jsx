import React, { useEffect, useState } from "react";
import "./new.scss";
import { GrInsecure } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  RESET,
  loginWithCode,
  sendLoginCode,
} from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";
import Load from "../../components/load/Load";

const CodedLogin = () => {
  const [loginCode, setLoginCode] = useState("");
  const { email } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const sendUserLoginCode = async () => {
    await dispatch(sendLoginCode(email));
    await dispatch(RESET());
  };

  const loginUserWithCode = async (e) => {
    e.preventDefault();

    if (loginCode === "") {
      return toast.error("Please fill in the login code");
    }
    if (loginCode.length !== 6) {
      return toast.error("Access code must be 6 characters");
    }

    const code = {
      loginCode,
    };

    await dispatch(loginWithCode({ code, email }));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/profile");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <div className="container__form">
      {isLoading && <Loading />}

      <div className="form">
        <div className="--flex-center">
          <GrInsecure size={35} color="#999" />
        </div>

        <h2>Enter Access Code</h2>

        <form onSubmit={loginUserWithCode}>
          <input
            type="text"
            placeholder="Access Code"
            required
            name="loginCode"
            value={loginCode}
            onChange={(e) => setLoginCode(e.target.value)}
          />

          {isLoading ? (
            <Load />
          ) : (
            <button
              className="--btn --btn-primary --btn-block --mt"
              type="submit"
            >
              Proceed To Login
            </button>
          )}
          <span className="--flex-center">
            check your email for login access
          </span>

          <div className="links">
            <p>
              <Link to="/">Home</Link>
            </p>

            <p onClick={sendUserLoginCode} className="v-link --color-primary">
              <b>Resend Code</b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CodedLogin;
