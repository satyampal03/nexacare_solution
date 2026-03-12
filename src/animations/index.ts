import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const revealAnimation = (element: HTMLElement | null, delay: number = 0) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    }
  );
};

export const staggerReveal = (elements: HTMLElement[], delay: number = 0) => {
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
      },
    }
  );
};

export const parallaxEffect = (element: HTMLElement | null, speed: number = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const textReveal = (element: HTMLElement | null) => {
  if (!element) return;

  const text = element.innerText;
  element.innerHTML = text
    .split('')
    .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  const chars = element.querySelectorAll('span');

  gsap.fromTo(
    chars,
    { y: '100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration: 0.5,
      stagger: 0.02,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
      },
    }
  );
};
