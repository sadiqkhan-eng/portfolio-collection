'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeName, themes } from '@/lib/themes';

export function ThemeToggle() {
  const { themeName, setTheme, themes: availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
        aria-label="Change theme"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-xs text-zinc-500">theme</span>
        <span className="text-zinc-700">/</span>
        <span className="text-emerald-300 capitalize">{themeName}</span>
        <svg
          className={`h-3 w-3 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 rounded-xl border border-zinc-700 bg-zinc-950/95 backdrop-blur-xl py-2 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200"
          role="menu"
        >
          {availableThemes.map((theme) => (
            <button
              key={theme}
              onClick={() => {
                setTheme(theme as ThemeName);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors ${
                themeName === theme
                  ? 'bg-emerald-400/10 text-emerald-300'
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100'
              }`}
              role="menuitem"
              aria-selected={themeName === theme}
            >
              <span className="flex h-3 w-3 rounded-full" style={{ backgroundColor: themes[theme as ThemeName].accent }} />
              <span className="capitalize">{theme}</span>
              {themeName === theme && (
                <svg className="ml-auto h-4 w-4 text-emerald-300" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}