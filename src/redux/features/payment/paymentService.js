import axios from 'axios';

import { API_URL } from "../auth/authService";

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
