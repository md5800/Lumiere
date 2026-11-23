import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/productsData';

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  // Pre-seed cart with 1 initial product for instant visual richness
  const [cartItems, setCartItems] = useState([
    {
      product: PRODUCTS[0], // SilkSculpt Serum
      quantity: 1
    }
  ]);

  const [wishlistItems, setWishlistItems] = useState([PRODUCTS[2]]); // Argan Glow
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Discount code state
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState({ code: '', percentage: 0 });

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, product = null, type = 'cart') => {
    setToast({
      message,
      product,
      type,
      id: Date.now()
    });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to cart`, product, 'cart');
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    const exists = wishlistItems.some(item => item.id === product.id);
    if (exists) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
      showToast(`Removed from wishlist`, product, 'wishlist');
    } else {
      setWishlistItems(prev => [...prev, product]);
      showToast(`Added to wishlist`, product, 'wishlist');
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  // Cart totals
  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = appliedDiscount.percentage > 0
    ? (rawSubtotal * appliedDiscount.percentage) / 100
    : 0;

  const cartSubtotal = Math.max(0, rawSubtotal - discountAmount);
  const cartTotalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const freeShippingThreshold = 75.00;
  const progressToFreeShipping = Math.min(
    100,
    Math.round((rawSubtotal / freeShippingThreshold) * 100)
  );
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'GLOW20') {
      setAppliedDiscount({ code: 'GLOW20', percentage: 20 });
      return { success: true, message: 'Coupon GLOW20 applied! 20% discount granted.' };
    } else if (cleanCode === 'SUMMER50') {
      setAppliedDiscount({ code: 'SUMMER50', percentage: 50 });
      return { success: true, message: 'Coupon SUMMER50 applied! 50% discount granted.' };
    } else {
      return { success: false, message: 'Invalid coupon code. Try GLOW20!' };
    }
  };

  const removePromoCode = () => {
    setAppliedDiscount({ code: '', percentage: 0 });
    setDiscountCode('');
  };

  return (
    <CartWishlistContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        rawSubtotal,
        cartTotalItems,
        discountAmount,
        appliedDiscount,
        applyPromoCode,
        removePromoCode,
        discountCode,
        setDiscountCode,
        freeShippingThreshold,
        progressToFreeShipping,
        remainingForFreeShipping,
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        setToast,
        showToast
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);
