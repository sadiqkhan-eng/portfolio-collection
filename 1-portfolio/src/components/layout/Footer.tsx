// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Developer Portfolio</h3>
          <p className="text-sm">
            Building modern, AI-powered web experiences with a focus on full-stack development and UI engineering.
          </p>
          <p className="mt-4 text-green-400 text-sm">
            Status: Available for new projects
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/projects" className="hover:text-violet-400 text-sm">Projects</Link></li>
            <li><Link href="/about" className="hover:text-violet-400 text-sm">About</Link></li>
            <li><Link href="/services" className="hover:text-violet-400 text-sm">Services</Link></li>
            <li><Link href="/contact" className="hover:text-violet-400 text-sm">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-violet-400 text-sm" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="#" className="hover:text-violet-400 text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" className="hover:text-violet-400 text-sm" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" className="hover:text-violet-400 text-sm" target="_blank" rel="noopener noreferrer">Email</a></li>
          </ul>
        </div>

        {/* Newsletter / Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">Subscribe to my newsletter for the latest updates and insights.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md bg-gray-700 border border-gray-600 text-white text-sm focus:outline-none focus:border-violet-500 w-full"
            />
            <button
              type="submit"
              className="p-2 bg-violet-600 rounded-r-md hover:bg-violet-700 transition-colors duration-200 text-white text-sm"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm">
            Email: <a href="mailto:contact@example.com" className="hover:text-violet-400">contact@example.com</a>
          </p>
        </div>
      </div>

      <div className="text-center mt-8 pt-8 border-t border-gray-800">
        <p className="text-sm">&copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;