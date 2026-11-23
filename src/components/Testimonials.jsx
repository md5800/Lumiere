import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Sophia Laurent',
    role: 'Happy Customer',
    rating: 5.0,
    title: 'Transformative glow in just two weeks!',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Happy Customer',
    rating: 5.0,
    title: 'Unbelievable hydration and glow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Bessie Cooper',
    role: 'Happy Customer',
    rating: 5.0,
    title: "The Best Thing I've Used for My Skin!",
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    name: 'Camille Dubois',
    role: 'Happy Customer',
    rating: 5.0,
    title: 'Pure botanical luxury in every drop',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 5,
    name: 'Jenny Vance',
    role: 'Happy Customer',
    rating: 5.0,
    title: 'Soothing and restorative for sensitive skin',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80'
  }
];

export const Testimonials = () => {
  // Default to index 2 (Bessie Cooper) as shown in the screenshot
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeReview = REVIEWS_DATA[activeIndex];

  return (
    <section id="reviews-section" className="py-16 sm:py-20 bg-[#FAF7F2] relative">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header (Centered, matching screenshot) */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#666D71] font-semibold mb-2 block">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163323] leading-tight">
            Testimonials from <br />
            <span className="text-[#C59A58] italic font-normal">
              Our Loyal Customers
            </span>
          </h2>
        </div>

        {/* 5 Circular Avatars Row (Centered, active one with concentric highlight ring) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
          {REVIEWS_DATA.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-300 rounded-full focus:outline-none ${
                  isActive
                    ? 'scale-110 p-1 rounded-full border-2 border-[#163323]/25 shadow-sm'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                aria-label={`Select review by ${item.name}`}
              >
                <div
                  className={`rounded-full overflow-hidden transition-all ${
                    isActive
                      ? 'w-12 h-12 sm:w-14 sm:h-14 border-2 border-[#163323]'
                      : 'w-10 h-10 sm:w-11 sm:h-11'
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Review Content Box with Left & Right Arrow Buttons (Exact match to screenshot) */}
        <div className="relative flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Left Arrow Button (Caramel/Gold) */}
          <button
            onClick={handlePrev}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#BA8E48] hover:bg-[#a67c3b] text-white flex items-center justify-center shrink-0 shadow-md transition-transform active:scale-95 z-10"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Center Review Details */}
          <div className="flex-1 text-center max-w-xl mx-auto px-2 transition-all duration-300 animate-fadeIn key={activeIndex}">
            {/* Title */}
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#163323] mb-3">
              {activeReview.title}
            </h3>

            {/* Review Paragraph */}
            <p className="text-xs sm:text-sm text-[#575F59] leading-relaxed mb-4 max-w-lg mx-auto">
              {activeReview.review}
            </p>

            {/* 5 Gold Stars + 5.0 */}
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#F5A623] text-[#F5A623]"
                />
              ))}
              <span className="text-xs sm:text-sm font-bold text-[#2B2D2F] ml-1.5">
                {activeReview.rating.toFixed(1)}
              </span>
            </div>

            {/* Customer Name & Subtitle */}
            <div className="mt-1">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#163323]">
                {activeReview.name}
              </h4>
              <p className="text-xs text-[#8F9E8B] mt-0.5">
                {activeReview.role}
              </p>
            </div>
          </div>

          {/* Right Arrow Button (Dark Forest Green) */}
          <button
            onClick={handleNext}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#163323] hover:bg-[#244e39] text-white flex items-center justify-center shrink-0 shadow-md transition-transform active:scale-95 z-10"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
