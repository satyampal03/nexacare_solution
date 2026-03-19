import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import * as THREE from 'three';
import Magnetic from '../components/Magnetic';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
      colors[i] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Floating Spheres
    const sphereGroup = new THREE.Group();
    const sphereGeom = new THREE.SphereGeometry(1, 32, 32);
    
    for(let i = 0; i < 3; i++) {
      const mat = new THREE.MeshPhongMaterial({
        color: i === 0 ? 0x6366F1 : i === 1 ? 0x8B5CF6 : 0x06B6D4,
        transparent: true,
        opacity: 0.1,
        wireframe: true
      });
      const sphere = new THREE.Mesh(sphereGeom, mat);
      sphere.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5);
      sphere.scale.setScalar(Math.random() * 2 + 1);
      sphereGroup.add(sphere);
    }
    scene.add(sphereGroup);

    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 5;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      
      sphereGroup.children.forEach((sphere, i) => {
        sphere.rotation.y += 0.01;
        sphere.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
      });

      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // GSAP Animations
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = text.split(' ').map(word => 
        `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`
      ).join(' ');
      
      gsap.to(titleRef.current.querySelectorAll('span span'), {
        y: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5
      });
    }

    if (subtextRef.current) {
      gsap.fromTo(subtextRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: 'power3.out' }
      );
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-6 backdrop-blur-sm">
            Award-Winning Digital Agency
          </span>
          <h1 
            ref={titleRef}
            className="text-5xl md:text-8xl font-display font-bold tracking-tight leading-[1.1] mb-8 flex flex-wrap justify-center gap-x-4"
          >
            Digital Marketing and Outsourcing Solutions That Help Businesses Grow
          </h1>
          <p 
            ref={subtextRef}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Nexacare Solution provides powerful digital marketing strategies, modern website development, and reliable BPO services for businesses worldwide.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary rounded-full font-bold text-lg flex items-center gap-2 glow-primary hover:bg-primary/90 transition-all"
                aria-label="Start a new project with Nexacare Solution"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Magnetic>
            
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
                aria-label="View our services and offerings"
              >
                <Play className="w-5 h-5 fill-white" />
                View Our Services
              </motion.button>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
