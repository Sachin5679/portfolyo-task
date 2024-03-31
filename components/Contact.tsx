import React from 'react';

const ContactForm = () => {
  return (
    <section id='contact' className="text-center mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded-md p-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
