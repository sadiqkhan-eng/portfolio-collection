'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { services } from '@/lib/data/services';
import {
  Layout,
  Layers,
  MessageSquare,
  BarChart3,
  Copy,
  Plug,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Layout,
  Layers,
  MessageSquare,
  BarChart3,
  Copy,
  Plug,
};

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Services I Offer"
          subtitle="Professional web development services tailored to your needs"
        />

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Layout;
              return (
                <SlideIn key={service.id} direction="up" delay={index * 0.1}>
                  <GlassCard className="h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={28} />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2
                            className="text-primary flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </SlideIn>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
