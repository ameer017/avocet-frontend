import React, {useState} from 'react'
import './Contact.scss';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

const Contact = (props) => {
    const [emailData, setEmailData] = useState(initialState); 
    const [isValid, setIsValid] = useState(true);

   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
          const transporter = nodemailer
        } catch (error) {
          
        }
    
        // try {
        //     const transporter = nodemailer.createTransport({
        //         host: import.meta.env.EMAIL_HOST,
        //         port: 587,
        //         auth: {
        //           user: import.meta.env.EMAIL_USER,
        //           pass: import.meta.env.EMAIL_PASS,
        //         },
        //         tls: {
        //           rejectUnauthorized: false,
        //         },
        //       });
    
        //   const mailOptions = {
        //     from: `${emailData.email}`, 
        //     to: import.meta.env.EMAIL_USER, 
        //     subject: 'Contact Form Submission',
        //     text: `
        //       Name: ${emailData.firstName} ${emailData.lastName}
        //       Email: ${emailData.email}
        //       Message: ${emailData.message}
        //     `
        //   };
    
        //   await transporter.sendMail(mailOptions);
        //   console.log('Email sent successfully');
        // } catch (error) {
        //   console.error('Error sending email:', error);
        // }
      };


  return (
    <section className='top'>
        <div className='contact container' id='contact'>   

            <div className='left'>
              <h2>Contact Us</h2>

              <h1>Get in touch, let's build Avocet together.</h1>
              <h3>We love to connect with people who believe in our plans to ensure a sustainable atmosphere while improving the environment. 
                Avocet is looking for partners and investors to begin scaling throughout Africa and beyond! </h3>
            </div>

            <div className='text'>

                <form className='--mt' onSubmit={handleFormSubmit}>
                    <div className='gap --mt'>
                        <input type='text' name='firstName' placeholder='first name here ...'
                            onChange={handleInputChange}
                        />

                        <input type='text' name='lastName' placeholder='last name here ...'
                            onChange={handleInputChange}
                        />
                    </div>

                    <input type='email' name='email' placeholder='yourname@email.com' onChange={handleInputChange} className='child-3'
                    />
                    

                    <textarea type='text' name='message' placeholder='your message here' onChange={handleInputChange} rows='8'
                    />

                    <button type='submit' className='--btn --btn-success'>Send Message</button>
                </form>

            </div>

        </div>
    </section>

  )
}

export default Contact