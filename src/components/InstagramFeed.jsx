import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80',
      likes: '2.4k',
      comments: '142'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80',
      likes: '1.8k',
      comments: '98'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
      likes: '3.1k',
      comments: '230'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80',
      likes: '1.5k',
      comments: '77'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80',
      likes: '4.2k',
      comments: '315'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80',
      likes: '2.1k',
      comments: '118'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#EFE9DE]">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C59A58] font-bold mb-2">
            <InstagramIcon className="w-4 h-4 text-[#C59A58]" />
            <span>Join The Community</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163323] leading-tight mb-2">
            Follow Us <span className="text-[#C59A58] italic font-normal">@LumiereBotanicals</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#666D71]">
            Tag #MyLumiereGlow to be featured on our global editorial canvas.
          </p>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map(post => (
            <div 
              key={post.id}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
            >
              <img 
                src={post.image} 
                alt="Instagram community post" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Stats */}
              <div className="absolute inset-0 bg-[#163323]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 text-white p-2">
                <InstagramIcon className="w-6 h-6 text-[#C59A58]" />
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
