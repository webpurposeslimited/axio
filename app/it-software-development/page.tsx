'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Code, Smartphone, Globe, TrendingUp, ArrowRight } from 'lucide-react';

export default function ITSoftwareDevelopment() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Custom Software Development',
      description: 'We specialize in building tailored software solutions that address your unique business challenges. From enterprise resource planning (ERP) systems to customer relationship management (CRM) platforms, our team delivers scalable, secure, and high-performance applications. With expertise in modern technologies and agile methodologies, we ensure your software evolves with your business needs, providing long-term value and competitive advantage.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/05/edf8765069a292c027f213e4e6f19076.png?fit=720%2C386&ssl=1',
      icon: Code
    },
    {
      title: 'Mobile Applications Development',
      description: 'Our mobile app development services cover both iOS and Android platforms, delivering intuitive, feature-rich applications that engage users and drive business growth. We focus on creating seamless user experiences with responsive designs, robust functionality, and secure data handling. Whether you need a consumer-facing app or an enterprise mobility solution, we bring your vision to life with cutting-edge mobile technologies and best practices.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/05/f26774318554a5518676ad7e465e5021-1-1-scaled.png?fit=720%2C680&ssl=1',
      icon: Smartphone,
      reverse: true
    },
    {
      title: 'Web Apps Development',
      description: 'We create powerful, responsive web applications that deliver exceptional user experiences across all devices and browsers. Our web development expertise spans from simple business websites to complex web-based platforms, e-commerce solutions, and progressive web apps (PWAs). Using modern frameworks and technologies, we build fast, secure, and scalable web applications that help you achieve your digital objectives and reach your target audience effectively.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/05/37c73262993bbda107b9a6cc7b44e3d3-1-scaled.png?fit=720%2C567&ssl=1',
      icon: Globe
    },
    {
      title: 'Digital Marketing',
      description: 'Our comprehensive digital marketing services help you establish a strong online presence and reach your target audience effectively. From search engine optimization (SEO) and social media marketing to content creation and pay-per-click advertising, we develop data-driven strategies that deliver measurable results. We combine creativity with analytics to maximize your ROI, build brand awareness, and drive sustainable business growth in the digital landscape.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/05/9df8e6fe0e8d9e6fda45e04957d6cb77-1-scaled.png?fit=720%2C656&ssl=1',
      icon: TrendingUp,
      reverse: true
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <nav className="flex justify-center mb-6 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">»</span>
              <span>IT & Software Development</span>
            </nav>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT & Software Development Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Delivering innovative, scalable, and secure digital solutions to empower businesses in the modern era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                {...fadeIn}
                className={`grid md:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${service.reverse ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={service.reverse ? 'md:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className={service.reverse ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, #0073FF 49%, #0073FF 51%, transparent 52%)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss how our IT and software development services can help you achieve your digital goals.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
