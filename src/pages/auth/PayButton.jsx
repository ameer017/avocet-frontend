import axios from "axios";
import { useSelector } from "react-redux";
const BACKEND_URL = 'http://localhost:5000';

const PayButton = ({ order }) => {
  const user = useSelector((state) => state.auth);

  const handleCheckout = (e) => {
    e.preventDefault()
    axios
      .post(`${BACKEND_URL}/stripe/pay`, {
        order,
        userId: user._id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()} className="--btn --btn-success">Complete Payment</button>
    </>
  );
};

export default PayButton;