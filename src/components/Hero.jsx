import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, HeartHandshake, Leaf, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-16 bg-[#FAF7F2]">
      {/* Background Decorative Blur Circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#E5C492]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#163323]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Dual Promotional Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card (8 Cols on Desktop) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#EFE9DE] via-[#F4ECE1] to-[#E9E1D2] border border-[#E4DCce] shadow-sm flex flex-col justify-between p-8 sm:p-12 min-h-[480px]">
            
            {/* Background Model Image with Flawless Gradient Mask (No hard edges or vertical lines) */}
            <div 
              className="absolute top-0 right-0 w-full sm:w-2/3 md:w-3/5 h-full z-0 pointer-events-none overflow-hidden"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.8) 40%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.8) 40%, black 100%)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80" 
                alt="Radiant natural beauty skincare"
                className="w-full h-full object-cover object-[center_20%] transform scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#EFE9DE]/60 via-transparent to-transparent" />
            </div>

            {/* Content Top */}
            <div className="relative z-10 max-w-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#163323]/10 text-[#163323] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm border border-[#163323]/15">
                <Sparkles className="w-3.5 h-3.5 text-[#C59A58]" />
                <span>Sacred Botanical Formulations</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] text-[#163323] font-bold leading-[1.15] mb-4">
                Reveal Your Skin's <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#C59A58] underline decoration-[#C59A58]/30 decoration-wavy">
                  Natural Radiance
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#4A524D] leading-relaxed mb-8 max-w-md">
                Handcrafted from cold-pressed botanicals, wild-harvested herbs, and bio-fermented peptides. Experience luminous hydration designed for everyday elegance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#best-sellers" 
                  className="inline-flex items-center gap-3 bg-[#163323] text-white px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide shadow-md hover:bg-[#244e39] hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 text-[#C59A58] group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#about-us" 
                  className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-[#163323] px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide border border-[#D5CBB9] transition-all"
                >
                  <span>Explore Ritual</span>
                </a>
              </div>
            </div>

            {/* Bottom Floating Stats / Feature Card */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#163323]/10 flex flex-wrap items-center gap-6 text-xs text-[#2D312E]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#163323] text-[#C59A58] flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <div className="font-bold text-[#163323] text-sm">4.9 / 5.0 Rating</div>
                  <div className="text-[11px] text-[#666D71]">From 12,500+ glowing reviews</div>
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-[#163323]/15" />

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#163323] text-[#C59A58] flex items-center justify-center font-bold">
                  🌿
                </div>
                <div>
                  <div className="font-bold text-[#163323] text-sm">100% Certified Organic</div>
                  <div className="text-[11px] text-[#666D71]">Non-comedogenic & clean</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Promotional Banner (4 Cols on Desktop) */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#163323] to-[#0E2317] text-white p-8 sm:p-10 flex flex-col justify-between shadow-sm min-h-[440px]">
            {/* Background Image / Botanical Accent */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury skincare cream" 
                className="w-full h-full object-cover transform scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2317] via-[#163323]/80 to-transparent" />
            </div>

            {/* Top Tag */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C59A58] bg-[#C59A58]/15 px-3 py-1 rounded-full border border-[#C59A58]/30">
                  Limited Edition
                </span>
                <span className="text-xs text-[#E5C492] font-semibold">Save 30%</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-snug mb-3">
                Summer Glow Revival Elixirs
              </h2>

              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed">
                Infused with rare damask rose, organic argan, and barrier ceramides for instant 72-hour moisture lock.
              </p>
            </div>

            {/* Product Highlight / Floating Pill */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/20 p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=200&q=80" 
                      alt="SilkSculpt Serum bottle" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">SilkSculpt Serum</div>
                    <div className="text-[11px] text-[#C59A58] font-bold">$35.00 <span className="line-through text-white/50 text-[10px]">$70.00</span></div>
                  </div>
                </div>

                <span className="text-[10px] font-bold bg-[#C59A58] text-[#163323] px-2 py-1 rounded-full">
                  -50%
                </span>
              </div>

              <a 
                href="#summer-glow" 
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C59A58] text-[#163323] py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md group"
              >
                <span>Shop Glow Deals</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Core Guarantees & Features Strip */}
        <div className="mt-8 bg-white rounded-2xl p-5 sm:p-6 border border-[#EFE9DE] shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            
            {/* Feature 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] text-[#163323] flex items-center justify-center shrink-0 border border-[#EFE9DE]">
                <Leaf className="w-5 h-5 text-[#163323]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#163323] mb-0.5">100% Organic & Vegan</h4>
                <p className="text-[11px] text-[#666D71] leading-tight">Cold-pressed botanical oils & extracts</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] text-[#163323] flex items-center justify-center shrink-0 border border-[#EFE9DE]">
                <Truck className="w-5 h-5 text-[#163323]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#163323] mb-0.5">Free Express Shipping</h4>
                <p className="text-[11px] text-[#666D71] leading-tight">On all orders worldwide over $75</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] text-[#163323] flex items-center justify-center shrink-0 border border-[#EFE9DE]">
                <ShieldCheck className="w-5 h-5 text-[#163323]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#163323] mb-0.5">Dermatologist Tested</h4>
                <p className="text-[11px] text-[#666D71] leading-tight">Hypoallergenic & non-comedogenic</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#FAF7F2] text-[#163323] flex items-center justify-center shrink-0 border border-[#EFE9DE]">
                <HeartHandshake className="w-5 h-5 text-[#163323]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#163323] mb-0.5">30-Day Glow Promise</h4>
                <p className="text-[11px] text-[#666D71] leading-tight">Love your skin or 100% money back</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
