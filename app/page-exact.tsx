'use client';

import { motion } from 'framer-motion';
import { 
  Shield, Building2, Laptop, Cog, Construction, Home,
  Clock, Users, Target, DollarSign, Lightbulb, CheckCircle2,
  TrendingUp, Award, Phone, Mail
} from 'lucide-react';
import ClientLogos from '@/components/ClientLogos';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Defense & Government Procurement",
      description: "Strategic sourcing, compliance assurance, and risk-managed acquisition for public sector institutions."
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Turnkey Procurement Solutions",
      description: "Fully managed procurement processes from planning to delivery."
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "IT & Software Development",
      description: "Custom-built digital platforms, websites, apps, and enterprise systems tailored for scalability and performance."
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Technology Solutions & Indenting",
      description: "Global sourcing of specialized equipment with expert integration."
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: "Construction & Infrastructure Services",
      description: "PEC-certified civil, telecom, and HVAC infrastructure development."
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Smart Security & Home Automation",
      description: "Cutting-edge systems for homes and businesses including smart surveillance, alarms, automation, and energy solutions."
    }
  ];

  const whyChoose = [
    {
      icon: <Clock className="w-16 h-16" />,
      title: "Unparalleled Expertise",
      description: "Years of experience in procurement & technology."
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "End-to-End Support",
      description: "From procurement strategy to implementation."
    },
    {
      icon: <Target className="w-16 h-16" />,
      title: "Tailor-Made Solutions",
      description: "Customized to fit industry-specific challenges."
    },
    {
      icon: <DollarSign className="w-16 h-16" />,
      title: "Cost-Effective & Scalable",
      description: "Maximize efficiency without compromising quality."
    },
    {
      icon: <Lightbulb className="w-16 h-16" />,
      title: "Innovative Technologies",
      description: "Smart security, automation, IT infrastructure, and more."
    }
  ];

  const trackRecord = [
    "8 x DP Level Procurement Projects in 4 Years",
    "Induction of New Snow Search & Rescue System for Pakistan Army",
    "4 x DP Level Contracts in Progress",
    "Induction of 2 New Equipments in Pakistan Army",
    "Implementation of SOS Emergency Response System in Bahria Town Islamabad",
    "Implementation of Smart Security & Home Automation Solutions across Pakistan"
  ];

  const stats = [
    { value: "56+", label: "Projects Completed" },
    { value: "5+", label: "Years of Experience" },
    { value: "17", label: "Team Members" },
    { value: "100%", label: "Satisfied Customers" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark via-dark-light to-dark min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="mb-6">
                <span className="text-8xl font-bold text-white/5 block">AUTOMATION</span>
              </div>
              
              <div className="space-y-6">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">IT-SERVICES</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Axio Ventures - Your Trusted Partner in Procurement, Technology & Security Solutions
                </h1>
                <p className="text-lg text-gray-300">
                  Axio Ventures delivers tailored, innovative, and cost-effective solutions in <strong>government & defense procurement, smart security, IT & software development, infrastructure, and technology sourcing</strong>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#services" className="btn-primary">
                    Explore Services
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <Shield className="w-64 h-64 text-primary opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <motion.div {...fadeInUp}>
              <h3 className="section-subtitle">Industries We Serve</h3>
              <h2 className="section-title text-dark">Seamless Execution. Scalable Impact.</h2>
              <div className="w-24 h-1 bg-primary my-6"></div>
              <p className="text-gray-600 text-lg">
                We proudly serve a wide range of industries, including government, defense, corporate, residential, and commercial sectors. Our adaptable solutions are designed to meet the specific challenges of each industry, ensuring that our clients receive tailored services that deliver measurable value. Whether it's a government agency seeking strategic procurement, a business investing in automation, or a residential client improving home security, Axio Ventures delivers results.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-dark">
              We work with a diverse sectors including{' '}
              <span className="text-primary">Military & Paramilitary, Government, Gated Communities, Telecom, Energy & Utilities</span>
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Services We Offer */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-dark">Services We Offer</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              We offer a wide spectrum of services tailored for both government and private sector clients. Each service is delivered with a focus on quality, compliance, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Axio Ventures */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-dark">Why Choose Axio Ventures?</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              At Axio Ventures, we blend innovation with proven expertise to deliver reliable procurement and technology solutions. Our client-focused approach ensures excellence, efficiency, and lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              We Are Proudly Partnered With <span className="text-yellow-300">26+</span> Companies Now
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Track Record */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-dark">Our Track Record</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              With a proven history of delivering successful projects across government, defense, and private sectors, Axio Ventures stands as a trusted partner in innovation. Our consistent performance, timely execution, and client satisfaction speak volumes about our commitment to excellence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary pl-8 space-y-8">
              {trackRecord.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-dark">{achievement}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Satisfied Customers - Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-dark">Our Satisfied Customers</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-gray-600 text-lg">
              At Axio Ventures, customer satisfaction is at the heart of everything we do. Over the years, we've built lasting relationships with government bodies, defense institutions, private organizations, and homeowners—earning their trust through consistent quality, timely delivery, and unmatched service. Their success stories are a testament to our commitment and reliability.
            </p>
          </motion.div>

          <ClientLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lets Build Something <span className="text-yellow-300">Smart & Secure</span> Together
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Whether you're a public sector department, private enterprise, or residential client—we're ready to help.
              </p>
              <a href="mailto:info@axioventures.com" className="btn-accent inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
