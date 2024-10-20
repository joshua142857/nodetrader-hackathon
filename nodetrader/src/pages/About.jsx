import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600">
      Have you ever had an idea about the market but did not that the time or expertise to implement it? 
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-gray-600">
        AlgoFlow is a full stack app that serves as an online trading platform for users to find, develop and deploy machine learning models across prediction markets. Whether you are just starting out in machine learning or a seasoned veteran, our streamless and codeless designs allow for you to take advantage of our models to discover your new trading idea. Leveraging a react flow front end, we are able to visualize beautiful and simple data streams that are not only understandable, but convey the essentials size and flow of the data. Our own proprietary trading models enable anything from simple linear discovery to a mixture of LSTM and GRU recurrent neural networks, developed by our very own data science team. The landing dashboard, with integrations to the market and your own order book, provides information about your profit & loss, risk metrics and market conditions at your fingertips. Future plans to have an internal automated trading systems to extend the train and test to full deployment and internal links to your various wallets will truly make algorithmic trading available to anyone.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          If you have any questions or feedback, feel free to reach out. We're always happy to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
