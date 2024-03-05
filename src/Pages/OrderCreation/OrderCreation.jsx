import React, { useState } from 'react';
import "./OrderCreation.scss"

const OrderCreation = () => {
    const [formData, setFormData] = useState({
        title: '',
        weight: '',
        location: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <section>
          <div className='form-box'>
          <div className="form-container">
                <h2>Enter Item Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder='Input your Title' />
                    </div>
                    <div className="form-group">
                        <label>Weight</label>
                        <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder='KG' />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder='Input Your locattion' />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="text" name="amount" value={formData.amount} onChange={handleChange} placeholder='Enter your amount' />
                    </div>
                    <button type="create" className='--btn --btn-success --btn-block'>Create</button>
                </form>
            </div>
          </div>
        </section>
    );
};

export default OrderCreation;
