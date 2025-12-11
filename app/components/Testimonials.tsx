'use client';

import { Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      name: 'Zahedul Islam',
      feedback: 'I have very happy with the website developed for Biz News Dive! The design is modern, sleek, and user-friendly, making it easy for our visitors to navigate through the latest business news. The site\'s responsiveness across devices is impressive, ensuring a smooth experience for all users. We\'ve already noticed increased engagement, and the features like the news categories and search functionality have made it much easier for readers to stay updated. Thank you for your exceptional work!',
      designation: 'Editor, BizNewsDive.com',
      avatar: '/zahedul.jfif',
      rating: 5,
    },
    {
      name: 'Mohammad Sohel',
      feedback: 'We are so pleased with the website created for our clinic! The design is clean, professional, and easy to navigate, which makes it simple for our patients to find the information they need. The site has greatly improved our online presence and has made it easier for people to connect with us. We\'ve already received positive feedback from our clients, especially about the user-friendly booking system. We feel confident that this website will help us continue to support and engage our community. Thank you for your hard work and dedication in bringing our vision to life!',
      designation: 'Psychotherapist, Mohammad Care Home',
      avatar: '/sohel.jfif',
      rating: 5,
    },
    {
      name: 'Mohamed Firoze',
      feedback: 'Thanks to Mahbub exceptional SEO work on the tvah.ca website, we\'ve seen remarkable improvements in visibility and search rankings. The owner and veterinarian expressed their appreciation for the enhanced performance of the site, which now ranks on the first page of Google. Mahbub\'s dedication and expertise in SEO have truly made a positive impact, and we\'re grateful for his contribution to the success of the project.',
      designation: 'Sales And Marketing Team Lead, AK Marketings Int',
      avatar: '/firoze.jfif',
      rating: 5,
    },
    {
      name: 'Dilruba Akter Sumi',
      feedback: 'We are extremely pleased with the website created for 5W Communications! The design beautifully reflects our brand\'s identity, with a clean, professional layout that highlights our public relations services. The website is easy to navigate, and the functionality ensures visitors can quickly access information about our offerings. We appreciate the attention to detail and responsiveness across different devices. The site has significantly improved our online presence and client engagement. A big thank you for your hard work and dedication in bringing our vision to life!',
      designation: 'Account Director, 5W Communications',
      avatar: '/dilruba.png',
      rating: 5,
    },
  ];

  // Create infinite scroll by duplicating testimonials
  const displayedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {displayedTestimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4 sm:px-6 lg:px-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 relative max-w-2xl mx-auto">
                    <div className="absolute top-6 right-6 text-gray-200 dark:text-gray-600">
                      <Quote className="h-12 w-12" />
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic text-lg">
                      "{testimonial.feedback}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover border-2 border-blue-600"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 w-2 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
