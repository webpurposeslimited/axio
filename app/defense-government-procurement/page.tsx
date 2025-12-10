'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DefenseGovernmentProcurement() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const features = [
    'Strategic sourcing for defense and government sectors',
    'Full regulatory compliance and documentation',
    'Risk-managed acquisition processes',
    'High-quality equipment and technology sourcing',
    'Timely delivery with strict industry standards',
    'Support for national security initiatives'
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
            <nav className="flex justify-center mb-6 text-sm flex-wrap">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">»</span>
              <Link href="/procurement-construction" className="hover:underline">Procurement & Construction</Link>
              <span className="mx-2">»</span>
              <span>Defense & Government Procurement</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Defense & Government Procurement
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Strategic sourcing and compliance-driven procurement solutions for defense and public sector excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Expertise</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We specialize in delivering comprehensive procurement solutions tailored to the complex needs of the defense and government sectors. With a focus on reliability, regulatory compliance, and operational efficiency, we source and supply high-quality equipment, technology, and essential services.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experienced team ensures that every project meets strict industry standards, supporting national security and public sector excellence through timely and strategic sourcing.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/marissa-grootes-zv5QSKaP8G8-unsplash-1-scaled.jpg?fit=678%2C1024&ssl=1"
                  alt="Defense & Government Procurement"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">What We Offer</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss how we can support your defense and government procurement needs.
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
                href="/procurement-construction"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
