import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import PageMenu from '../../components/pageMenu/PageMenu';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RESET, createOrder } from '../../redux/features/auth/orderSlice';
import { toast } from 'react-toastify';
import { fetchCollectorsAsync } from '../../redux/features/auth/collectorService';

const initialState = {
  type: '',
  weight: '',
  amount: '',
  phone: '',
  address: '',
  sellerEmail: '',
  account_num: '', 
  bank: ''
};

const Sell = () => {
  const { isLoading, isSuccess, orders} = useSelector((state) => state.order);
  const { collectors, isError } = useSelector((state) => state.collector);
  
  const countCollectorOrders = (orders) => {
    const collectorOrdersCount = {};

    orders.forEach((order) => {
      const { collectorId, status } = order;

      if (status === 'processed') {
        collectorOrdersCount[collectorId] = (collectorOrdersCount[collectorId] || 0) + 2;
      }
    });

    return collectorOrdersCount;
  };

  const collectorOrdersCount = countCollectorOrders(orders);

  const sortedCollectors = collectors.slice().sort((a, b) => {
    const ordersA = collectorOrdersCount[a.id] || 0;
    const ordersB = collectorOrdersCount[b.id] || 0;

    return ordersB - ordersA;
  });


  const [formData, setFormData] = useState(initialState);
  const [customType, setCustomType] = useState('');
  const [showAccountFields, setShowAccountFields] = useState(false);

  const { type, weight, amount, phone, address, sellerEmail, account_num, bank } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateAmount = (value) => {
    if (value === '') {
      return '';
    } else {
      const parsedWeight = parseInt(value, 10);
      const updatedAmount = parsedWeight === 1 ? 150 : 150 * parsedWeight;
      return updatedAmount.toString();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'address') {
      if (value === '') {
        setShowAccountFields(false); 
      } else {
        setShowAccountFields(true); 
      }
    }
  
    if (name === 'weight') {
      setFormData({ ...formData, [name]: value, amount: calculateAmount(value) });
    } else if (name === 'type' && value === 'Others') {
      setCustomType('');
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
      bank
    };
    
    
    await dispatch(createOrder(orderData));  
  };
  
  const fetchData = async (e) => {
    e.preventDefault()
    if (!type || !weight || !amount || !phone) {
      return toast.error('All fields are required');
    }

    if (parseFloat(weight) < 1) {
      return toast.error('Weight must be at least 1');
    }
    await dispatch(fetchCollectorsAsync());
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/profile');
    }
    dispatch(RESET());
  }, [isSuccess, dispatch, navigate]);

  return (
    <>
      <section className='top'>
        <div className='container'>
          <PageMenu />
          
          <div>
            <h2>Sell</h2>

            <div className='--flex-start profile'>
              

              <Card cardClass={'card'}>
                <form onSubmit={fetchData}>
                <p>
                  <label>Specify type:</label>
                  <select name='type' value={type} onChange={handleInputChange}>
                    <option value=''>-- Select --</option>
                    <option value='plastic bottle'>plastic bottle</option>
                    {/* <option value='Mr V'>Mr V</option> */}
                    <option value='Others'>Others</option>
                  </select>
                </p>

                {/* Render the input field if customType has a value */}
                {type === 'Others' && (
                    <p>
                      <label>Other Type:</label>
                      <input
                        type='text'
                        name='customType'
                        value={customType}
                        onChange={(e) => setCustomType(e.target.value)}
                        placeholder='Enter custom type'
                      />
                    </p>
                  )}

                  <p>
                    <label>Weight (kg):</label>
                    <input type='text' name='weight' value={weight} onChange={handleInputChange} placeholder='1kg = #150' />
                  </p>

                  {formData.amount !== '' && (
                    <p>
                      Amount: #{formData.amount} 
                    </p>
                  )}

                  <p>
                    <label>Phone Num:</label>
                    <input type='text' name='phone' value={phone} onChange={handleInputChange} placeholder='081000000000' />
                  </p>

                  <p>
                    <label>Email:</label>
                    <input type='text' name='sellerEmail' value={sellerEmail} onChange={handleInputChange} placeholder='yourname@gmail.com' />
                  </p>

                  <p>
                    <label>Address:</label>
                    <input type='text' name='address' value={address} onChange={handleInputChange}/>
                  </p>

                  {showAccountFields && (
                    <>
                      <p>
                        <label>Account Number:</label>
                        <input type='text' name='account_num' value={account_num} onChange={handleInputChange} />
                      </p>

                      <p>
                        <label>Bank:</label>
                        <input type='text' name='bank' value={bank} onChange={handleInputChange} />
                      </p>
                    </>
                  )}

                  <button className='--btn --btn-success --btn-block'>Fetch Collectors</button>
                </form>
              </Card>

            </div>
          </div>

          <div className='profile top'>
              <Card cardClass={'card'}>
                <h3>Collectors</h3>    
                <hr/>
                {isLoading ? (
                  <p>Loading...</p>
                ) : isError ? (
                  <p>Error fetching collectors.</p>
                ) : (
                      <div>
                        {sortedCollectors.map((collector) => (
                          <div key={collector.id}>
                            <p>
                              Name: {collector.name}
                            </p>
                            <p>
                              Email: {collector.email}
                            </p>
                            <p>
                              Phone: {collector.phone}
                            </p>
                            <p>
                              Address: {collector.address}
                            </p>
                            <p>
                              {/* Orders Processed: {collectorOrdersCount[collector.id] || 0} */}
                            </p>
                            <button className='--btn --btn-primary' onClick={orderGo}>Create Order</button>
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
