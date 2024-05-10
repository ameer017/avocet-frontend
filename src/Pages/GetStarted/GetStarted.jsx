import React, { useState } from "react";
import "./GetStarted.scss";
import { Link } from "react-router-dom";
import Faq from "./Faq";

const GetStarted = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <section>
      <div className="get-started">
        <h1>Get Started</h1>
        <p>
          Welcome to EarthFi! We're excited to have you join our community and
          start your journey towards a more sustainable future. Follow the steps
          below to get started:
        </p>

        <hr style={{ margin: "10px 0" }} />

        <div className="step">
          <h2>1. Connect Your Digital Wallet</h2>
          <p>
            To participate in on-chain transactions and access certain premium
            features, you'll need to connect your digital wallet to your
            account. Don't have a digital wallet yet? No problem! You can easily
            create one using popular wallet providers like MetaMask or Trust
            Wallet.
          </p>
          <code>
            Click on connect wallet button to connect to your metamask wallet
          </code>
        </div>

        <div className="step">
          <h2>2. Explore Our Services</h2>
          <p>
            Take some time to explore the various services and features offered
            by EarthFi. From waste management solutions to resource recovery and
            community engagement initiatives, there's something for everyone!
          </p>
        </div>

        <div className="step">
          <h2>3. Join Our Community</h2>
          <p>
            Connect with like-minded individuals, businesses, and organizations
            in our vibrant community dedicated to sustainability and waste
            reduction. Share your ideas, collaborate on projects, and be part of
            the change!
          </p>
        </div>

        <div className="step">
          <h2>4. Get Support</h2>
          <p>
            Have questions or need assistance? Our dedicated support team is
            here to help! Reach out to us via email at team@earthfi.xyz or
            visit our Help Center for FAQs and troubleshooting guides.
          </p>
        </div>

        <div className="step">
          <h2>5. Spread the Word</h2>
          <p>
            Help us spread the word about EarthFi and the importance of waste
            recycling initiatives. Follow us on social media, share your
            experiences, and invite others to join our mission!
          </p>
        </div>

        <div className="faq-section">
          <Faq/>
        </div>

        <p style={{marginTop: '8rem'}}>
          Ready to get started? Connect your wallet and let's make a difference
          together!
        </p>
      </div>
    </section>
  );
};

export default GetStarted;
