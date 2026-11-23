import React from 'react';
import { MARQUEE_ITEMS } from '../data/productsData';

export const CategoryTicker = () => {
  // Duplicate array for seamless infinite marquee loop
  const tickerItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-[#163323] py-4 sm:py-5 overflow-hidden border-y border-[#244e39] select-none shadow-inner">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {tickerItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center mx-4 sm:mx-6 text-xs sm:text-sm font-semibold tracking-wider text-[#FAF7F2] uppercase whitespace-nowrap"
          >
            <span className="hover:text-[#C59A58] transition-colors cursor-pointer">{item}</span>
            <span className="ml-4 sm:ml-6 text-sm text-[#C59A58] inline-block">🌿</span>
          </div>
        ))}
      </div>
    </div>
  );
};
