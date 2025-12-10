'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ElectricFencing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const features = [
    'Strong perimeter deterrent',
    'Durable weather-resistant materials',
    'Advanced safety controls',
    'Alarm triggers on tampering',
    'Adjustable voltage levels',
    'Robust professional installation'
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
              <Link href="/smart-security-automation" className="hover:underline">Smart Security & Automation</Link>
              <span className="mx-2">»</span>
              <span>Electric Fencing</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Electric Fencing
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Powerful perimeter protection with advanced electric fencing solutions.
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
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Perimeter Defense</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our electric fencing solutions act as a strong deterrent against unauthorized entry, providing an added layer of perimeter protection. Built with durable materials and advanced safety controls, these systems are ideal for both residential and commercial properties.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Designed for long-term performance, our fences are weather-resistant and equipped with alarm triggers in case of tampering. With adjustable voltage levels and robust installation, we ensure maximum perimeter defense without compromising on safety standards.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/09/6369fbec3732c36e46718d082cefc3d8-1-1.png?fit=720%2C757&ssl=1"
                  alt="Electric Fencing"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">Key Features</h3>
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
              Ready to Secure Your Perimeter?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss the best electric fencing solution for your property.
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
                href="/smart-security-automation"
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
