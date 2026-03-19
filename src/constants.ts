import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'We help businesses increase visibility, attract customers, and generate qualified leads through advanced digital marketing strategies.',
    color: 'from-primary to-secondary',
    items: [
      'Search Engine Optimization (SEO)',
      'Google Ads Management',
      'Meta Ads Campaigns',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Influencer Marketing'
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'We design and develop high-performance websites that combine stunning visuals with seamless user experience.',
    color: 'from-primary to-secondary',

    items: [
      'Website Design',
      'UI/UX Design',
      'WordPress Development',
      'Ecommerce Website Development',
      'Landing Page Design',
      'Website Maintenance'
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Creative',
    description: 'We build powerful brands that communicate professionalism, trust, and uniqueness in competitive markets.',
    color: 'from-primary to-secondary',


    items: [
      'Logo Design',
      'Brand Identity',
      'Brand Strategy',
      'Corporate Branding',
      'Creative Design',
      'Marketing Graphics'
    ]
  },
  {
    id: 'bpo',
    title: 'BPO & Call Centre Services',
    description: 'Our BPO services help companies reduce operational costs while improving customer support and business efficiency.',
    color: 'from-primary to-secondary',

    items: [
      'Inbound Call Support',
      'Outbound Sales Campaigns',
      'Customer Support',
      'Technical Support',
      'Live Chat Support',
      'Email Support',
      'Lead Generation',
      'Appointment Setting'
    ]
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    title: 'Luxe Real Estate',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1600585154340-be6199f71009?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Three.js', 'GSAP']
  },
  {
    title: 'Global Logistics Campaign',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    tags: ['SEO', 'Google Ads', 'Meta']
  },
  {
    title: 'TechSupport Pro',
    category: 'BPO Services',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80',
    tags: ['24/7 Support', 'Technical', 'Live Chat']
  }
];

export const PROCESS_STEPS = [
  { id: '01', title: 'Discovery', description: 'Deep dive into your business goals and market landscape.' },
  { id: '02', title: 'Strategy', description: 'Crafting a bespoke roadmap for your digital success.' },
  { id: '03', title: 'Design', description: 'Creating stunning visuals that resonate with your audience.' },
  { id: '04', title: 'Development', description: 'Building robust, scalable solutions with clean code.' },
  { id: '05', title: 'Launch', description: 'Deploying your project with precision and care.' },
  { id: '06', title: 'Growth', description: 'Continuous optimization and support for long-term success.' }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    content: 'Nexacare Solution helped our business improve both marketing performance and customer support efficiency.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    name: 'Ahmed Al-Maktoum',
    role: 'Founder, Dubai Ventures',
    content: 'The best digital agency in Dubai. Their BPO services are second to none.',
    image: 'https://images.pexels.com/photos/35055806/pexels-photo-35055806.jpeg'
  }
];

export const BLOG_POSTS = [
  {
    title: 'Digital Marketing Trends 2026',
    category: 'Marketing',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Benefits of Outsourcing',
    category: 'BPO',
    date: 'March 05, 2026',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959d93?auto=format&fit=crop&w=800&q=80'
  }
];  
