'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Eye, Target, Package, Building2, Radio, Key, Shield, Camera, Zap, Lock, Home } from 'lucide-react';

export default function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stats = [
    { value: '90%', label: 'Success' },
    { value: '95%', label: 'Our Skill' },
    { value: '100%', label: 'Team Work' }
  ];

  const procurementServices = [
    {
      number: '01',
      icon: Package,
      title: 'Procurement for Government & Corporate Projects',
      description: 'We specialize in strategic sourcing, indenting, and supply of essential equipment and materials for public and private sector projects. Our procurement team ensures timely delivery, regulatory compliance, and cost-effectiveness.'
    },
    {
      number: '02',
      icon: Building2,
      title: 'Construction & Civil Engineering Services',
      description: 'From planning to execution, we handle residential, commercial, and public infrastructure projects. This includes civil works, building construction, OFC laying, electrical infrastructure, smart city components, and more.'
    },
    {
      number: '03',
      icon: Radio,
      title: 'Telecom Infrastructure Development',
      description: 'We support telecom providers with infrastructure rollouts including pole installations, cable ducting, tower construction, and fiber optic laying. Our work meets national telecom standards and regulatory compliances.'
    },
    {
      number: '04',
      icon: Key,
      title: 'Turnkey Solutions',
      description: 'Clients often need end-to-end services—and we deliver. From planning and procurement to construction and after-sales support, we act as a single-window partner for diverse needs.'
    }
  ];

  const techServices = [
    {
      number: '01',
      icon: Shield,
      title: 'Security Alarm Systems',
      description: 'Advanced intrusion detection and alarm systems for comprehensive security coverage.'
    },
    {
      number: '02',
      icon: Camera,
      title: 'Smart AI Cameras',
      description: 'Intelligent surveillance with AI-powered analytics and real-time monitoring.'
    },
    {
      number: '03',
      icon: Zap,
      title: 'Electric Fencing',
      description: 'High-security perimeter protection with advanced electric fencing solutions.'
    },
    {
      number: '04',
      icon: Lock,
      title: 'Smart Access Control',
      description: 'Biometric and card-based access control systems for enhanced security.'
    },
    {
      number: '05',
      icon: Home,
      title: 'Smart Homes',
      description: 'Complete home automation solutions for modern, connected living.'
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-primary hover:text-primary-dark transition-colors">Home</a>
            <span className="text-gray-400">»</span>
            <span className="text-gray-600">About Us</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div {...fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Axio Ventures</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A forward-thinking organization at the intersection of technology innovation and infrastructure development. We are dedicated to transforming how homes, businesses, and governments operate, secure, and grow. With our dual-domain expertise in Smart Technology Solutions and Procurement & Construction Services, we provide comprehensive, reliable, and futuristic services that cater to the modern world's evolving demands.
              </p>
            </motion.div>

            {/* Right - Mission, Vision, Aim */}
            <div className="space-y-6">
              <motion.div {...fadeIn} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To deliver integrated solutions that empower our clients with smart automation, security, and sustainable infrastructure—while maintaining excellence, innovation, and integrity in everything we do.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To be recognized as a leader in digital transformation and infrastructure development by blending intelligent technology with reliable engineering to build a more secure and efficient future.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Our Aim</h3>
                    <p className="text-gray-600">
                      To bridge the digital and physical world through smart automation, innovative software, and solid infrastructure—ensuring every client we serve experiences measurable value and long-term success.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Services CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Quality Services Is Our Main Objective</h3>
            <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* About Content - Redesigned */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Personalized Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver peace of mind, operational efficiency, and future-ready infrastructure. Each client's needs are unique—we listen, analyze, and respond with precision-driven solutions.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-2xl shadow-lg border border-accent-100">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Innovation Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Building synergy between technology and infrastructure. We're not just adapting to the future—we're actively shaping it with smart security and sustainable construction.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Trusted Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Spanning residential, commercial, and government sectors. We bring expertise, dedication, and results to every challenge—creating safer, smarter, and more sustainable spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image and Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <Image
                src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/charles-forerunner-3fPXt37X6UQ-unsplash-1-scaled.jpg?fit=2560%2C1707&ssl=1"
                alt="About Us"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-dark">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Procurement Division */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeIn}>
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary font-semibold rounded-full text-sm mb-4">
                🏗️ Operations Division
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Procurement & Construction</span> Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-6"></div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-600">End-to-end solutions from sourcing to execution</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-600">Vast supplier network and experienced project managers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-600">Focus on quality, sustainability, and cost-efficiency</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-600">Residential, commercial, and industrial expertise</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <Image
                src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/19036-1.png?fit=720%2C749&ssl=1"
                alt="Procurement"
                width={600}
                height={600}
                className="rounded-2xl relative shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {procurementServices.map((service, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-primary/10">{service.number}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-dark">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-background to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Tech isn't a luxury anymore—it's a necessity. We help you stay ahead, stay secure, and stay smart.
            </h2>
            <a href="/contact" className="inline-block bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105">
              Get Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Smart Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techServices.map((service, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-5xl font-bold text-primary/10 mb-4">{service.number}</div>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
