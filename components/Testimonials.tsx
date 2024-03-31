"use client"
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      quote: 'Testimonial 1',
      author: 'Author 1',
    },
    {
      id: 2,
      quote: 'Testimonial 2',
      author: 'Author 2',
    },
    // Add more testimonials as needed
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="text-center mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Testimonials</h2>
      {/* Auto slide testimonials */}
      <div className="max-w-lg mx-auto">
        <div className="overflow-hidden">
          <div className="px-4 py-2 h-40 transition-transform duration-500 transform" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mb-4">
                <p className="text-lg text-gray-700">{testimonial.quote}</p>
                <p className="text-gray-500">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
