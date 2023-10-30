import React, { useEffect, useState } from "react";
import "./new.scss";
import Card from "../../components/card/Card";
import { BsCheck2All } from "react-icons/bs";
import { FaHome, FaTimes } from "react-icons/fa";
import { TiUserAddOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RESET, registerCollector } from "../../redux/features/auth/authSlice";
import { validateEmail } from "../../redux/features/auth/authService";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";
import Load from "../../components/load/Load";
const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  password2: "",
  role: "Collector",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, address, role, phone } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [upperCase, setUpperCase] = useState(false);
  const [num, setNum] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    } else {
      return timesIcon;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Password Strength
  useEffect(() => {
    // Check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }

    // Check For Numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // Check For Special char
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSpecialChar(true);
    } else {
      setSpecialChar(false);
    }

    // Check For password length
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !role || !phone) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please, add a valid email");
    }

    const userData = {
      name,
      email,
      address,
      password,
      role,
      phone,
    };
    // console.log(userData)
    await dispatch(registerCollector(userData));
  };

  useEffect(() => {
    if ((isSuccess, isLoggedIn)) {
      navigate("/profile");
    }
    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <div className="container__form">
      {isLoading && <Loading />}

      <div className="form">
        <div className="--flex-center">
          <TiUserAddOutline size={35} color="#999" />
        </div>

        <h2 style={{ textAlign: "center" }}>Register X collector</h2>

        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={name}
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="Address"
            required
            name="address"
            value={address}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="phn-number"
            required
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />

          <input
            type="text"
            required
            name="role"
            value={role}
            onChange={handleInputChange}
            disabled
          />

          <PasswordInput
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          {/* password strength */}
          <Card cardClass="group --mb --mt">
            <ul className="form-list">
              <li>
                <span className="indicator">
                  {switchIcon(upperCase)}
                  &nbsp; Lowercase & upperCase
                </span>
              </li>

              <li>
                <span className="indicator">
                  {switchIcon(num)}
                  &nbsp; Number (0 - 9)
                </span>
              </li>

              <li>
                <span className="indicator">
                  {switchIcon(specialChar)}
                  &nbsp; Special Character (!@#$%^&*-_)
                </span>
              </li>

              <li>
                <span className="indicator">
                  {switchIcon(passLength)}
                  &nbsp; At least 6 characters
                </span>
              </li>
            </ul>
          </Card>

          {isLoading ? 
          <Load />
          : (
            <button className="--btn --btn-success --btn-block" type="submit">
              Register
            </button>
          )}
        </form>

        <span className="flex">
          <Link to="/" className="bg --mt">
            <FaHome size={20} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
