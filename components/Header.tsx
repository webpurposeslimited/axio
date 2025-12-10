'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaChevronDown, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '#',
      submenu: [
        {
          name: 'Procurement & Construction',
          href: '/procurement-construction',
          submenu: [
            { name: 'Defense & Government Procurement', href: '/defense-government-procurement' },
            { name: 'Turnkey Procurement', href: '/turnkey-procurement' },
            { name: 'Technology Solutions & Indenting', href: '/technology-solutions-indenting' },
          ]
        },
        {
          name: 'Smart Security & Automation',
          href: '/smart-security-automation',
          submenu: [
            { name: 'Security Alarm Systems', href: '/security-alarm-systems' },
            { name: 'Smart AI Cameras', href: '/smart-ai-cameras' },
            { name: 'Electric Fencing', href: '/electric-fencing' },
            { name: 'Smart Access Control', href: '/smart-access-control' },
            { name: 'Smart Homes', href: '/smart-homes' },
          ]
        },
      ]
    },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl border-b border-gray-100' : 'bg-white shadow-lg'
    }`}>
      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="transition-all duration-300">
              <div className="text-3xl font-bold font-display">
                <span className="text-primary group-hover:text-primary-dark transition-colors">AXIO</span>
                <span className="text-accent group-hover:text-accent-dark transition-colors"> VENTURES</span>
              </div>
              <div className="text-xs text-gray-500 tracking-wide">Your Vision, Our Venture</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className="font-semibold transition-colors flex items-center gap-1 hover:scale-105 text-dark hover:text-primary"
                    >
                      {item.name}
                      <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {/* First Level Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-visible transition-all duration-300 border border-gray-100 z-50 ${
                      openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="relative group/sub hover:bg-primary/5"
                        >
                          <Link
                            href={subItem.href}
                            className="block px-4 py-3 text-dark hover:bg-primary hover:text-white transition-colors flex items-center justify-between relative z-10"
                          >
                            {subItem.name}
                            {subItem.submenu && <FaChevronDown className="text-xs rotate-[-90deg]" />}
                          </Link>
                          
                          {/* Second Level Dropdown */}
                          {subItem.submenu && (
                            <div className="absolute left-full top-0 w-64 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 ml-2 border border-gray-200 pointer-events-none group-hover/sub:pointer-events-auto">
                              {subItem.submenu.map((subSubItem) => (
                                <Link
                                  key={subSubItem.name}
                                  href={subSubItem.href}
                                  className="block px-4 py-3 text-dark hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300 text-sm"
                                >
                                  {subSubItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="font-semibold transition-all duration-300 hover:scale-105 text-dark hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/+923705487193" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-accent-100 text-accent hover:bg-accent hover:text-white">
              <FaWhatsapp className="text-lg" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-primary-100 text-primary hover:bg-primary hover:text-white">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-accent-100 text-accent hover:bg-accent hover:text-white">
              <FaInstagram className="text-lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl text-dark"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto border border-gray-100">
            {menuItems.map((item) => (
              <div key={item.name} className="mb-2">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full text-left py-3 text-dark hover:text-primary font-semibold transition-colors flex items-center justify-between"
                    >
                      {item.name}
                      <FaChevronDown className={`text-xs transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block py-2 text-gray-700 hover:text-primary transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                            {subItem.submenu && (
                              <div className="pl-4 mt-1 space-y-1">
                                {subItem.submenu.map((subSubItem) => (
                                  <Link
                                    key={subSubItem.name}
                                    href={subSubItem.href}
                                    className="block py-1 text-sm text-gray-600 hover:text-accent transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    • {subSubItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-dark hover:text-primary font-semibold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
