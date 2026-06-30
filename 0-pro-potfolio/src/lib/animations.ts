import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: Element | string, delay = 0, duration = 0.8) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  return gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
  );
};

export const fadeIn = (element: Element | string, delay = 0, duration = 0.6) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  return gsap.fromTo(
    el,
    { opacity: 0 },
    { opacity: 1, duration, delay, ease: 'power2.out' }
  );
};

export const slideInLeft = (element: Element | string, delay = 0, duration = 0.8) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  return gsap.fromTo(
    el,
    { opacity: 0, x: -60 },
    { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
  );
};

export const slideInRight = (element: Element | string, delay = 0, duration = 0.8) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  return gsap.fromTo(
    el,
    { opacity: 0, x: 60 },
    { opacity: 1, x: 0, duration, delay, ease: 'power3.out' }
  );
};

export const scaleIn = (element: Element | string, delay = 0, duration = 0.6) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  return gsap.fromTo(
    el,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration, delay, ease: 'back.out(1.7)' }
  );
};

export const staggerFadeInUp = (
  elements: Element[] | string,
  stagger = 0.1,
  delay = 0,
  duration = 0.6
) => {
  const els = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
  if (!els || els.length === 0) return;
  return gsap.fromTo(
    els,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration, delay, ease: 'power3.out', stagger }
  );
};

export const createScrollReveal = (
  element: Element | string,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
  } = {}
) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  const { start = 'top 85%', end = 'bottom 20%', scrub = false } = options;
  
  return gsap.fromTo(
    el,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub,
      },
    }
  );
};

export const createTimeline = () => {
  return gsap.timeline({ defaults: { ease: 'power3.out' } });
};

export const heroTimeline = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
    .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
    .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .fromTo('.hero-stats', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2');
  
  return tl;
};

export const sectionTimeline = (sectionEl: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });

  const header = sectionEl.querySelector('.section-header');
  if (header) {
    tl.fromTo(header, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
  }

  tl.fromTo(
    sectionEl.querySelectorAll('.stagger-item'),
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
    '-=0.3'
  );

  return tl;
};

export const magneticEffect = (element: HTMLElement, strength = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

export const textReveal = (element: Element | string) => {
  const text = typeof element === 'string' ? document.querySelector(element) : element;
  if (!text) return;

  const words = text.textContent?.split(' ') || [];
  text.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

  return gsap.fromTo(
    text.querySelectorAll('.word'),
    { opacity: 0, y: '100%' },
    { opacity: 1, y: '0%', duration: 0.8, stagger: 0.05, ease: 'power3.out' }
  );
};

export const counterAnimation = (element: Element | string, endValue: number, duration = 2) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const obj = { value: 0 };
  
  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = Math.round(obj.value).toLocaleString();
    },
  });
};

export const parallaxEffect = (element: Element | string, speed = 0.5) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  return gsap.to(el, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const hoverScale = (selector: string, scale = 1.05) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale, duration: 0.3, ease: 'power2.out' });
    });
    
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });
};

export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};

export { gsap, ScrollTrigger };