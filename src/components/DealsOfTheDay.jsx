import React from 'react';
import { Flame, Clock, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';
import { ProductCard } from './ProductCard';
import { useCountdown } from '../hooks/useCountdown';

export const DealsOfTheDay = () => {
  // Filter deal products
  const dealProducts = PRODUCTS.filter(p => p.isDealOfDay);
  const flashCountdown = useCountdown(0, 16, 42, 19);

  return (
    <section id="deals-section" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C59A58] font-bold mb-2">
              <Flame className="w-4 h-4 text-[#C59A58]" />
              <span>Today's Offers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163323] leading-tight">
              Deals of the <span className="text-[#C59A58] italic font-normal">Day</span>
            </h2>
          </div>

          {/* Flash Sale Live Timer Header */}
          <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#EFE9DE] shadow-sm self-start md:self-auto">
            <Clock className="w-4 h-4 text-[#163323]" />
            <span className="text-xs text-[#666D71] font-medium">Offers Expire in:</span>
            <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#163323]">
              <span className="bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EFE9DE]">{flashCountdown.hours}h</span>
              <span>:</span>
              <span className="bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EFE9DE]">{flashCountdown.minutes}m</span>
              <span>:</span>
              <span className="bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EFE9DE] text-[#C59A58]">{flashCountdown.seconds}s</span>
            </div>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map(product => (
            <ProductCard 
              key={`deal-${product.id}`} 
              product={product} 
              showDealProgress={true} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};
