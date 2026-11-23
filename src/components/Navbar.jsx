import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  Globe, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const { 
    cartTotalItems, 
    cartSubtotal, 
    setIsCartOpen, 
    wishlistItems, 
    setIsWishlistOpen, 
    setIsSearchOpen 
  } = useCartWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#163323] text-[#FAF7F2] text-xs py-2 px-4 transition-all border-b border-[#244e39]">
        <div className="container-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#C59A58] text-[#163323] text-[10px] font-bold">★</span>
            <span className="font-light tracking-wide text-xs">
              Complimentary Express Shipping on Orders Over <strong className="text-[#C59A58] font-semibold">$75</strong> &bull; Use Code: <span className="underline decoration-[#C59A58] font-semibold tracking-wider">GLOW20</span> for 20% Off
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[11px] text-[#E5C492]">
            <a href="#about-us" className="hover:text-white transition-colors">Our Story</a>
            <span className="text-[#2F523D]">&bull;</span>
            <a href="#deals-section" className="hover:text-white transition-colors">Special Offers</a>
            <span className="text-[#2F523D]">&bull;</span>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5" />
              <span>USD ($) &bull; EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#EFE9DE]' 
            : 'bg-[#FAF7F2]/95 backdrop-blur-md py-4 sm:py-5 border-b border-[#EFE9DE]'
        }`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] flex items-center justify-between gap-3 sm:gap-4">
          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 rounded-lg text-[#163323] hover:bg-[#EFE9DE] transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="#" className="group flex items-center gap-2 text-decoration-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#163323] text-[#C59A58] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl">🌿</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-[0.18em] text-[#163323] uppercase">
                  LUMIÈRE
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#C59A58] font-semibold -mt-1">
                  Botanicals
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links (Strictly Single Line with whitespace-nowrap) */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 text-[13px] xl:text-sm font-medium text-[#2D312E] whitespace-nowrap">
            <a href="#" className="text-[#163323] font-semibold relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#163323] transition-colors">
              Home
            </a>
            
            <a href="#best-sellers" className="hover:text-[#163323] transition-colors relative py-1 whitespace-nowrap shrink-0 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#C59A58]">
              Best Sellers
            </a>

            {/* Categories Dropdown */}
            <div 
              className="relative py-1 cursor-pointer whitespace-nowrap shrink-0"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-[#163323] transition-colors focus:outline-none whitespace-nowrap"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                <span>Categories</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C59A58]" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#EFE9DE] py-3 mt-1 z-50 animate-fadeIn">
                  <div className="px-4 py-2 border-b border-[#FAF7F2]">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#A87E3E]">Shop By Ritual</span>
                  </div>
                  <a href="#best-sellers" className="flex items-center justify-between px-4 py-2.5 text-xs text-[#2D312E] hover:bg-[#FAF7F2] hover:text-[#163323] transition-colors">
                    <span>Skin Care Serums</span>
                    <span className="text-[10px] bg-[#E9EFE8] text-[#163323] px-1.5 py-0.5 rounded font-semibold">Popular</span>
                  </a>
                  <a href="#best-sellers" className="flex items-center justify-between px-4 py-2.5 text-xs text-[#2D312E] hover:bg-[#FAF7F2] hover:text-[#163323] transition-colors">
                    <span>Hair Elixirs</span>
                  </a>
                  <a href="#best-sellers" className="flex items-center justify-between px-4 py-2.5 text-xs text-[#2D312E] hover:bg-[#FAF7F2] hover:text-[#163323] transition-colors">
                    <span>Body Butters & Balms</span>
                  </a>
                  <a href="#best-sellers" className="flex items-center justify-between px-4 py-2.5 text-xs text-[#2D312E] hover:bg-[#FAF7F2] hover:text-[#163323] transition-colors">
                    <span>Botanical Fragrances</span>
                  </a>
                  <a href="#best-sellers" className="flex items-center justify-between px-4 py-2.5 text-xs text-[#2D312E] hover:bg-[#FAF7F2] hover:text-[#163323] transition-colors">
                    <span>Gua Sha & Facial Tools</span>
                  </a>
                </div>
              )}
            </div>

            <a href="#about-us" className="hover:text-[#163323] transition-colors relative py-1 whitespace-nowrap shrink-0 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#C59A58]">
              About Us
            </a>

            <a href="#summer-glow" className="flex items-center gap-1.5 text-[#163323] hover:text-[#C59A58] transition-colors whitespace-nowrap shrink-0">
              <span className="text-xs">✨</span>
              <span>Summer Deals</span>
              <span className="text-[10px] bg-[#163323] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">50% Off</span>
            </a>

            <a href="#deals-section" className="hover:text-[#163323] transition-colors relative py-1 whitespace-nowrap shrink-0 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#C59A58]">
              Deals of the Day
            </a>

            <a href="#reviews-section" className="hover:text-[#163323] transition-colors relative py-1 whitespace-nowrap shrink-0 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#C59A58]">
              Reviews
            </a>

            <a href="#blog-section" className="hover:text-[#163323] transition-colors relative py-1 whitespace-nowrap shrink-0 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#C59A58]">
              Blogs
            </a>
          </div>

          {/* Right Action Icons (Search, Wishlist, Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-[#163323] hover:bg-[#EFE9DE] transition-colors relative"
              aria-label="Search products"
              title="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button 
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-[#163323] hover:bg-[#EFE9DE] transition-colors relative"
              aria-label="Wishlist"
              title="Saved items"
            >
              <Heart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C59A58] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlistItems.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#163323] text-white pl-3 pr-3.5 py-2 rounded-full hover:bg-[#244e39] transition-all shadow-sm hover:shadow"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#C59A58]" />
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#C59A58] text-[#163323] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartTotalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
                ${cartSubtotal.toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-[#FAF7F2] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideIn">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EFE9DE]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#163323] text-[#C59A58] flex items-center justify-center">
                    <span>🌿</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold tracking-wider text-[#163323]">LUMIÈRE</span>
                    <span className="text-[8px] uppercase tracking-widest text-[#C59A58] font-bold">Botanicals</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#163323] hover:bg-[#EFE9DE] rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Search */}
              <div className="mt-5">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#EFE9DE] text-xs text-[#8F9E8B] shadow-inner"
                >
                  <Search className="w-4 h-4 text-[#163323]" />
                  <span>Search serums, creams, elixirs...</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col space-y-3 font-medium text-sm text-[#2D312E]">
                <a 
                  href="#" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-between text-[#163323] font-semibold"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-[#C59A58]" />
                </a>
                <a 
                  href="#best-sellers" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>Best Sellers</span>
                  <span className="text-[10px] bg-[#163323] text-white px-2 py-0.5 rounded-full font-bold">Hot</span>
                </a>
                <a 
                  href="#about-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>About Us</span>
                </a>
                <a 
                  href="#summer-glow" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>Summer Glow Deals</span>
                  <span className="text-[10px] bg-[#C59A58] text-[#163323] px-2 py-0.5 rounded-full font-bold">50% Off</span>
                </a>
                <a 
                  href="#deals-section" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>Deals of the Day</span>
                </a>
                <a 
                  href="#why-choose-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>Botanical Rituals</span>
                </a>
                <a 
                  href="#reviews-section" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>Customer Reviews</span>
                </a>
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-[#EFE9DE]">
              <div className="bg-[#163323] text-white p-4 rounded-xl text-center">
                <span className="text-xs text-[#E5C492] font-serif block mb-1">VIP Glow Member?</span>
                <p className="text-[11px] text-[#FAF7F2]/80 mb-3">Sign in to earn 2x glow points on your order</p>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#C59A58] text-[#163323] text-xs font-bold py-2 rounded-lg hover:bg-white transition-colors"
                >
                  Sign In / Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
