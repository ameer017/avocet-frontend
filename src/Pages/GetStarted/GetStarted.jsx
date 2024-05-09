import React, { useState } from "react";
import "./GetStarted.scss";
import { Link } from "react-router-dom";

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
            here to help! Reach out to us via email at avocet907@gmail.com or
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
          <h2>FAQs</h2>
          <div className="faq-item">
            <button
              className={`accordion ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => toggleAccordion(0)}
            >
              What is EarthFi?
            </button>
            <div className={`panel ${activeIndex === 0 ? "show" : ""}`}>
              <p>
              EarthFi is a cutting-edge platform that connects individuals,
                businesses, and organizations to innovative waste management
                solutions. Our platform aims to transform waste into valuable
                resources, promoting environmental sustainability and economic
                growth.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button
              className={`accordion ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => toggleAccordion(1)}
            >
              How does EarthFi work?
            </button>
            <div className={`panel ${activeIndex === 1 ? "show" : ""}`}>
              <p>
              EarthFi offers a range of services and technologies designed to
                optimize waste management processes. Users can access features
                such as waste collection, recycling programs, resource recovery
                initiatives, and community engagement projects. By leveraging
                technology and collaboration, we facilitate the conversion of
                waste materials into useful products and services.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button
              className={`accordion ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => toggleAccordion(2)}
            >
              Is EarthFi available in my area?
            </button>
            <div className={`panel ${activeIndex === 2 ? "show" : ""}`}>
              <p>
              EarthFi strives to expand its reach and impact globally. While
                our services may not be available in every location at the
                moment, we are continuously working to broaden our network and
                establish partnerships with local communities and organizations.
                Stay updated with our latest developments to see when we'll be
                coming to your area!
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button
              className={`accordion ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => toggleAccordion(3)}
            >
              What measures does EarthFi take to ensure environmental
              responsibility?
            </button>
            <div className={`panel ${activeIndex === 3 ? "show" : ""}`}>
              <p>
                Environmental responsibility is a core value of EarthFi. We
                adhere to strict environmental standards and regulations in all
                our operations and collaborate with certified recycling
                facilities and waste management partners. Additionally, we
                prioritize sustainability in product design, supply chain
                management, and resource utilization, aiming to minimize
                environmental impact at every stage of the waste management
                process.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button
              className={`accordion ${activeIndex === 4 ? "active" : ""}`}
              onClick={() => toggleAccordion(4)}
            >
              How can I contribute to EarthFi's mission?
            </button>
            <div className={`panel ${activeIndex === 4 ? "show" : ""}`}>
              <p>
                There are several ways to contribute to EarthFi's mission of
                promoting waste-to-wealth initiatives and environmental
                sustainability:
                <ul style={{ listStyle: "bullet" }}>
                  <li>
                    Participate in our recycling and waste reduction programs.
                  </li>
                  <li>
                    Spread awareness about waste management best practices and
                    the importance of recycling.
                  </li>
                  <li>
                    Collaborate with us on community engagement projects and
                    sustainability initiatives.
                  </li>
                  <li>
                    Support our platform by becoming a partner, sponsor, or
                    volunteer.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <p>
          Ready to get started? Connect your wallet and let's make a difference
          together!
        </p>
      </div>
    </section>
  );
};

export default GetStarted;
