import axios from 'axios';


const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
// const BACKEND_URL = 'http://localhost:5000';
export const API_URL = `${BACKEND_URL}/api/payment/`;

const requestPayment = async (requestData) => {
  try {
    const response = await axios.post(API_URL + 'initiatePayment', requestData);
    return response.data;
  } catch (error) {
    console.error('Error initiating payment:', error.message);
    throw error;
  }
};

const getPaymentDetails = async () => {
  const response = await axios.get(API_URL + "get-payments");

  return response.data;
};

const upgradePayment = async (requestData) => {
  const response = await axios.post(API_URL + 'upgrade-payment', requestData)

  return response.data.message;
}

const paymentService = {
  requestPayment,
  getPaymentDetails,
  upgradePayment
};

export default paymentService;
