// Catalog of luxury beauty & skincare products
export const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'skincare', name: 'Skin Care' },
  { id: 'makeup', name: 'Make Up' },
  { id: 'haircare', name: 'Hair Care' },
  { id: 'fragrances', name: 'Fragrances' },
  { id: 'nailcare', name: 'Nail Care' },
  { id: 'bodycare', name: 'Body Care' },
  { id: 'accessories', name: 'Accessories & Tools' }
];

export const PRODUCTS = [
  // 1. SilkSculpt Serum (Exact match to reference card 1)
  {
    id: 'silksculpt-serum',
    name: 'SilkSculpt Serum',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    rating: 4.9,
    reviewsCount: 142,
    price: 35.00,
    originalPrice: 70.00,
    discount: '50% off',
    hasCountdown: true,
    countdownDays: 5,
    isBestSeller: true,
    isDealOfDay: true,
    soldCount: 42,
    stockTotal: 50,
    badgeText: '50% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An intensive age-defying botanical elixir infused with bio-fermented peptides, cold-pressed botanical squalane, and multi-molecular hyaluronic acid to visibly firm, plump, and restore youthful elasticity.',
    keyIngredients: ['Bio-Peptides', 'Botanical Squalane', 'Hyaluronic Acid Complex', 'Camellia Seed Oil'],
    volume: '30 ml / 1.0 fl. oz.',
    skinType: 'All Skin Types, especially mature & dry',
    inStock: true
  },

  // 2. SilkSkin Serum (Exact match to reference card 2)
  {
    id: 'silkskin-serum',
    name: 'SilkSkin Serum',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    rating: 4.8,
    reviewsCount: 98,
    price: 48.00,
    originalPrice: 60.00,
    discount: '20% off',
    hasCountdown: false,
    isBestSeller: true,
    isDealOfDay: false,
    badgeText: '20% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Ultra-lightweight soothing barrier serum packed with Centella Asiatica, niacinamide, and fermented green tea extracts to calm redness and promote a silken glass-skin glow.',
    keyIngredients: ['Niacinamide 5%', 'Centella Asiatica', 'Fermented Green Tea', 'Ceramides NP'],
    volume: '50 ml / 1.7 fl. oz.',
    skinType: 'Sensitive, Oily & Combination Skin',
    inStock: true
  },

  // 3. Argan Glow (Exact match to reference card 3)
  {
    id: 'argan-glow',
    name: 'Argan Glow',
    category: 'haircare',
    categoryLabel: 'Hair Care',
    rating: 5.0,
    reviewsCount: 215,
    price: 63.00,
    originalPrice: 90.00,
    discount: '30% off',
    hasCountdown: false,
    isBestSeller: true,
    isDealOfDay: true,
    soldCount: 36,
    stockTotal: 45,
    badgeText: '30% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Pure Moroccan cold-pressed argan oil infused with golden jojoba and sweet almond elixir. Deeply conditions brittle strands, seals split ends, and leaves a weightless lustrous gloss.',
    keyIngredients: ['Organic Moroccan Argan Oil', 'Golden Jojoba Seed Oil', 'Vitamin E Acetate'],
    volume: '60 ml / 2.0 fl. oz.',
    skinType: 'All Hair Textures & Dry Scalp',
    inStock: true
  },

  // 4. Argan Nourish Cream (Exact match to reference card 4)
  {
    id: 'argan-nourish-cream',
    name: 'Argan Nourish Cream',
    category: 'bodycare',
    categoryLabel: 'Body Care',
    rating: 4.9,
    reviewsCount: 86,
    price: 45.00,
    originalPrice: 50.00,
    discount: '10% off',
    hasCountdown: false,
    isBestSeller: true,
    isDealOfDay: false,
    badgeText: '10% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A decadent whipped body butter rich in organic shea butter, unrefined argan oil, and soothing oat milk that melts on contact for 48-hour continuous hydration.',
    keyIngredients: ['Raw Shea Butter', 'Moroccan Argan Extract', 'Colloidal Oat Milk'],
    volume: '200 ml / 6.7 fl. oz.',
    skinType: 'Normal to Extra Dry Body Skin',
    inStock: true
  },

  // 5. Rose Petal Radiance Oil (Skincare)
  {
    id: 'rose-petal-oil',
    name: 'Rose Petal Radiance Oil',
    category: 'skincare',
    categoryLabel: 'Skin Care',
    rating: 4.9,
    reviewsCount: 164,
    price: 52.00,
    originalPrice: 65.00,
    discount: '20% off',
    hasCountdown: false,
    isBestSeller: true,
    isDealOfDay: true,
    soldCount: 29,
    stockTotal: 40,
    badgeText: '20% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Damask rose extract suspended in cold-pressed rosehip seed oil and evening primrose oil. Enriches the skin with vital omega fatty acids and imparts a dewy morning sheen.',
    keyIngredients: ['Damask Rose Oil', 'Organic Rosehip Seed Oil', 'Evening Primrose'],
    volume: '30 ml / 1.0 fl. oz.',
    skinType: 'Dry, Dull & Sensitive Skin',
    inStock: true
  },

  // 6. Velvet Satin Tinted Lip Glaze (Makeup)
  {
    id: 'velvet-lip-glaze',
    name: 'Velvet Satin Tinted Lip Glaze',
    category: 'makeup',
    categoryLabel: 'Make Up',
    rating: 4.8,
    reviewsCount: 112,
    price: 24.00,
    originalPrice: 32.00,
    discount: '25% off',
    hasCountdown: false,
    isBestSeller: false,
    isDealOfDay: false,
    badgeText: '25% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A cushiony, peptide-infused lip treatment delivering a buildable kiss of tint with non-sticky high-shine lacquer and nourishing botanical cupuaçu butter.',
    keyIngredients: ['Cupuaçu Butter', 'Maxi-Lip Peptides', 'Vitamin C Ester'],
    volume: '10 ml / 0.34 fl. oz.',
    skinType: 'All Lips',
    inStock: true
  },

  // 7. Golden Amber & Cedar Eau de Parfum (Fragrances)
  {
    id: 'golden-amber-parfum',
    name: 'Golden Amber & Cedar EDP',
    category: 'fragrances',
    categoryLabel: 'Fragrances',
    rating: 5.0,
    reviewsCount: 188,
    price: 88.00,
    originalPrice: 110.00,
    discount: '20% off',
    hasCountdown: false,
    isBestSeller: true,
    isDealOfDay: true,
    soldCount: 19,
    stockTotal: 25,
    badgeText: '20% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An intoxicating unisex botanical parfum with luminous Italian bergamot top notes, a heart of warm golden amber, and a lingering base of smoky Atlas cedarwood.',
    keyIngredients: ['Italian Bergamot', 'Warm Amber Resin', 'Atlas Cedar', 'Bourbon Vanilla'],
    volume: '75 ml / 2.5 fl. oz.',
    skinType: 'All Skin Types',
    inStock: true
  },

  // 8. Botanical Cuticle & Nail Elixir (Nail Care)
  {
    id: 'nail-elixir',
    name: 'Botanical Cuticle & Nail Elixir',
    category: 'nailcare',
    categoryLabel: 'Nail Care',
    rating: 4.7,
    reviewsCount: 74,
    price: 22.00,
    originalPrice: 28.00,
    discount: '21% off',
    hasCountdown: false,
    isBestSeller: false,
    isDealOfDay: false,
    badgeText: '21% off',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A restorative brush-on botanical treatment with keratin boosters, tea tree, and sweet almond oil that fortifies weak nails and softens cuticles.',
    keyIngredients: ['Biotin', 'Sweet Almond Oil', 'Myrrh Gum Extract', 'Vitamin E'],
    volume: '15 ml / 0.5 fl. oz.',
    skinType: 'Brittle Nails & Dry Cuticles',
    inStock: true
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophia Laurent',
    location: 'Paris, France',
    rating: 5,
    role: 'Verified Buyer',
    product: 'SilkSculpt Serum',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    title: 'Transformative glow in just two weeks!',
    review: 'I have tried high-end luxury serums for years, but nothing rivals SilkSculpt. My fine expression lines are noticeably softened and my skin has that youthful, lit-from-within luminosity.'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    location: 'Milan, Italy',
    rating: 5,
    role: 'Verified Buyer',
    product: 'Argan Glow Hair Elixir',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    title: 'The ultimate holy grail hair elixir',
    review: 'Leaves my curls glossy, silky, and frizz-free without feeling weighed down. The subtle botanical fragrance is so luxurious and calming. Highly recommended!'
  },
  {
    id: 3,
    name: 'Camille Dubois',
    location: 'Geneva, Switzerland',
    rating: 5,
    role: 'Verified Buyer',
    product: 'Argan Nourish Cream',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    title: 'Pure indulgence for dry winter skin',
    review: 'The rich whipped texture melts like butter. It absorbs completely and keeps my skin supple throughout chilly dry days. The packaging is also stunning on the vanity.'
  }
];

export const BRAND_STATS = [
  { value: '24+', label: 'Categories' },
  { value: '2500+', label: 'Products' },
  { value: '99%', label: 'Satisfied Customer' }
];

export const MARQUEE_ITEMS = [
  'Skin Care',
  'Makeup',
  'Hair Care',
  'Fragrances',
  'Nail Care',
  'Body Care',
  'Accessories & Tools',
  '100% Organic Extracts',
  'Clean Beauty Certified',
  'Cruelty Free & Vegan',
  'Dermatologist Tested',
  'Sustainable Glass Bottles'
];
