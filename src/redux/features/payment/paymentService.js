import axios from 'axios';


const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
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

const paymentService = {
  requestPayment
};

export default paymentService;
