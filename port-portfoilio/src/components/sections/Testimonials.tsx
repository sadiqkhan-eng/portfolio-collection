'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { SlideIn } from '@/components/animations/SlideIn';
import { testimonials } from '@/lib/data/testimonials';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const platformColors: Record<string, string> = {
  upwork: 'bg-green-500',
  fiverr: 'bg-emerald-500',
  linkedin: 'bg-blue-500',
  other: 'bg-gray-500',
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What clients say about working with me"
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Carousel */}
          <SlideIn direction="up">
            <GlassCard strong className="relative">
              <Quote className="absolute top-6 right-6 text-primary/20" size={48} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </div>
                    </div>
                    <div className={`ml-auto px-3 py-1 rounded-full text-white text-xs font-medium ${platformColors[currentTestimonial.platform]}`}>
                      {currentTestimonial.platform}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  ← Previous
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  Next →
                </button>
              </div>
            </GlassCard>
          </SlideIn>

          {/* All Testimonials Grid (Optional - shows all at once) */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <SlideIn key={testimonial.id} direction="up" delay={index * 0.1}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-white text-xs ${platformColors[testimonial.platform]}`}>
                      {testimonial.platform}
                    </div>
                  </div>
                </GlassCard>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
