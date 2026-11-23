import React, { useState } from 'react';
import { X, Search, ArrowRight, Star } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { PRODUCTS } from '../data/productsData';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct, addToCart } = useCartWishlist();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const popularTags = ['SilkSculpt', 'Serum', 'Argan', 'Glow', 'Moisturizer', 'Oil', 'Rose Quartz'];

  const filteredProducts = searchTerm.trim() === ''
    ? []
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative min-h-screen px-4 pt-16 pb-12 flex justify-center">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EFE9DE] p-6 sm:p-8 animate-fadeIn self-start">
          
          {/* Header & Input */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EFE9DE] mb-6">
            <div className="flex-1 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#163323]" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search botanical serums, oils, elixirs..."
                autoFocus
                className="w-full text-base sm:text-lg text-[#163323] placeholder-[#8F9E8B] focus:outline-none"
              />
            </div>
            
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="text-xs text-[#8F9E8B] hover:text-[#163323] mr-3 font-semibold"
              >
                Clear
              </button>
            )}

            <button 
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-[#575F59] hover:bg-[#FAF7F2] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Tags */}
          <div className="mb-6">
            <span className="text-[11px] uppercase tracking-wider text-[#8F9E8B] font-bold block mb-2">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {popularTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="text-xs bg-[#FAF7F2] hover:bg-[#163323] hover:text-white text-[#575F59] px-3 py-1 rounded-full border border-[#EFE9DE] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          <div>
            {searchTerm.trim() !== '' && (
              <div className="mb-3 text-xs text-[#8F9E8B] font-medium">
                Found {filteredProducts.length} results for "{searchTerm}"
              </div>
            )}

            {filteredProducts.length > 0 && (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id}
                    className="flex items-center justify-between p-3 rounded-2xl border border-[#EFE9DE] hover:bg-[#FAF7F2] transition-colors group cursor-pointer"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setQuickViewProduct(product);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#F4ECE1] shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#8F9E8B] font-semibold uppercase">{product.categoryLabel}</span>
                        <h4 className="font-serif text-sm font-bold text-[#163323] group-hover:text-[#C59A58] transition-colors">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs font-bold text-[#163323] mt-0.5">
                          <span>${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="text-[11px] text-[#9CA3AF] line-through font-normal">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product, 1);
                        }}
                        className="bg-[#163323] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#244e39] transition-colors"
                      >
                        Add to Bag
                      </button>
                      <ArrowRight className="w-4 h-4 text-[#8F9E8B] group-hover:text-[#163323] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {searchTerm.trim() !== '' && filteredProducts.length === 0 && (
              <div className="text-center py-10">
                <p className="text-sm text-[#666D71]">No products matched "{searchTerm}".</p>
                <p className="text-xs text-[#8F9E8B] mt-1">Try searching for "serum", "argan", or "cream".</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
