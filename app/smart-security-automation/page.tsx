'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Camera, Zap, Lock, Home, ArrowRight } from 'lucide-react';

export default function SmartSecurityAutomation() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Security Alarm Systems',
      description: 'Our advanced security alarm systems provide round-the-clock protection for your home or business, ensuring immediate alerts in case of intrusion or emergencies. Designed with reliability and quick response in mind, these systems integrate seamlessly with your property for maximum safety and peace of mind. We use high-quality sensors, sirens, and connectivity features that work in harmony to deliver precise and timely notifications. Whether connected to a monitoring center or directly to your mobile device, our systems are built to safeguard what matters most to you.',
      image: '/images/security-alarm.jpg',
      icon: Shield
    },
    {
      title: 'Smart AI Cameras',
      description: 'Equipped with intelligent motion detection, facial recognition, and real-time alerts, our Smart AI Cameras go beyond traditional surveillance. They provide high-definition monitoring, proactive threat detection, and remote viewing, keeping you connected to your property from anywhere in the world. With AI-driven analytics, these cameras can distinguish between real threats and false alarms, ensuring accurate security responses. Ideal for both residential and commercial settings, they offer an unmatched combination of advanced technology and user-friendly operation.',
      image: '/images/smart-ai-cameras.jpg',
      icon: Camera,
      reverse: true
    },
    {
      title: 'Electric Fencing',
      description: 'Our electric fencing solutions act as a strong deterrent against unauthorized entry, providing an added layer of perimeter protection. Built with durable materials and advanced safety controls, these systems are ideal for both residential and commercial properties. Designed for long-term performance, our fences are weather-resistant and equipped with alarm triggers in case of tampering. With adjustable voltage levels and robust installation, we ensure maximum perimeter defense without compromising on safety standards.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/09/6369fbec3732c36e46718d082cefc3d8-1-1.png?fit=720%2C757&ssl=1',
      icon: Zap
    },
    {
      title: 'Smart Access Control',
      description: 'Our Smart Access Control solutions provide a comprehensive and integrated approach to managing and securing entry points for both people and vehicles. From smart door locks and biometric office entry systems to vehicle access control with boom barriers and license plate recognition, we ensure that only authorized individuals and vehicles can gain access to your premises. These systems can also incorporate walkthrough gates, RFID cards, mobile app access, and scanner machines for high-security environments. Designed for residential communities, corporate offices, industrial facilities, and government institutions, our smart access control systems combine convenience, efficiency, and top-tier security into one seamless platform.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/05/f26774318554a5518676ad7e465e5021-1-1-scaled.png?fit=720%2C680&ssl=1',
      icon: Lock,
      reverse: true
    },
    {
      title: 'Smart Homes',
      description: 'Control your home\'s ambiance and energy usage effortlessly with our smart lights, switches, and automated curtains. These solutions allow remote operation, scheduling, and integration with voice assistants, offering both convenience and modern living comfort. Our systems can be programmed to adapt to your lifestyle, from dimming lights at sunset to closing curtains for privacy. With energy efficiency at the forefront, these products not only make your home smarter but also help reduce electricity costs over time.',
      image: 'https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/08/ab7d7ec403f5b21b930c0fdf0e748bce-1.png?fit=720%2C720&ssl=1',
      icon: Home
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
              <span>Smart Security & Automation</span>
            </nav>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Security & Automation Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Delivering cutting-edge security and automation solutions for safer, smarter, and more connected living and working spaces.
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
              Ready to Secure Your Space?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss how we can help you implement cutting-edge security and automation solutions.
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
