import React from "react";
import Faqs from "./Faqs";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "What is EarthFi?",
      answer:
        "EarthFi is a cutting-edge platform that connects individuals businesses, and organizations to innovative waste management solutions. Our platform aims to transform waste into valuable resources, promoting environmental sustainability and economic growth.",
    },
    {
      id: 2,
      question: "How does EarthFi work?",
      answer: `EarthFi offers a range of services and technologies designed to optimize waste management processes. Users can access features such as waste collection, recycling programs, resource recovery initiatives, and community engagement projects. By leveraging
          technology and collaboration, we facilitate the conversion of
          waste materials into useful products and services..`,
    },
    {
      id: 3,
      question: "Is EarthFi available in my area?",
      answer: `EarthFi strives to expand its reach and impact globally. While
          our services may not be available in every location at the
          moment, we are continuously working to broaden our network and
          establish partnerships with local communities and organizations.
          Stay updated with our latest developments to see when we'll be
          coming to your area!`,
    },
    {
      id: 4,
      question:
        "What measures does EarthFi take to ensure environmental responsibility?",
      answer: `Environmental responsibility is a core value of EarthFi. We
          adhere to strict environmental standards and regulations in all
          our operations and collaborate with certified recycling
          facilities and waste management partners. Additionally, we
          prioritize sustainability in product design, supply chain
          management, and resource utilization, aiming to minimize
          environmental impact at every stage of the waste management
          process.`,
    },
    {
      id: 4,
      question: "How can I contribute to EarthFi's mission?",
      answer: `There are several ways to contribute to EarthFi's mission of
          promoting waste-to-wealth initiatives and environmental
          sustainability `,
    },
  ];
  return (
    <section className="faqs container top">
      <h1>FAQs</h1>

      <div className="faqsWrapper">
        {faqs.map(({ question, answer, id }) => (
          <Faqs key={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
