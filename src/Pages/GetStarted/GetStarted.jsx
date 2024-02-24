import React from "react";
import "./GetStarted.scss";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section>
      <div className="get-started">
        <h1>Get Started</h1>
        <p>
          Welcome to AVOCET! We're excited to have you join our community and
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
            Visit our <Link to="/wallet-connect">connect wallet</Link> page to
            see the list of wallets.
          </code>
        </div>

        <div className="step">
          <h2>2. Explore Our Services</h2>
          <p>
            Take some time to explore the various services and features offered
            by AVOCET. From waste management solutions to resource recovery and
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
            here to help! Reach out to us via email at avocet907@gmail.com
            or visit our Help Center for FAQs and troubleshooting guides.
          </p>
        </div>

        <div className="step">
          <h2>5. Spread the Word</h2>
          <p>
            Help us spread the word about AVOCET and the importance of
            waste recycling initiatives. Follow us on social media, share your
            experiences, and invite others to join our mission!
          </p>
        </div>

        <p>
          Ready to get started? <Link to="/wallet-connect">connect your wallet</Link> and let's make a
          difference together!
        </p>
      </div>
    </section>
  );
};

export default GetStarted;
