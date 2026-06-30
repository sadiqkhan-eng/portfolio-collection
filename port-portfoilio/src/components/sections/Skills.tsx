'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { skillCategories } from '@/lib/data/skills';

export function Skills() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'primary';
      case 'advanced':
        return 'accent';
      case 'intermediate':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to build modern web applications"
        />

        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <SlideIn
                  key={category.category}
                  direction={categoryIndex % 2 === 0 ? 'left' : 'right'}
                  delay={categoryIndex * 0.1}
                >
                  <div className="glass rounded-xl p-6 h-full">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant={getLevelColor(skill.level) as any}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
