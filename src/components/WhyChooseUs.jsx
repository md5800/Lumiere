import React from 'react';
import { Droplets, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <Droplets className="w-6 h-6 text-[#163323]" />,
      title: 'Cold-Pressed Botanical Actives',
      description: 'Extracted using gentle low-temperature processes to preserve 100% of the active antioxidants, vitamins, and omegas.',
      badge: 'Certified Organic'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#163323]" />,
      title: 'Dermatologist Backed & Tested',
      description: 'Formulated in European clinical laboratories. Hypoallergenic, non-comedogenic, and rigorously tested on sensitive skin.',
      badge: 'Zero Irritants'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#163323]" />,
      title: 'Cruelty-Free & 100% Vegan',
      description: 'Never tested on animals. Leaping Bunny approved and certified by PETA, crafted with utmost respect for living creatures.',
      badge: 'Leaping Bunny'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#163323]" />,
      title: 'Biophotonic Glass Packaging',
      description: 'Bottled in luxury violet glass that blocks harmful light frequencies, naturally energizing and extending formula potency.',
      badge: 'Zero Plastic Waste'
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#F5EFE6]/60 relative border-t border-[#EFE9DE]">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#666D71] font-semibold mb-2 block">
            The Botanical Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163323] leading-tight mb-4">
            Why Discerning Skin Chooses <span className="text-[#C59A58] italic font-normal">Lumière</span>
          </h2>
          <p className="text-sm text-[#575F59] leading-relaxed">
            Every drop is crafted with an uncompromising dedication to botanical purity, ethical sourcing, and visible scientific results.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-7 border border-[#EFE9DE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EFE9DE] flex items-center justify-center group-hover:bg-[#163323] transition-colors">
                    <span className="group-hover:text-white transition-colors">
                      {pillar.icon}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#163323] bg-[#E9EFE8] px-2.5 py-1 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#163323] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#575F59] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#FAF7F2] flex items-center gap-2 text-xs font-semibold text-[#163323]">
                <CheckCircle2 className="w-4 h-4 text-[#C59A58]" />
                <span>Verified Clean Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
