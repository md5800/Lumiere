import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    rawSubtotal,
    discountAmount,
    appliedDiscount,
    applyPromoCode,
    removePromoCode,
    discountCode,
    setDiscountCode,
    progressToFreeShipping,
    remainingForFreeShipping,
    clearCart
  } = useCartWishlist();

  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const res = applyPromoCode(discountCode);
    if (res.success) {
      setCouponSuccess(res.message);
    } else {
      setCouponError(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-out Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between z-50 animate-slideIn">
        
        {/* Top Header */}
        <div className="p-5 border-b border-[#EFE9DE] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#163323]" />
            <h2 className="font-serif text-lg font-bold text-[#163323]">Your Sacred Bag</h2>
            <span className="text-xs font-semibold bg-[#E9EFE8] text-[#163323] px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items
            </span>
          </div>

          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#575F59] hover:text-[#163323] hover:bg-[#FAF7F2] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-[#FAF7F2] px-5 py-3 border-b border-[#EFE9DE]">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            {remainingForFreeShipping > 0 ? (
              <span>Add <strong className="text-[#163323] font-bold">${remainingForFreeShipping.toFixed(2)}</strong> more for <strong>Free Shipping</strong></span>
            ) : (
              <span className="text-[#163323] font-bold flex items-center gap-1">
                <span>🎉</span> You unlocked Free Worldwide Express Shipping!
              </span>
            )}
            <span className="text-[11px] text-[#8F9E8B]">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full bg-[#EFE9DE] h-2 rounded-full overflow-hidden">
            <div 
              className="bg-[#163323] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#EFE9DE] text-[#163323] flex items-center justify-center mx-auto mb-4 text-2xl">
                🌿
              </div>
              <h3 className="font-serif text-lg font-bold text-[#163323] mb-1">Your Bag is Empty</h3>
              <p className="text-xs text-[#666D71] mb-6">Discover our sacred botanical serums and elixirs.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-[#163323] text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#244e39] transition-colors"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.product.id}
                className="bg-white p-3.5 rounded-2xl border border-[#EFE9DE] flex gap-3.5 shadow-sm"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#F4ECE1] shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-[#8F9E8B] font-semibold uppercase">{item.product.categoryLabel}</span>
                      <h4 className="font-serif text-sm font-bold text-[#163323] line-clamp-1">{item.product.name}</h4>
                      <div className="text-xs font-bold text-[#163323] mt-0.5">${item.product.price.toFixed(2)}</div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#9CA3AF] hover:text-rose-500 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#EFE9DE] rounded-full bg-[#FAF7F2] px-2 py-0.5 gap-2">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="text-[#163323] hover:text-[#C59A58] p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#163323] min-w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="text-[#163323] hover:text-[#C59A58] p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-bold text-[#163323]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Area */}
        {cartItems.length > 0 && (
          <div className="bg-white p-5 border-t border-[#EFE9DE] shadow-lg">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="mb-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#8F9E8B] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Promo code (Try GLOW20)"
                    className="w-full bg-[#FAF7F2] border border-[#EFE9DE] pl-8 pr-3 py-2 rounded-xl text-xs uppercase font-semibold text-[#163323] focus:outline-none focus:border-[#163323]"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-[#163323] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#244e39] transition-colors"
                >
                  Apply
                </button>
              </div>

              {appliedDiscount.percentage > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg mt-2">
                  <span>Code <strong>{appliedDiscount.code}</strong> applied ({appliedDiscount.percentage}% off)</span>
                  <button 
                    type="button" 
                    onClick={removePromoCode}
                    className="underline text-[11px] text-rose-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              )}
              {couponError && <p className="text-[11px] text-rose-500 mt-1">{couponError}</p>}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#575F59] mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#163323]">${rawSubtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount.percentage > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount ({appliedDiscount.percentage}%)</span>
                  <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-[#163323]">
                  {remainingForFreeShipping === 0 ? 'FREE' : '$6.50'}
                </span>
              </div>
              <div className="pt-2 border-t border-[#FAF7F2] flex justify-between text-sm font-bold text-[#163323]">
                <span>Estimated Total</span>
                <span className="font-serif text-lg font-bold text-[#163323]">
                  ${(cartSubtotal + (remainingForFreeShipping === 0 ? 0 : 6.50)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button 
              onClick={() => {
                alert('✨ Thank you for choosing Lumière Botanicals! Proceeding to encrypted checkout portal.');
              }}
              className="w-full bg-[#163323] text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#244e39] transition-all flex items-center justify-center gap-2 shadow-md group"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C59A58] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Guarantees */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-[#8F9E8B] mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#163323]" />
              <span>Encrypted 256-Bit SSL Checkout &bull; 30-Day Guarantee</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
