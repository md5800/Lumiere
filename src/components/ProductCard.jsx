import React from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { useCountdown } from '../hooks/useCountdown';

export const ProductCard = ({ product, showDealProgress = false }) => {
  const { 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct 
  } = useCartWishlist();

  // If card has countdown timer (like SilkSculpt Serum in reference screenshot)
  const countdown = useCountdown(5, 12, 30, 25);
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group bg-white rounded-3xl p-3 sm:p-4 border border-[#EFE9DE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F4ECE1]/60 mb-4 flex items-center justify-center">
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Discount Badge (Top Left) */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-[#445B45] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm z-10">
            {product.discount}
          </div>
        )}

        {/* Floating Quick Action Buttons (Top Right) */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
          {/* Wishlist Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all ${
              wishlisted 
                ? 'bg-rose-50 text-rose-500 scale-105' 
                : 'bg-white/90 backdrop-blur-sm text-[#163323] hover:bg-[#163323] hover:text-white'
            }`}
            aria-label="Save to Wishlist"
            title="Save to Wishlist"
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>

          {/* Quick View Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#163323] hover:bg-[#163323] hover:text-white flex items-center justify-center shadow-md transition-all"
            aria-label="Quick View"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Quick Add to Cart Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 1);
            }}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#163323] hover:bg-[#163323] hover:text-white flex items-center justify-center shadow-md transition-all sm:hidden group-hover:flex"
            aria-label="Add to Cart"
            title="Quick Add"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

        {/* Countdown Bar at the bottom of Image (Exact match to Card 1 in reference!) */}
        {product.hasCountdown && (
          <div className="absolute bottom-0 inset-x-0 bg-[#163323]/95 backdrop-blur-sm text-white py-1.5 px-3 z-10 flex items-center justify-center gap-1.5 text-[11px] font-medium tracking-wider">
            <span className="font-bold text-[#E5C492]">{countdown.days}</span>
            <span className="text-[10px] text-white/70">Days :</span>
            <span className="font-bold text-[#E5C492]">{countdown.hours}</span>
            <span className="text-[10px] text-white/70">Hours :</span>
            <span className="font-bold text-[#E5C492]">{countdown.minutes}</span>
            <span className="text-[10px] text-white/70">Mins :</span>
            <span className="font-bold text-[#E5C492]">{countdown.seconds}</span>
            <span className="text-[10px] text-white/70">Sec</span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Star Rating Line */}
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-[#8F9E8B] font-medium capitalize">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[#C59A58] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#C59A58] text-[#C59A58]" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-base sm:text-lg font-bold text-[#163323] hover:text-[#C59A58] transition-colors cursor-pointer line-clamp-1 mb-2"
          >
            {product.name}
          </h3>

          {/* Stock Progress Bar (for Deals of the Day) */}
          {showDealProgress && product.stockTotal && (
            <div className="mb-3">
              <div className="flex justify-between text-[11px] text-[#666D71] mb-1 font-medium">
                <span>Sold: {product.soldCount}</span>
                <span>Available: {product.stockTotal - product.soldCount}</span>
              </div>
              <div className="w-full bg-[#EFE9DE] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#163323] h-full rounded-full transition-all duration-500"
                  style={{ width: `${(product.soldCount / product.stockTotal) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Price & Add to Cart Action */}
        <div className="flex items-center justify-between pt-2 border-t border-[#FAF7F2] mt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-bold text-[#163323]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#9CA3AF] line-through font-normal">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart button */}
          <button 
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center gap-1.5 bg-[#163323] text-white text-xs font-semibold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full hover:bg-[#244e39] transition-all transform active:scale-95 shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#C59A58]" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </div>
  );
};
