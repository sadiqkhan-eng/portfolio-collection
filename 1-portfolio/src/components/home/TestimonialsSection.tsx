// src/components/home/TestimonialsSection.tsx
import React from 'react';
import Image from 'next/image';
import SpotlightCard from '../ui/SpotlightCard';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'CEO of InnovateX',
    quote: 'The developer transformed our outdated platform into a modern, AI-powered solution. The UI/UX is exceptional, and performance has significantly improved!',
    rating: 5,
    avatar: '/placeholder-avatar.png',
  },
  {
    id: 2,
    name: 'Mark Davis',
    title: 'Founder of GrowthMark',
    quote: 'Our new SaaS product, built by this developer, is a game-changer. The AI integrations are seamless, and the scalability is exactly what we needed.',
    rating: 5,
    avatar: '/placeholder-avatar.png',
  },
  {
    id: 3,
    name: 'Emily White',
    title: 'CTO of DataFlow',
    quote: 'Impressed by the attention to detail and the commitment to performance. Our dashboard is now incredibly fast and a joy to use.',
    rating: 5,
    avatar: '/placeholder-avatar.png',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-black via-deep-purple to-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <SpotlightCard
              key={testimonial.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
            >
              <div className="relative z-10"> {/* Ensure content is above the spotlight */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-xl font-semibold text-violet-300">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
                <div className="flex justify-center mt-2">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.817-2.034a1 1 0 00-1.176 0l-2.817 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;