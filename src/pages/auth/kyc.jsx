import React from "react";
import useIdentityPayKYC from "react-identity-kyc";

const Kyc = () => {
  const config = {
    config_id: "e53tewlyh38rouhkj",
    first_name: "Lanre",
    last_name: "Adelowo",
    email: "rajiabdullahi907@gmail.com",
    merchant_key: "7b4cr0s94n3v1242g9m2:dyLuWLgXZ65QDZyowaUY3KMOJzI",
    user_ref: "fhbfiuhffhufhff",
    is_test: true, //set this to through for a test
    callback: (response) => console.log(response)
  };
  const verifyWithIdentity = useIdentityPayKYC(config);

  return <button onClick={verifyWithIdentity}>Click to Test</button>;
};
export default Kyc;