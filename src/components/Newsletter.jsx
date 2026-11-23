import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useCartWishlist();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
    showToast('Welcome to the VIP Glow Club! Check your inbox for your 15% code.');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#163323] text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border border-[#C59A58]/10 pointer-events-none" />

      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#C59A58]/20 text-[#E5C492] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-[#C59A58]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIP Glow Club</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Unlock <span className="text-[#C59A58] italic font-normal">15% Off</span> Your First Ritual
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#FAF7F2]/80 max-w-lg mx-auto mb-8 leading-relaxed">
          Be first to receive private allocations of fresh seasonal harvests, customized botanical routine guides, and member-only gifts.
        </p>

        {/* Form */}
        {isSubmitted ? (
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 max-w-md mx-auto animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-[#C59A58] text-[#163323] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-1">You're on the Guest List!</h3>
            <p className="text-xs text-[#FAF7F2]/80">Use code <strong className="text-[#C59A58] font-bold">GLOW15</strong> at checkout for 15% off your first order.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="relative flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-lg">
              <div className="relative flex-1 flex items-center pl-4">
                <Mail className="w-4 h-4 text-[#C59A58] shrink-0" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-transparent px-3 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none"
                />
              </div>
              <button 
                type="submit"
                className="bg-[#C59A58] text-[#163323] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-md group shrink-0"
              >
                <span>Join Club</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        )}

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#FAF7F2]/60">
          <span className="flex items-center gap-1.5">
            <span className="text-[#C59A58]">✓</span> Zero Spam Promised
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#C59A58]">✓</span> Instant 15% Discount Code
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#C59A58]">✓</span> Unsubscribe Anytime
          </span>
        </div>

      </div>
    </section>
  );
};
