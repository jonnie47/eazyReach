import React from 'react';
import { TESTIMONIALS } from '../../constants/testimonials';

export const TestimonialsSection: React.FC = () => {
  const gradients = [
    'from-blue-50 to-white border-blue-100',
    'from-purple-50 to-white border-purple-100',
    'from-green-50 to-white border-green-100'
  ];

  const avatarGradients = [
    'from-blue-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-blue-600'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Sales Teams Worldwide</h2>
          <p className="text-xl text-gray-600">See what our customers are saying about EazyReach</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className={`bg-gradient-to-br ${gradients[index]} rounded-2xl p-8 border hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 text-yellow-400 fill-current">⭐</div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;{testimonial.testimonial}&quot;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${avatarGradients[index]} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
