import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RESET, contact } from "../../redux/features/auth/authSlice";
import "../../pages/auth/new.scss";
import Load from "../../components/load/Load";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email, message } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      return toast.error("All fields are required");
    }

    const userData = {
      firstName,
      email,
      lastName,
      message,
    };
    console.log(userData);
    await dispatch(contact(userData));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <section className="top">
      <div className="contact container" id="contact">
        <div className="left">
          <h2>Contact Us</h2>

          <h1>Get in touch, let's build Avocet together.</h1>
          <h3>
            We love to connect with people who believe in our plans to ensure a
            sustainable atmosphere while improving the environment. Avocet is
            looking for partners and investors to begin scaling throughout
            Africa and beyond!{" "}
          </h3>
        </div>

        <div className="text">
          <form className="--mt" onSubmit={handleFormSubmit}>
            <div className="gap --mt">
              <input
                type="text"
                name="firstName"
                placeholder="first name here ..."
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="last name here ..."
                onChange={handleInputChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="yourname@email.com"
              onChange={handleInputChange}
              className="child-3"
            />

            <textarea
              type="text"
              name="message"
              placeholder="your message here"
              onChange={handleInputChange}
              rows="8"
            />

            {isLoading ? (
              <Load />
            ) : (
              <button type="submit" className="--btn --btn-success">
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
