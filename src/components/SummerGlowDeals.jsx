import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';

export const SummerGlowDeals = () => {
  const { days, hours, minutes, seconds } = useCountdown(4, 14, 48, 18);

  return (
    <section id="summer-glow" className="pt-2 sm:pt-4 pb-14 sm:pb-16 bg-[#FAF7F2] relative overflow-hidden">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Three-Panel Showcase (Exact Match to Reference Screenshot!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Panel: Framed Portrait - Model with Towel Wrap Smiling */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="h-full rounded-[2.5rem] p-3 bg-[#FAF7F2] border-2 border-[#D5CBB9] shadow-sm overflow-hidden flex flex-col justify-end relative group">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative min-h-[460px] border border-[#EFE9DE]">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80" 
                  alt="Radiant skincare model in towel wrap"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163323]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Center Panel: Summer Glow Deals with Countdown & Tropical Leaf Accents */}
          <div className="lg:col-span-6 relative rounded-[2.5rem] bg-white border border-[#EFE9DE] shadow-md p-8 sm:p-12 flex flex-col items-center justify-center text-center overflow-hidden">
            
            {/* Top-Left Tropical Botanical Palm Frond Accent (Exact match to reference!) */}
            <div className="absolute top-0 left-0 w-36 sm:w-44 h-36 sm:h-44 pointer-events-none opacity-90 select-none -translate-x-3 -translate-y-3">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#163323]">
                {/* Palm frond stem */}
                <path d="M10 10 C60 50, 110 110, 150 190" stroke="#1F4331" strokeWidth="2.5" strokeLinecap="round" />
                {/* Individual leaflets */}
                <path d="M25 22 C65 15, 115 45, 130 55 C100 50, 60 40, 25 22 Z" fill="#244E39" />
                <path d="M40 38 C80 30, 135 70, 155 85 C120 75, 75 60, 40 38 Z" fill="#163323" />
                <path d="M55 58 C95 55, 150 100, 170 120 C135 105, 90 85, 55 58 Z" fill="#244E39" />
                <path d="M75 82 C115 85, 160 135, 175 160 C145 140, 105 115, 75 82 Z" fill="#163323" />
                <path d="M95 110 C130 120, 165 165, 175 190 C150 170, 120 145, 95 110 Z" fill="#244E39" />
                {/* Secondary side leaflets */}
                <path d="M20 35 C15 75, 45 125, 55 140 C50 110, 40 70, 20 35 Z" fill="#2A5C43" />
                <path d="M35 55 C30 95, 70 145, 85 165 C75 130, 60 85, 35 55 Z" fill="#163323" />
                <path d="M55 80 C55 120, 100 170, 120 190 C105 155, 85 110, 55 80 Z" fill="#2A5C43" />
              </svg>
            </div>

            {/* Bottom-Right Tropical Botanical Palm Frond Accent (Exact match to reference!) */}
            <div className="absolute bottom-0 right-0 w-36 sm:w-44 h-36 sm:h-44 pointer-events-none opacity-90 select-none translate-x-3 translate-y-3 rotate-180">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#163323]">
                <path d="M10 10 C60 50, 110 110, 150 190" stroke="#1F4331" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M25 22 C65 15, 115 45, 130 55 C100 50, 60 40, 25 22 Z" fill="#244E39" />
                <path d="M40 38 C80 30, 135 70, 155 85 C120 75, 75 60, 40 38 Z" fill="#163323" />
                <path d="M55 58 C95 55, 150 100, 170 120 C135 105, 90 85, 55 58 Z" fill="#244E39" />
                <path d="M75 82 C115 85, 160 135, 175 160 C145 140, 105 115, 75 82 Z" fill="#163323" />
                <path d="M95 110 C130 120, 165 165, 175 190 C150 170, 120 145, 95 110 Z" fill="#244E39" />
                <path d="M20 35 C15 75, 45 125, 55 140 C50 110, 40 70, 20 35 Z" fill="#2A5C43" />
                <path d="M35 55 C30 95, 70 145, 85 165 C75 130, 60 85, 35 55 Z" fill="#163323" />
                <path d="M55 80 C55 120, 100 170, 120 190 C105 155, 85 110, 55 80 Z" fill="#2A5C43" />
              </svg>
            </div>

            {/* Subtitle */}
            <div className="relative z-10 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#666D71] font-semibold mb-2">
              <span>Special Savings</span>
            </div>

            {/* Main Headline */}
            <h2 className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#163323] leading-tight mb-2">
              Summer <span className="text-[#C59A58] italic font-normal">Glow</span> Deals
            </h2>

            {/* Offer Subtext */}
            <p className="relative z-10 text-xs sm:text-sm text-[#575F59] font-medium tracking-wide mb-8">
              Get 50% off - Limited Time Offer!
            </p>

            {/* Big Countdown Timer (Exact match to reference layout) */}
            <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 mb-8">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#163323] leading-none mb-1">
                  {days}
                </span>
                <span className="text-[11px] text-[#8F9E8B] font-medium tracking-wide">
                  Days
                </span>
              </div>

              <span className="font-serif text-2xl font-bold text-[#163323]/50 -mt-3">:</span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#163323] leading-none mb-1">
                  {hours}
                </span>
                <span className="text-[11px] text-[#8F9E8B] font-medium tracking-wide">
                  Hours
                </span>
              </div>

              <span className="font-serif text-2xl font-bold text-[#163323]/50 -mt-3">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#163323] leading-none mb-1">
                  {minutes}
                </span>
                <span className="text-[11px] text-[#8F9E8B] font-medium tracking-wide">
                  Minutes
                </span>
              </div>

              <span className="font-serif text-2xl font-bold text-[#163323]/50 -mt-3">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C59A58] leading-none mb-1">
                  {seconds}
                </span>
                <span className="text-[11px] text-[#8F9E8B] font-medium tracking-wide">
                  Seconds
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="#best-sellers"
              className="relative z-10 inline-flex items-center gap-2 bg-[#163323] text-white px-7 py-3 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-[#244e39] transition-all transform hover:scale-105 shadow-md group"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59A58] group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right Panel: Framed Portrait - Model in Bathrobe Touching Cheek */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="h-full rounded-[2.5rem] p-3 bg-[#FAF7F2] border-2 border-[#D5CBB9] shadow-sm overflow-hidden flex flex-col justify-end relative group">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative min-h-[460px] border border-[#EFE9DE]">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80" 
                  alt="Smiling model in bathrobe touching cheek"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163323]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
