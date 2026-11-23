import React from 'react';
import { BRAND_STATS } from '../data/productsData';

export const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C59A58]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 4-Photo Collage with Central Organic Badge */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Sparkle decorative icons */}
            <div className="absolute -top-4 left-6 text-[#163323] text-xl animate-pulse">✦</div>
            <div className="absolute bottom-6 left-2 text-[#C59A58] text-2xl animate-float">✦</div>
            <div className="absolute top-1/3 -right-3 text-[#163323] text-sm">✦</div>

            {/* Collage Grid */}
            <div className="relative grid grid-cols-2 gap-3.5 sm:gap-4.5 max-w-md sm:max-w-lg w-full">
              
              {/* Image 1: Top Left - Towel Wrap Spa Model */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-48 sm:h-56 group">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" 
                  alt="Woman in towel wrap applying skincare" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#163323]/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Image 2: Top Right - Radiant Model Smiling */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-48 sm:h-56 mt-4 sm:mt-6 group">
                <img 
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" 
                  alt="Natural beauty smiling" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#163323]/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Image 3: Bottom Left - Serum Application Routine */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-48 sm:h-56 -mt-3 group">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" 
                  alt="Woman applying serum dropper" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#163323]/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Image 4: Bottom Right - Glowing Skin Portrait */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-48 sm:h-56 group">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" 
                  alt="Radiant skincare glow" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#163323]/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Central Circular Emblem Badge (Exact match to screenshot!) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#163323] border-4 border-white shadow-xl flex flex-col items-center justify-center p-2 text-center transform hover:rotate-12 transition-transform duration-500">
                  <div className="w-full h-full rounded-full border border-dashed border-[#C59A58] flex flex-col items-center justify-center">
                    <span className="text-sm text-[#C59A58] leading-none mb-0.5">🌿</span>
                    <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-[#E5C492] uppercase leading-tight">
                      100% ORGANIC
                    </span>
                    <span className="text-[6px] text-white/80 uppercase tracking-wider">
                      NATURAL
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Us Content, Metrics Box & Signature */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subtitle */}
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#666D71] font-semibold mb-3 block">
              About Us
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163323] leading-[1.2] mb-6">
              Your Journey to <br />
              <span className="text-[#C59A58] italic font-normal font-serif">
                Effortless Elegance
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#575F59] leading-relaxed mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We believe true beauty stems from harmony with nature, crafting sustainably sourced, bio-active botanicals that nourish and illuminate your skin's unique grace.
            </p>

            {/* Dark Forest Green Metrics Box (Exact match to screenshot!) */}
            <div className="bg-[#163323] text-white rounded-2xl p-6 sm:p-7 shadow-lg mb-8 max-w-xl border border-[#244e39]">
              <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
                {BRAND_STATS.map((stat, idx) => (
                  <div key={idx} className={idx > 0 ? "pl-3 sm:pl-4" : ""}>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#C59A58] font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature & Founder Note */}
            <div className="flex items-center gap-6">
              <div>
                <span className="font-signature text-4xl sm:text-5xl text-[#2B2D2F] font-normal leading-tight block">
                  Jenny Alexander
                </span>
                <span className="text-xs text-[#8F9E8B] tracking-wider uppercase font-semibold mt-1 block">
                  Founder & Master Herbalist
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
