import React from "react";
import "./TermAndCondition.scss";

const termsData = [
  {
    title: "Account and Wallet",
    content: [
      "1.1 Account Creation: In order to access certain features of our platform, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process. You are solely responsible for safeguarding your account credentials and for any activities or actions taken under your account.",
      "1.2 Wallet Integration: By using our platform, you may have the option to connect your digital wallet for on-chain transactions. By connecting your wallet, you acknowledge and agree to the following:",
      "- Security: You are solely responsible for the security of your digital wallet and any associated private keys. AVOCET shall not be held liable for any loss or unauthorized access to your wallet or digital assets.",
      "- Transaction Authorization: By connecting your wallet, you authorize AVOCET to execute on-chain transactions on your behalf as instructed through our platform. You acknowledge that once a transaction is initiated, it cannot be reversed, and you agree to bear any associated transaction fees.",
      "- Privacy: We respect your privacy and will not access or store your wallet's private keys. However, certain transaction data may be stored on our platform for record-keeping purposes in accordance with our Privacy Policy.",
      "1.3 User Conduct: You agree to use your connected wallet for lawful purposes only and to comply with all applicable laws and regulations regarding cryptocurrency transactions.",
    ],
  },
  {
    title: "User Agreement",
    content: [
      "By using the Platform, you agree to comply with and be legally bound by the terms and conditions of these Terms of Use, whether or not you become a registered user of the Platform.",
    ],
  },
  {
    title: "Changes to Terms of Use",
    content: [
      "We may revise and update these Terms of Use from time to time at our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Platform thereafter. Your continued use of the Platform following the posting of revised Terms of Use means that you accept and agree to the changes.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "If you have any questions or comments about these Terms of Use, please contact us at avocet907@gmail.com.",
    ],
  },
];

const TermsAndCondition = () => {
  return (
    <div className="terms-of-use">
      <h1>Terms of Use</h1>
      <p className="--mb">
        These Terms of Use ("Terms") govern your use of AVOCET and any
        associated services provided by us. By accessing or using our platform,
        you agree to comply with these Terms. If you do not agree with these
        Terms, please do not use our platform.
      </p>

      <hr />
      <hr />
      {termsData.map((section, index) => (
        <div key={index} className="terms-section">
          <h2>{section.title}</h2>
          <div className="terms-content">
            {section.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TermsAndCondition;
