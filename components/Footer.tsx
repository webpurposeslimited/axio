import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #21B34A 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="flex flex-col">
            <div className="relative h-40 w-full max-w-md mb-8">
              <Image
                src="/images/IMG_6722-removebg-preview.png"
                alt="Axio Ventures"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner in procurement, technology, and security solutions. 
              Delivering excellence across all sectors.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/50">
                <FaFacebookF />
              </a>
              <a href="#" className="w-11 h-11 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/50">
                <FaTwitter />
              </a>
              <a href="#" className="w-11 h-11 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-11 h-11 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent/50">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  → Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/procurement-construction" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Procurement & Construction
                </Link>
              </li>
              <li>
                <Link href="/smart-security-automation" className="text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Smart Security & Automation
                </Link>
              </li>
              <li>
                <Link href="/it-software-development" className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  IT & Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                  <FaMapMarkerAlt className="text-primary group-hover:text-white transition-colors" />
                </div>
                <a href="https://maps.app.goo.gl/bNQ39W4MfeqNCZC97?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-gray-300 leading-relaxed hover:text-primary transition-colors">
                  Office No 2, First Floor,<br />
                  Sector B Commercial, DHA Phase-I,<br />
                  Islamabad
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all duration-300">
                  <FaPhone className="text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="text-gray-300">
                  <a href="tel:+92515129494" className="hover:text-accent transition-colors block">
                    +9251-5129494
                  </a>
                  <a href="tel:+923215014430" className="hover:text-accent transition-colors block">
                    +923215014430
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                  <FaEnvelope className="text-primary group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:info@axioventures.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@axioventures.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Axio Ventures Private Limited. All rights reserved. Made with <span className="text-red-500">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
