'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClientLogos from '@/components/ClientLogos';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Dark Background with Large Text */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            backgroundSize: '100% 4px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div {...fadeIn} className="text-white">
              {/* Large Shadow Text */}
              <div className="mb-8 relative">
                <h1 className="text-[120px] md:text-[150px] lg:text-[180px] font-bold leading-none opacity-5 select-none">
                  AUTOMATION
                </h1>
              </div>

              {/* Main Content */}
              <div className="space-y-6 -mt-32 relative z-10">
                <span className="text-accent text-sm font-bold uppercase tracking-widest block">
                  IT-SERVICES
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Axio Ventures - Your Trusted Partner in Procurement, Technology & Security Solutions
                </h2>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Axio Ventures delivers tailored, innovative, and cost-effective solutions in <strong className="text-white">government & defense procurement, smart security, IT & software development, infrastructure, and technology sourcing</strong>.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#services" className="btn-primary">
                    Explore Services
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                <Image
                  src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/%e2%80%94Pngtree%e2%80%943d-lock-icon-cyber-security_15523015-15acb.png?fit=720%2C720&ssl=1"
                  alt="Security Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-16">
            <motion.div {...fadeIn}>
              <h3 className="section-subtitle">Industries We Serve</h3>
              <h2 className="section-title text-gray-900">Seamless Execution. Scalable Impact.</h2>
              <div className="w-24 h-1 bg-primary my-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We proudly serve a wide range of industries, including government, defense, corporate, residential, and commercial sectors. Our adaptable solutions are designed to meet the specific challenges of each industry, ensuring that our clients receive tailored services that deliver measurable value. Whether it's a government agency seeking strategic procurement, a business investing in automation, or a residential client improving home security, Axio Ventures delivers results.
              </p>
            </motion.div>
          </div>

          {/* Animated Text Section */}
          <motion.div {...fadeIn} className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              We work with a diverse sectors including{' '}
              <span className="text-primary">Military & Paramilitary</span>,{' '}
              <span className="text-accent">Government</span>,{' '}
              <span className="text-primary">Gated Communities</span>,{' '}
              <span className="text-accent">Telecom</span>,{' '}
              <span className="text-primary">Energy & Utilities</span>
            </h3>
          </motion.div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div {...fadeIn} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/marissa-grootes-zv5QSKaP8G8-unsplash-1-scaled.jpg?fit=678%2C1024&ssl=1"
                alt="Industry"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i0.wp.com/xemoventures.com/wp-content/uploads/2025/04/ux-787968_1920-1.jpg?fit=680%2C1024&ssl=1"
                alt="Technology"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-gray-900">Services We Offer</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              We offer a wide spectrum of services tailored for both government and private sector clients. Each service is delivered with a focus on quality, compliance, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🛡️',
                title: 'Defense & Government Procurement',
                desc: 'Strategic sourcing, compliance assurance, and risk-managed acquisition for public sector institutions.'
              },
              {
                icon: '🏢',
                title: 'Turnkey Procurement Solutions',
                desc: 'Fully managed procurement processes from planning to delivery.'
              },
              {
                icon: '💻',
                title: 'IT & Software Development',
                desc: 'Custom-built digital platforms, websites, apps, and enterprise systems tailored for scalability and performance.'
              },
              {
                icon: '⚙️',
                title: 'Technology Solutions & Indenting',
                desc: 'Global sourcing of specialized equipment with expert integration.'
              },
              {
                icon: '🏗️',
                title: 'Construction & Infrastructure Services',
                desc: 'PEC-certified civil, telecom, and HVAC infrastructure development.'
              },
              {
                icon: '🏠',
                title: 'Smart Security & Home Automation',
                desc: 'Cutting-edge systems for homes and businesses including smart surveillance, alarms, automation, and energy solutions.'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-gray-900">Why Choose Axio Ventures?</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              At Axio Ventures, we blend innovation with proven expertise to deliver reliable procurement and technology solutions. Our client-focused approach ensures excellence, efficiency, and lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: '⏱️', title: 'Unparalleled Expertise', desc: 'Years of experience in procurement & technology.' },
              { icon: '👥', title: 'End-to-End Support', desc: 'From procurement strategy to implementation.' },
              { icon: '🎯', title: 'Tailor-Made Solutions', desc: 'Customized to fit industry-specific challenges.' },
              { icon: '💰', title: 'Cost-Effective & Scalable', desc: 'Maximize efficiency without compromising quality.' },
              { icon: '💡', title: 'Innovative Technologies', desc: 'Smart security, automation, IT infrastructure, and more.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We Are Proudly Partnered With <span className="text-yellow-300">26+</span> Companies Now
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '56+', label: 'Projects Completed' },
              { value: '5+', label: 'Years of Experience' },
              { value: '17', label: 'Team Members' },
              { value: '100%', label: 'Satisfied Customers' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-gray-900">Our Track Record</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              With a proven history of delivering successful projects across government, defense, and private sectors, Axio Ventures stands as a trusted partner in innovation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary pl-8 space-y-8">
              {[
                '8 x DP Level Procurement Projects in 4 Years',
                'Induction of New Snow Search & Rescue System for Pakistan Army',
                '4 x DP Level Contracts in Progress',
                'Induction of 2 New Equipments in Pakistan Army',
                'Implementation of SOS Emergency Response System in Bahria Town Islamabad',
                'Implementation of Smart Security & Home Automation Solutions across Pakistan'
              ].map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900">{achievement}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-gray-900">Our Satisfied Customers</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              At Axio Ventures, customer satisfaction is at the heart of everything we do. Over the years, we've built lasting relationships with government bodies, defense institutions, private organizations, and homeowners.
            </p>
          </motion.div>

          <ClientLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Lets Build Something <span className="text-yellow-300">Smart & Secure</span> Together
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Whether you're a public sector department, private enterprise, or residential client—we're ready to help.
              </p>
              <a href="mailto:info@axioventures.com" className="btn-accent inline-flex items-center gap-2 text-lg">
                <span>✉</span>
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
