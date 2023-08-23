import React from 'react'
import './About.scss'
import avocet from '../../assets/avocet.webp'
import { useNavigate } from 'react-router-dom'

const NewAbout = () => {
    const navigate = useNavigate()

    const handleRegister = () => {
        navigate('/register')
      }

  return (
    <div className='about container top'>
       <h1 className='--mb'>About Us.</h1>

        <section className='--flex-between'>
            <div className='left'>
                <button className='--btn --btn-secondary' disabled>Our Mission</button>

                <p className='--mt'>
                    Our mission is to tackle the <b>global waste crisis head-on and drive positive environmental and social impact.</b> Through our innovative platform, we enable individuals, businesses, and communities to actively participate in the waste management process, empowering them to turn <b>waste into wealth</b>.
                </p>
            </div>

            <div className='img'>
                <img src={avocet}/>
            </div>

        </section>

        <section className='--flex-center'>
            <div className='left'>
                <button className='--btn --btn-secondary' disabled>What are we?</button>

                <p className='--mt'>
                We are the premier web3 waste to wealth platform. We are dedicated to revolutionizing waste management and promoting a circular economy by harnessing the power of blockchain technology and decentralized finance.
                Our platform provides a secure and transparent marketplace where waste materials can be efficiently exchanged, transformed, and repurposed into valuable resources. By connecting waste generators, recyclers, and buyers in a decentralized ecosystem, we create a sustainable and profitable solution for all stakeholders.
                </p>
            </div>
        </section>

        <section className='--flex-center'>
            <div className='left'>
                <button className='--btn --btn-secondary' disabled>Key Features</button>

                <ul className='--mt'>

                    <li>
                        Decentralized Marketplace: Our platform utilizes blockchain technology to establish a secure and transparent marketplace. Waste generators can list their available materials, while recyclers and buyers can browse and purchase these resources directly, eliminating intermediaries and reducing transaction costs.
                    </li>

                    <li>
                        Smart Contracts and Tokenization: We leverage smart contracts to automate and streamline the entire waste management process. Transactions are executed seamlessly, ensuring trust, efficiency, and accuracy. Additionally, we have our native utility token, [Token Name], which provides incentives, rewards, and governance capabilities within the platform.
                    </li>

                    <li>
                        Traceability and Transparency: With blockchain's immutable nature, our platform offers complete traceability of waste materials from their origin to their final destination. This transparency enhances accountability, ensures compliance with regulations, and builds trust among all participants.
                    </li>

                    <li>
                        Data Analytics and Insights: We provide advanced data analytics tools to empower our users with valuable insights into waste generation, recycling rates, and market trends. By leveraging this data, businesses and individuals can make informed decisions to optimize their waste management practices and maximize their profits.
                    </li>

                    <li>
                        Community Collaboration: We believe in the power of collaboration. Our platform fosters a strong community where waste management experts, environmental enthusiasts, and technology enthusiasts come together to share knowledge, exchange ideas, and collaborate on innovative solutions.
                    </li>
                </ul>
            </div>
        </section>

        <div className='last --mt'>
                <p>Join us at AVOCET and become a part of the waste to wealth revolution. <br/> Together, let's build a sustainable future where waste is seen as a valuable resource, and every action contributes to a greener planet.</p>

                <button className='--btn --btn-success' onClick={handleRegister}>Sign Up</button>
            </div> 

    </div>
  )
}

export default NewAbout