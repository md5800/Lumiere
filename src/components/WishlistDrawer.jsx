import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistItems,
    toggleWishlist,
    addToCart
  } = useCartWishlist();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Slide-out Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between z-50 animate-slideIn">
        
        {/* Top Header */}
        <div className="p-5 border-b border-[#EFE9DE] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="font-serif text-lg font-bold text-[#163323]">Your Wishlist</h2>
            <span className="text-xs font-semibold bg-[#E9EFE8] text-[#163323] px-2 py-0.5 rounded-full">
              {wishlistItems.length} items
            </span>
          </div>

          <button 
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-[#575F59] hover:text-[#163323] hover:bg-[#FAF7F2] rounded-full transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#EFE9DE] text-rose-400 flex items-center justify-center mx-auto mb-4 text-2xl">
                ♡
              </div>
              <h3 className="font-serif text-lg font-bold text-[#163323] mb-1">Your Wishlist is Empty</h3>
              <p className="text-xs text-[#666D71] mb-6">Tap the heart icon on any product to save it for later.</p>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="bg-[#163323] text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#244e39] transition-colors"
              >
                Browse Best Sellers
              </button>
            </div>
          ) : (
            wishlistItems.map((product) => (
              <div 
                key={product.id}
                className="bg-white p-3.5 rounded-2xl border border-[#EFE9DE] flex gap-3.5 shadow-sm items-center"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#F4ECE1] shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <span className="text-[10px] text-[#8F9E8B] font-semibold uppercase">{product.categoryLabel}</span>
                  <h4 className="font-serif text-sm font-bold text-[#163323] line-clamp-1">{product.name}</h4>
                  <div className="text-xs font-bold text-[#163323] mt-0.5">${product.price.toFixed(2)}</div>

                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => {
                        addToCart(product, 1);
                        toggleWishlist(product);
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#163323] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full hover:bg-[#244e39] transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#C59A58]" />
                      <span>Move to Bag</span>
                    </button>
                    <button 
                      onClick={() => toggleWishlist(product)}
                      className="text-xs text-[#8F9E8B] hover:text-rose-500 p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <div className="bg-white p-5 border-t border-[#EFE9DE]">
            <button 
              onClick={() => {
                wishlistItems.forEach(item => addToCart(item, 1));
                wishlistItems.forEach(item => toggleWishlist(item));
              }}
              className="w-full bg-[#163323] text-white py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#244e39] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#C59A58]" />
              <span>Add All to Bag</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
