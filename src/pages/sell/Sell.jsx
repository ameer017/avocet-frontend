import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RESET, createOrder } from "../../redux/features/auth/orderSlice";
import { toast } from "react-toastify";
import { fetchCollectorsAsync } from "../../redux/features/auth/collectorService";
import "./sell.scss";
import Card from "../../components/card/Card";
import Load from "../../components/load/Load";

const initialState = {
  type: "",
  weight: "",
  amount: "",
  phone: "",
  address: "",
  sellerEmail: "",
  account_num: "",
  bank: "",
};

const Sell = () => {
  const { isLoading, isSuccess, orders } = useSelector((state) => state.order);
  const { loading, collectors, isError } = useSelector(
    (state) => state.collector
  );
  const [isCardVisible, setIsCardVisible] = useState(false);

  const [formData, setFormData] = useState(initialState);
  const [customType, setCustomType] = useState("");
  const [showAccountFields, setShowAccountFields] = useState(false);

  const {
    type,
    weight,
    amount,
    phone,
    address,
    sellerEmail,
    account_num,
    bank,
  } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateAmount = (value) => {
    if (value === "") {
      return "";
    } else {
      const parsedWeight = parseInt(value, 10);
      const updatedAmount = parsedWeight === 1 ? 150 : 150 * parsedWeight;
      return updatedAmount.toString();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "address") {
      if (value === "") {
        setShowAccountFields(false);
      } else {
        setShowAccountFields(true);
      }
    }

    if (name === "weight") {
      setFormData({
        ...formData,
        [name]: value,
        amount: calculateAmount(value),
      });
    } else if (name === "type" && value === "Others") {
      setCustomType("");
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const orderGo = async (e) => {
    e.preventDefault();

    const orderData = {
      type,
      weight,
      amount,
      phone,
      address,
      sellerEmail,
      account_num,
      bank,
    };

    await dispatch(createOrder(orderData));
  };

  const fetchData = async (e) => {
    e.preventDefault();
    if (!type || !weight || !amount || !phone) {
      return toast.error("All fields are required");
    }

    if (parseFloat(weight) < 1) {
      return toast.error("Weight must be at least 1");
    }
    await dispatch(fetchCollectorsAsync());

    setIsCardVisible(true);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/order-creation-success");
    }
    dispatch(RESET());
  }, [isSuccess, dispatch, navigate]);

  return (
    <>
      <section className="top ">
        <div className="">
          <div>
            <div className="form-container">
              <p className="title">Sell Plastic.</p>
              <form onSubmit={fetchData}>
                <p>
                  <label>Specify type:</label>
                  <input
                    type="text"
                    name="type"
                    value={type}
                    onChange={handleInputChange}
                    placeholder="e.g 75cl bottle"
                  />
                </p>

                <p>
                  <label>Weight (kg):</label>
                  <input
                    type="text"
                    name="weight"
                    value={weight}
                    onChange={handleInputChange}
                    placeholder="1kg = #150"
                  />
                </p>

                {formData.amount !== "" && <p>Amount: #{formData.amount}</p>}

                <p>
                  <label>Phone Num:</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    placeholder="081000000000"
                  />
                </p>

                <p>
                  <label>Email:</label>
                  <input
                    type="text"
                    name="sellerEmail"
                    value={sellerEmail}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                  />
                </p>

                <p>
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={handleInputChange}
                    placeholder="No 3, Ibadan Street Ebute Metta, Lagos"
                  />
                </p>

                {showAccountFields && (
                  <>
                    <p>
                      <label>Account Number:</label>
                      <input
                        type="text"
                        name="account_num"
                        value={account_num}
                        onChange={handleInputChange}
                      />
                    </p>

                    <p>
                      <label>Bank:</label>
                      <input
                        type="text"
                        name="bank"
                        value={bank}
                        onChange={handleInputChange}
                      />
                    </p>
                  </>
                )}

                {loading ? (
                  <Load />
                ) : (
                  <button className="--btn --btn-success --btn-block">
                    Fetch Collectors
                  </button>
                )}

                <Link to="/" className="--flex-center --mt">
                  Home
                </Link>
              </form>
            </div>
          </div>

          <div
            className={`profile top ${
              isCardVisible ? "card-visible" : "card-hidden"
            }`}
          >
            <Card cardClass={"card"}>
              <h3>Collectors</h3>
              <hr />
              {isLoading ? (
                <p>Loading...</p>
              ) : isError ? (
                <p>Error fetching collectors.</p>
              ) : (
                <div>
                  {collectors.map((collector) => (
                    <div key={collector.id}>
                      <p>Name: {collector.name}</p>
                      <p>Email: {collector.email}</p>
                      <p>Phone: {collector.phone}</p>
                      <p>Address: {collector.address}</p>

                      {isLoading ? (
                        <Load />
                      ) : (
                        <button
                          className="--btn --btn-primary"
                          onClick={orderGo}
                        >
                          Create Order
                        </button>
                      )}
                      <hr />
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sell;
