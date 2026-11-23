import React from 'react';
import { Check, Heart, ShoppingBag, X } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const ToastNotification = () => {
  const { toast, setToast, setIsCartOpen, setIsWishlistOpen } = useCartWishlist();

  if (!toast) return null;

  const isCart = toast.type === 'cart';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-slideIn">
      <div className="bg-[#163323] text-white p-4 rounded-2xl shadow-2xl border border-[#244e39] flex items-center gap-3">
        
        {/* Product image or Icon */}
        {toast.product ? (
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 shrink-0">
            <img src={toast.product.image} alt="Product" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#C59A58] text-[#163323] flex items-center justify-center shrink-0">
            <Check className="w-5 h-5 stroke-[3]" />
          </div>
        )}

        {/* Message */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E5C492] mb-0.5">
            {isCart ? <ShoppingBag className="w-3.5 h-3.5" /> : <Heart className="w-3.5 h-3.5" />}
            <span>{isCart ? 'Added to Bag' : 'Wishlist Updated'}</span>
          </div>
          <p className="text-xs text-white truncate font-medium">
            {toast.product ? toast.product.name : toast.message}
          </p>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => {
            if (isCart) {
              setIsCartOpen(true);
            } else {
              setIsWishlistOpen(true);
            }
            setToast(null);
          }}
          className="text-xs font-bold text-[#C59A58] hover:text-white px-2 py-1 rounded-md transition-colors shrink-0 underline"
        >
          View
        </button>

        {/* Dismiss Button */}
        <button 
          onClick={() => setToast(null)}
          className="text-white/60 hover:text-white p-1"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
