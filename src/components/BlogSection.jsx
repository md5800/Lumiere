import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Your Ultimate Guide to Healthy, Radiant Skin',
    category: 'Skin Care',
    author: 'Jenny Alexander',
    date: '22 January 2025',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    hasArrowBadge: true,
    excerpt: 'Discover the essential daily steps, active botanical ingredients, and ritual techniques to unlock a natural lit-from-within glow.'
  },
  {
    id: 2,
    title: 'The Best Body Care Products for Every Skin Type',
    category: 'Body Care',
    author: 'Jenny Alexander',
    date: '21 January 2025',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    hasArrowBadge: false,
    excerpt: 'From decadent whipped shea butters to silky botanical body oils, explore our guide to head-to-toe deep nourishment.'
  },
  {
    id: 3,
    title: 'Why Sun Protection is Essential for Healthy Skin',
    category: 'Skin Care',
    author: 'Jenny Alexander',
    date: '20 January 2025',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    hasArrowBadge: false,
    excerpt: 'Understand how mineral antioxidants and broad-spectrum botanicals shield your skin barrier from premature aging and UV stress.'
  }
];

export const BlogSection = () => {
  return (
    <section id="blog-section" className="py-16 sm:py-20 bg-[#FAF7F2] relative">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Row: Subtitle, Title & "View All Blogs" Button (Matching Screenshot) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#666D71] font-semibold mb-2 block">
              News & Blogs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163323] leading-tight">
              Our Latest <span className="text-[#C59A58] italic font-normal">News & Blogs</span>
            </h2>
          </div>

          <a 
            href="#blog-section"
            className="inline-flex items-center gap-2 bg-[#163323] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-[#244e39] transition-all self-start sm:self-auto shadow-sm group"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59A58] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Blog Cards Grid (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container with Category Badge & Arrow Pill */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-[#EFE9DE] mb-4 shadow-sm">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Dark Green Category Badge (Bottom Left) */}
                  <div className="absolute bottom-3 left-3 bg-[#163323] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md z-10">
                    {post.category}
                  </div>

                  {/* Golden Arrow Badge (Visible on Card 1 as shown in screenshot, and on hover for others) */}
                  {post.hasArrowBadge ? (
                    <div className="absolute top-1/2 right-6 -translate-y-1/2 w-10 h-10 rounded-full bg-[#C59A58] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-[#163323] opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-md transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Author & Date Meta */}
                <div className="flex items-center gap-2 text-xs text-[#666D71] mb-2 font-medium">
                  <span>{post.author}</span>
                  <span className="text-[#C59A58] font-bold">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Article Headline */}
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#163323] group-hover:text-[#C59A58] transition-colors leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>
              </div>

              {/* Read More Link */}
              <div>
                <span className="text-xs font-semibold text-[#C59A58] group-hover:text-[#A87E3E] inline-flex items-center gap-1 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
