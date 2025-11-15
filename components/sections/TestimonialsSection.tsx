import React from 'react';
import { TESTIMONIALS } from '../../constants/testimonials';

export const TestimonialsSection: React.FC = () => {
  const gradients = [
    'from-yellow-400/10 to-pink-500/10 border-yellow-400/30',
    'from-pink-500/10 to-orange-500/10 border-pink-500/30',
    'from-orange-500/10 to-amber-400/10 border-orange-500/30'
  ];

  const avatarGradients = [
    'from-yellow-400 to-pink-500',
    'from-pink-500 to-orange-500',
    'from-orange-500 to-amber-500'
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Loved by Sales Teams Worldwide</h2>
          <p className="text-xl text-gray-300">See what our customers are saying about EazyReach</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className={`bg-gradient-to-br ${gradients[index]} rounded-2xl p-8 border hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300`}>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 text-yellow-400 fill-current">⭐</div>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">&quot;{testimonial.testimonial}&quot;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${avatarGradients[index]} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
