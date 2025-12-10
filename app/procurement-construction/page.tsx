'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcurementConstruction() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Defense & Government Procurement',
      description: 'We specialize in delivering comprehensive procurement solutions tailored to the complex needs of the defense and government sectors. With a focus on reliability, regulatory compliance, and operational efficiency, we source and supply high-quality equipment, technology, and essential services. Our experienced team ensures that every project meets strict industry standards, supporting national security and public sector excellence through timely and strategic sourcing.',
      image: '/images/security-alarm.jpg',
      icon: Shield
    },
    {
      title: 'Turnkey Procurement',
      description: 'Our turnkey procurement services offer a complete, hassle-free solution covering the entire process—from strategic sourcing and vendor management to final delivery and implementation. We take full ownership of procurement cycles, ensuring clients benefit from optimized costs, minimized risks, and maximum transparency. Whether for large government tenders or private sector initiatives, Axio Ventures guarantees seamless, efficient, and end-to-end procurement execution.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/05/f26774318554a5518676ad7e465e5021-1-1-scaled.png?fit=720%2C680&ssl=1',
      icon: Target,
      reverse: true
    },
    {
      title: 'Technology Solutions & Indenting',
      description: 'Axio Ventures bridges the gap between innovative technology and practical business needs through our specialized technology solutions and indenting services. We connect organizations to the latest, most reliable tech equipment sourced globally, ensuring customized solutions that drive growth and performance. Our global supplier network and procurement expertise enable clients to access hard-to-find, high-value technologies with ease and confidence.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/05/37c73262993bbda107b9a6cc7b44e3d3-1-scaled.png?fit=720%2C567&ssl=1',
      icon: Zap
    },
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
              <span>Procurement & Construction Services</span>
            </nav>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Procurement & Construction Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Delivering cutting-edge procurement and construction solutions for government, defense, and private sector excellence.
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss how we can help you achieve your procurement and construction goals.
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
