import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E2317] text-[#FAF7F2] pt-16 pb-8 border-t border-[#1F4331]">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#163323] text-[#C59A58] border border-[#C59A58]/30 flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.18em] text-white uppercase block">
                  LUMIÈRE
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#C59A58] font-semibold -mt-1 block">
                  Botanicals
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed mb-6 max-w-sm">
              Artisan-crafted botanical skincare born in southern botanical gardens. We unite wild-harvested herbs, bio-fermented peptides, and pure cold-pressed oils for effortless radiance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#C59A58] hover:border-[#C59A58] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#C59A58] hover:border-[#C59A58] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#C59A58] hover:border-[#C59A58] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#C59A58] hover:border-[#C59A58] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Rituals (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C59A58] mb-4">
              Rituals
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/75">
              <li><a href="#best-sellers" className="hover:text-white transition-colors">SilkSculpt Serums</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Nourishing Body Creams</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Argan Hair Elixirs</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Botanical Fragrances</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Rose Quartz Gua Sha</a></li>
              <li><a href="#summer-glow" className="hover:text-white transition-colors">Summer Glow Sets</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C59A58] mb-4">
              Customer Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/75">
              <li><a href="#" className="hover:text-white transition-colors">Complimentary Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Tracking & Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">30-Day Glow Guarantee</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Botanical Ingredient Glossary</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recycling & Jar Refills</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP Glow Membership</a></li>
            </ul>
          </div>

          {/* Column 4: Atelier & Contact (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C59A58] mb-4">
              Our Botanical Atelier
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59A58] shrink-0 mt-0.5" />
                <span>428 Rue de la Paix, 75001 Paris, France</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59A58] shrink-0" />
                <span>+1 (800) 459-GLOW</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59A58] shrink-0" />
                <span>concierge@lumierebotanicals.com</span>
              </div>
              <div className="pt-2">
                <span className="inline-block text-[11px] text-[#C59A58] bg-[#C59A58]/15 px-3 py-1 rounded-full border border-[#C59A58]/30">
                  Concierge Hours: Mon–Sat 9AM–6PM EST
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Icons & Scroll to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <div>
            &copy; {new Date().getFullYear()} Lumière Botanicals Inc. All Rights Reserved. Crafted with pure devotion.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wider text-white">VISA</span>
            <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wider text-white">MC</span>
            <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wider text-white">AMEX</span>
            <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wider text-white">APPLE PAY</span>
            <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wider text-white">PAYPAL</span>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#C59A58] hover:text-white transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
