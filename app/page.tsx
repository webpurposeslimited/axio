'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Target, Users, Award, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function Home() {
  const sectors = [
    'Military & Paramilitary',
    'Government',
    'Gated Communities',
    'Telecom',
    'Energy & Utilities'
  ];
  
  const [currentSector, setCurrentSector] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = sectors[currentSector];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentSector((prev) => (prev + 1) % sectors.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSector]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Modern Gradient with Glassmorphism */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-accent-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              
              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-dark"
              >
                Your Trusted Partner in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Procurement & Technology
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                Delivering tailored, innovative, and cost-effective solutions in government & defense procurement, smart security, IT & software development, and infrastructure.
              </motion.p>

              {/* Typewriter Sectors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-xl md:text-2xl font-semibold text-dark"
              >
                <span className="text-gray-600">We work with diverse sectors: </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent min-h-[1.5em] inline-block">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a 
                  href="#services" 
                  className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary-100"
                >
                  Contact Us
                </a>
              </motion.div>

            </motion.div>

            {/* Right Image with Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Main Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[500px] h-[500px] animate-float">
                    <Image
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=500&fit=crop"
                      alt="Security Icon"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Floating Feature Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute top-20 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-primary-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-dark">Smart Security</div>
                      <div className="text-sm text-gray-600">Advanced Protection</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute top-40 -right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-accent-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-dark">Fast Delivery</div>
                      <div className="text-sm text-gray-600">On-Time Results</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute bottom-20 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-primary-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-dark">Certified</div>
                      <div className="text-sm text-gray-600">Quality Assured</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-primary rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Vision */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent font-semibold rounded-full text-sm mb-4">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Shaping the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Procurement & Technology</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              {...fadeIn}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-primary-100"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    To be the leading partner in procurement and technology solutions, empowering organizations with innovative, secure, and sustainable solutions that drive growth and operational excellence across all sectors.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary font-semibold rounded-full text-sm mb-4">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Seamless Execution. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Scalable Impact</span>
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-primary-100 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              We work with diverse sectors: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent min-h-[1.5em] inline-block">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/marissa-grootes-zv5QSKaP8G8-unsplash-1-scaled.jpg?fit=678%2C1024&ssl=1" alt="Industry" fill className="object-cover" />
            </motion.div>
            <motion.div {...fadeIn} className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/ux-787968_1920-1.jpg?fit=680%2C1024&ssl=1" alt="Technology" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent font-semibold rounded-full text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Comprehensive Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Every Need</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored services delivered with quality, compliance, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'Defense & Government Procurement', desc: 'Strategic sourcing, compliance assurance, and risk-managed acquisition for public sector institutions.', color: 'primary' },
              { icon: Target, title: 'Turnkey Procurement Solutions', desc: 'Fully managed procurement processes from planning to delivery.', color: 'accent' },
              { icon: TrendingUp, title: 'Technology Solutions & Indenting', desc: 'Global sourcing of specialized equipment with expert integration.', color: 'primary' },
              { icon: Award, title: 'Smart Security & Automation', desc: 'Cutting-edge systems including smart surveillance, alarms, automation, and energy solutions.', color: 'accent' }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color === 'primary' ? 'from-primary to-primary-dark' : 'from-accent to-accent-dark'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-gradient-to-b from-white to-accent-50/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary font-semibold rounded-full text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Every Aspect</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Innovation, expertise, and client-focused solutions that deliver lasting impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Unparalleled Expertise', desc: 'Years of experience in procurement & technology', color: 'primary' },
              { icon: Users, title: 'End-to-End Support', desc: 'From strategy to implementation', color: 'accent' },
              { icon: Target, title: 'Tailor-Made Solutions', desc: 'Customized for your challenges', color: 'primary' },
              { icon: TrendingUp, title: 'Cost-Effective & Scalable', desc: 'Maximum efficiency, quality assured', color: 'accent' },
              { icon: Sparkles, title: 'Innovative Technologies', desc: 'Smart security, automation, IT infrastructure', color: 'primary' },
              { icon: CheckCircle2, title: '100% Satisfaction', desc: 'Proven track record of success', color: 'accent' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color === 'primary' ? 'from-primary-100 to-primary-200' : 'from-accent-100 to-accent-200'} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${item.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, #0073FF 49%, #0073FF 51%, transparent 52%)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div {...fadeIn}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Let's Start Your Project</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build Something <span className="text-yellow-300">Smart & Secure</span> Together
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Whether you're a public sector department, private enterprise, or residential client—we're ready to deliver excellence.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>✉</span>
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
