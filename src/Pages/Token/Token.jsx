import React from "react";
import "./Token.scss";

const Token = () => {
  return (
    <section className="container token">
      <div className="token__wrapper__one">
        <h1>
          Welcome to the world of future of <span>scalable sustainability</span>
        </h1>
        <p>
          We introduce the EarthFiCoin token, the digital currency that funds the
          recovery of waste while generating profit. Every time plastic is
          recovered and recycled, the token&apos;s worth scales up. Ready to
          make positive impact?
        </p>

        <button className="--btn --btn-primary">Explore EarthFiCoin</button>
      </div>

      <div className="token__wrapper__two">
        <div>
          <h1>Let&apos;s talk utility</h1>
          <p>
            This is not about hype, it&apos;s about utility. The EarthFiCoin ensures
            transparent plastic recovery, funding our certified entities
            worldwide to clean the environment.
          </p>
        </div>
        <div>
          <h1>Transparency as a lifestyle</h1>
          <p>
            Legitimacy is our flagship. Through blockchain technology, the
            EarthFiCoin ensures that our entities comply and effectively use their
            funds for plastic recovery and recycling.
          </p>
        </div>
        <div>
          <h1>Gain with ethics</h1>
          <p>
          EarthFiCoin incentivize its certified entities to be truthful in their
            reporting and operations. Recovery entities go through a strict
            verification process, and are constantly under audit to provide
            transparent information.
          </p>
          <p className="--mb">Ready to invest in transparency?</p>
          <button className="--btn --btn-primary">Get Your Token</button>
        </div>
      </div>
    </section>
  );
};

export default Token;
