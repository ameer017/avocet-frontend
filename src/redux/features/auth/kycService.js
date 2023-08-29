import axios from "axios";

const BACKEND_URL = 'http://localhost:5000';
export const API_URL = `${BACKEND_URL}/api/verify/`;

const createKyc = async(kycData) => {
    const response = await axios.post(API_URL + 'kyc-verification', kycData)
    return response.data
}

const kycService = {
    createKyc
}

export default kycService