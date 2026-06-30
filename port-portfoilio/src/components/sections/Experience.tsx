'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SlideIn } from '@/components/animations/SlideIn';
import { experiences } from '@/lib/data/experience';
import { Calendar, Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and achievements"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <SlideIn key={exp.id} direction="up" delay={index * 0.2}>
                  <div className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                    {/* Content */}
                    <div className="md:ml-20">
                      <GlassCard>
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Briefcase size={16} />
                              <span>{exp.company}</span>
                              <Badge variant="secondary">{exp.type}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={16} />
                            <span>
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
