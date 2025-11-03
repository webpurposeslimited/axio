'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Office No 2, First Floor', 'Sector B Commercial, DHA Phase-I', 'Islamabad'],
      link: 'https://maps.app.goo.gl/bNQ39W4MfeqNCZC97?g_st=aw',
      color: 'from-primary to-primary-dark'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+9251-5129494', '+923215014430'],
      link: 'tel:+92515129494',
      color: 'from-accent to-accent-dark'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@axioventures.com'],
      link: 'mailto:info@axioventures.com',
      color: 'from-primary to-accent'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-accent to-primary'
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question or ready to start your project? We're here to help. Reach out to us and let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    info.link && idx === 0 ? (
                      <a
                        key={idx}
                        href={info.link}
                        target={info.icon === MapPin ? '_blank' : undefined}
                        rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-primary transition-colors block"
                      >
                        {detail}
                      </a>
                    ) : info.icon === Phone && info.link ? (
                      <a
                        key={idx}
                        href={idx === 0 ? 'tel:+92515129494' : 'tel:+923215014430'}
                        className="text-gray-600 hover:text-primary transition-colors block"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Find Us on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Google Maps</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Visit our office or navigate using Google Maps
              </p>
              <a
                href="https://maps.app.goo.gl/bNQ39W4MfeqNCZC97?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white font-bold px-10 py-5 rounded-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <MapPin className="w-6 h-6" />
                View on Google Maps
              </a>
            </div>

            {/* Map */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="rounded-3xl overflow-hidden shadow-2xl h-[600px] border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.4849842937377!2d73.09270731521!3d33.71812098070!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzA1LjIiTiA3M8KwMDUnNDAuNyJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-accent">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your goals with our comprehensive solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+92515129494"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
              >
                Call Us Now
              </a>
              <a
                href="mailto:info@axioventures.com"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border-2 border-white/30"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
