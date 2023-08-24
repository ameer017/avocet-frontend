import axios from 'axios';
const KORAPAY_SECRET_KEY = 'sk_test_ZCET4wATw3msqjyL9snbP8PAKbSr5auo5EYmfAWn';
const BACKEND_URL = 'http://localhost:5000';
export const API_URL = `${BACKEND_URL}/api/payment/`;

const requestPayment = async (requestData) =>  {

  try {
    const data = {
      reference: `payment-${Date.now()}`,
      destination: {
        type: 'bank_account',
        amount,
        currency: 'NGN',
      },
    };

    // Make the API request and handle success/failure
    const url = `${API_URL}request-payment`
    const response = await axios.post(url , requestData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KORAPAY_SECRET_KEY}`,
      },
    });
    return response.data

  } catch (error) {
    console.error('Error initiating payment:', error.message);
    throw error;
  }
};

const paymentService = {
    requestPayment
}

export default paymentService