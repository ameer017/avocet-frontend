import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const CollectorInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { collectors, isLoading, isError, isSuccess } = useSelector((state) => state.collector);


  return (
    <section className='container top'>
      <h2>Collectors List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching collectors.</p>
      ) : (
        
          <p className='--mt'>
            {collectors.map((collector) => (
              <>
                Name: {collector.name}<br/>
                Email: {collector.email}<br/>
                Phone: {collector.phone}<br/>
                Address: {collector.address}<br/>
                <button className='--btn --btn-primary' onClick={orderGo}>Create Order</button>
                
                <hr/>
              </>
            ))}
          </p>
        
      )}
    </section>
  );
};

export default CollectorInfo;
