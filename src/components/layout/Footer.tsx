import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Github, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Community', href: '/community' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'GitHub',
        href: '#',
        icon: Github,
      },
      {
        name: 'Email',
        href: 'mailto:hello@boardly.ph',
        icon: Mail,
      },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 group mb-4">
                <div className="p-2 bg-gradient-to-br from-primary-500 via-coral-500 to-violet-500 rounded-2xl shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-display font-bold">Boardly</span>
                  <span className="text-lg font-display font-medium bg-gradient-to-r from-coral-400 to-lime-400 bg-clip-text text-transparent">PH</span>
                </div>
              </Link>
              <p className="text-neutral-300 max-w-md leading-relaxed mb-6">
                Empowering Filipino freelancers and solopreneurs with AI-powered learning experiences.
                Join our community and accelerate your professional growth.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-3 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-2xl hover:from-primary-600 hover:to-coral-600 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-400 text-sm">
              © 2025 Boardly PH. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for Filipino entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}