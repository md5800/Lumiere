import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Check, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const QuickViewModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useCartWishlist();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!quickViewProduct) return null;

  const activeImage = selectedImage || quickViewProduct.image;
  const wishlisted = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 w-full max-w-3xl border border-[#EFE9DE] animate-fadeIn">
          
          {/* Close Button */}
          <button 
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF7F2] text-[#163323] hover:bg-[#163323] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: Product Images */}
            <div className="p-6 sm:p-8 bg-[#FAF7F2] flex flex-col justify-between">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#EFE9DE] mb-4 shadow-inner">
                <img 
                  src={activeImage} 
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
                {quickViewProduct.discount && (
                  <span className="absolute top-3 left-3 bg-[#163323] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {quickViewProduct.discount}
                  </span>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {quickViewProduct.gallery && quickViewProduct.gallery.length > 1 && (
                <div className="flex gap-2">
                  {quickViewProduct.gallery.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === img ? 'border-[#163323] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info & Purchase Controls */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[#8F9E8B] font-semibold uppercase tracking-wider">
                    {quickViewProduct.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[#C59A58] font-bold">
                    <Star className="w-4 h-4 fill-[#C59A58] text-[#C59A58]" />
                    <span>{quickViewProduct.rating.toFixed(1)}</span>
                    <span className="text-[#8F9E8B] font-normal">({quickViewProduct.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="font-serif text-2xl font-bold text-[#163323] mb-2 leading-tight">
                  {quickViewProduct.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#163323]">
                    ${quickViewProduct.price.toFixed(2)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-[#9CA3AF] line-through">
                      ${quickViewProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs text-[#C59A58] font-semibold ml-2">
                    In Stock &bull; Ships within 24h
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#575F59] leading-relaxed mb-5">
                  {quickViewProduct.description}
                </p>

                {/* Key Ingredients */}
                {quickViewProduct.keyIngredients && (
                  <div className="mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#163323] block mb-2">
                      Key Botanical Actives:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {quickViewProduct.keyIngredients.map((ing, i) => (
                        <span 
                          key={i}
                          className="text-[10px] bg-[#FAF7F2] text-[#163323] border border-[#EFE9DE] px-2.5 py-1 rounded-full font-medium"
                        >
                          🌿 {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Volume & Skin Type */}
                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EFE9DE] text-xs space-y-1 mb-5">
                  <div className="flex justify-between text-[#575F59]">
                    <span>Volume:</span>
                    <span className="font-semibold text-[#163323]">{quickViewProduct.volume}</span>
                  </div>
                  <div className="flex justify-between text-[#575F59]">
                    <span>Skin Concern:</span>
                    <span className="font-semibold text-[#163323]">{quickViewProduct.skinType}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {/* Quantity */}
                  <div className="flex items-center border border-[#EFE9DE] rounded-full bg-[#FAF7F2] px-3 py-2 gap-3">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-[#163323] hover:text-[#C59A58] font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-[#163323] min-w-4 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-[#163323] hover:text-[#C59A58] font-bold text-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#163323] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#244e39] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#C59A58]" />
                    <span>Add to Bag &bull; ${(quickViewProduct.price * quantity).toFixed(2)}</span>
                  </button>

                  {/* Wishlist Button */}
                  <button 
                    onClick={() => toggleWishlist(quickViewProduct)}
                    className={`w-11 h-11 rounded-full border border-[#EFE9DE] flex items-center justify-center transition-colors ${
                      wishlisted ? 'bg-rose-50 text-rose-500 border-rose-200' : 'bg-[#FAF7F2] text-[#163323] hover:bg-white'
                    }`}
                    title="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Trust info */}
                <div className="flex items-center justify-center gap-4 text-[10px] text-[#8F9E8B]">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#163323]" />
                    Free Worldwide Shipping $75+
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#163323]" />
                    30-Day Glow Promise
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
