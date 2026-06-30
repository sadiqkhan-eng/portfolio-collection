'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { SlideIn } from '@/components/animations/SlideIn';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const highlights = [
    'Modern Web Development',
    'AI Integration Specialist',
    'SaaS Dashboard Expert',
    'Responsive Design',
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image/Visual */}
          <SlideIn direction="left">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <h3 className="text-2xl font-bold text-foreground">Your Name</h3>
                    <p className="text-muted-foreground mt-2">Modern Web & AI Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Content */}
          <SlideIn direction="right">
            <Card>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Modern Web & AI Developer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am a Modern Web & AI Developer focused on building high-performance web applications,
                SaaS dashboards, and AI-integrated solutions. I specialize in creating clean, scalable,
                and user-friendly digital products that help businesses grow online.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With expertise in Next.js, React, TypeScript, and modern AI technologies, I deliver
                premium solutions that combine beautiful design with powerful functionality. My goal
                is to help startups and businesses establish a strong digital presence.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
