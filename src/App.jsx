import React from 'react';
import { CartWishlistProvider } from './context/CartWishlistContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { BestSellers } from './components/BestSellers';
import { SummerGlowDeals } from './components/SummerGlowDeals';
import { CategoryTicker } from './components/CategoryTicker';
import { DealsOfTheDay } from './components/DealsOfTheDay';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { InstagramFeed } from './components/InstagramFeed';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { ToastNotification } from './components/ToastNotification';

export function App() {
  return (
    <CartWishlistProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B2D2F] font-sans antialiased selection:bg-[#163323] selection:text-white">
        
        {/* 1. Header and Navigation */}
        <Navbar />

        {/* Main Content Sections (Strictly in the exact order of the reference video & screenshot) */}
        <main className="flex-grow">
          {/* 2. Hero / Promotional Banner Section */}
          <Hero />

          {/* 3. About Us Section (4-Photo Collage, Brand Story, Stats, Signature) */}
          <AboutUs />

          {/* 4. Our Best Sellers / Products Section (Category Tabs, Product Cards, Timers, Actions) */}
          <BestSellers />

          {/* 5. Special Savings / Summer Glow Deals Promotional Banner (Triple Panel & Live Countdown) */}
          <SummerGlowDeals />

          {/* 6. Scrolling Product Category Ticker (Animated Marquee) */}
          <CategoryTicker />

          {/* 7. Deals of the Day Section (Flash Sale, Stock Bars, Live Expiration) */}
          <DealsOfTheDay />

          {/* 8. Why Choose Us / Botanical Standards & Clinical Efficacy */}
          <WhyChooseUs />

          {/* 9. Testimonials / Verified Customer Reviews */}
          <Testimonials />

          {/* 10. News & Blogs Section (Our Latest News & Blogs) */}
          <BlogSection />

          {/* 11. Instagram Feed / Community Showcase */}
          <InstagramFeed />

          {/* 11. VIP Newsletter Subscription Banner */}
          <Newsletter />
        </main>

        {/* 12. Footer with Comprehensive Navigation and Brand Information */}
        <Footer />

        {/* Interactive E-commerce Overlays & Drawers */}
        <CartDrawer />
        <WishlistDrawer />
        <QuickViewModal />
        <SearchModal />
        <ToastNotification />

      </div>
    </CartWishlistProvider>
  );
}

export default App;
