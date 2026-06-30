// src/app/contact/page.tsx
import React from 'react';
import Link from 'next/link';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-5xl font-bold text-center mb-12 text-violet-400">Get in Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-electric-blue">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-500"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-500"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-violet-500"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-violet-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Social Links */}
        <div className="md:pl-10">
          <h2 className="text-3xl font-bold mb-6 text-electric-blue">Connect With Me</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-violet-300 mb-2">Email</h3>
              <p className="text-lg text-gray-300">
                <a href="mailto:contact@example.com" className="hover:text-electric-blue">contact@example.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-violet-300 mb-2">Schedule a Call</h3>
              <p className="text-lg text-gray-300 mb-4">
                Let's discuss your project in detail.
              </p>
              <Link href="#" className="inline-block px-6 py-3 border border-violet-600 text-violet-300 text-lg rounded-full shadow-lg hover:bg-violet-600 hover:text-white transition duration-300">
                Book Now
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-violet-300 mb-2">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-electric-blue text-3xl transition duration-300">
                  {/* Placeholder for GitHub Icon */}
                  <span className="sr-only">GitHub</span> &#x200B; {/* Unicode for zero-width space */}
                </a>
                <a href="#" className="text-gray-300 hover:text-electric-blue text-3xl transition duration-300">
                  {/* Placeholder for LinkedIn Icon */}
                  <span className="sr-only">LinkedIn</span> &#x200B;
                </a>
                <a href="#" className="text-gray-300 hover:text-electric-blue text-3xl transition duration-300">
                  {/* Placeholder for Twitter Icon */}
                  <span className="sr-only">Twitter</span> &#x200B;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;