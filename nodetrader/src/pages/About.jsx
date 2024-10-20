import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600">
        Welcome to our platform! We are dedicated to providing the best experience possible. Our mission is to create
        innovative solutions that help our users achieve their goals.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg text-gray-600">
          Our platform was founded with a single goal in mind: to simplify complex processes and deliver value to our users.
          Over the years, we've grown to serve thousands of customers worldwide, and we continue to innovate and improve every
          day.
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
