'use client';

import { useEffect, useState } from 'react';
import MoonIcon from './Icons/MoonIcon';
import SunIcon from './Icons/SunIcon';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-6 h-6" /> // Placeholder with same dimensions
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Toggle theme (current: ${theme})`}
      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}