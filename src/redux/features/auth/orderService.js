import axios from "axios";

// const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
const BACKEND_URL = 'http://localhost:5000';
export const API_URL = `${BACKEND_URL}/api/order/`;

//   create order
const createOrder = async (orderData) => {
  const response = await axios.post(API_URL + "create", orderData);
  return response.data;
};

//   get order
const getOrder = async () => {
  const response = await axios.get(API_URL + "getOrder");
  return response.data;
};
  
// Verify User
const verifyOrder = async (verificationToken) => {
  const response = await axios.patch(
    `${API_URL}verifyOrder/${verificationToken}`
  );
  return response.data.message;
};

// confirm order
const confirmOrder = async (orderId) => {
  const response = await axios.post(API_URL + "confirmOrder", orderId);
  return response.data;
};


// Get Users
const getOrders = async () => {
  const response = await axios.get(API_URL + "getOrders");

  return response.data;
};


// Delete Order
const deleteOrder = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data.message;
};

// Upgrade Order
const upgradeOrder = async (orderData) => {
  const response = await axios.post(API_URL + "upgradeOrder", orderData);

  return response.data.message;
};

// Update order
const updateOrder = async (orderData) => {
  const response = await axios.patch(API_URL + "updateOrder", orderData);
  return response.data;
};

// fetchNearestCollector
const fetchNearestCollector = async (sellerAddress) => {
  try {
    const response = await axios.get(API_URL + 'nearest-collector', {
      params: { sellerAddress },
    });
    return response.data.nearestCollector;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    } else {
      throw 'Error fetching nearest collector.';
    }
  }
};

const sendEmailToCollector = async() => {
  const response = await axios.post(API_URL + 'sendmailtocollector')
  return response.data.message
}



const orderService = {
    createOrder,
    getOrder,
    getOrders,
    upgradeOrder,
    deleteOrder,
    verifyOrder,
    confirmOrder,
    fetchNearestCollector,
    updateOrder,
    sendEmailToCollector
};

export default orderService;