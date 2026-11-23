import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/productsData';
import { ProductCard } from './ProductCard';

export const BestSellers = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter products by category
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="best-sellers" className="pt-12 sm:pt-16 pb-6 sm:pb-8 bg-[#FAF7F2] relative">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Row: Subtitle, Title & "View All Products" Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#666D71] font-semibold mb-2 block">
              Our Products
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163323] leading-tight">
              Our <span className="text-[#C59A58] italic font-normal">Best Sellers</span> Products
            </h2>
          </div>

          <a 
            href="#summer-glow"
            className="inline-flex items-center gap-2 bg-[#163323] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-[#244e39] transition-all self-start md:self-auto shadow-sm group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59A58] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Category Filter Pills (Exact Match to Reference Screenshot!) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#163323] text-white shadow-md font-semibold'
                    : 'bg-white text-[#575F59] hover:bg-[#EFE9DE] border border-[#EBE6DD]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (4 Columns matching reference screenshot!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state fallback if category has no items */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EFE9DE]">
            <span className="text-3xl mb-2 block">🌿</span>
            <h3 className="font-serif text-lg font-bold text-[#163323] mb-1">More Botanical Blends Coming Soon</h3>
            <p className="text-xs text-[#666D71] mb-4">Our herbalists are formulating fresh batches for this ritual.</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="bg-[#163323] text-white text-xs font-semibold px-5 py-2 rounded-full"
            >
              Browse All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
