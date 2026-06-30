// src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle'; // Import ThemeToggle

const Header: React.FC = () => {
  return (
    <header className="p-4 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Changed Link to h1 for semantic correctness and added aria-label to ThemeToggle */}
        <h1 className="text-xl font-bold text-violet-400">
          <Link href="/">Developer Portfolio</Link>
        </h1>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/projects" className="hover:text-violet-400">Projects</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-violet-400">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-violet-400">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-violet-400">Contact</Link>
          </li>
          <li>
            <ThemeToggle aria-label="Toggle theme" /> {/* Added aria-label */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;