'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { scroller } from 'react-scroll';
import { AlignJustify } from 'lucide-react';
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import { Button } from '@/src/components/ui/button';

const scrollTarget = {
  About: 'top',
  Contact: 'contact',
  Projects: 'works',
};

const DropdownMenu = ({ tags }: { tags: string[] }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = (to: string) => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  };

  if (!isMounted) {
    return (
      <Button
        variant="outline"
        className="px-2 py-2 text-sm shadow-sm border-zinc-400 dark:border-zinc-700 md:hidden"
        aria-label="menu"
      >
        <AlignJustify className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <div className="relative inline-block text-left md:hidden">
      <ShadcnDropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="px-2 py-2 text-sm shadow-sm border-zinc-400 dark:border-zinc-700 hover:bg-orange-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
            aria-label="menu"
          >
            <AlignJustify className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-56 bg-orange-50 dark:bg-zinc-800 border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50"
        >
          {tags.map((tag) => (
            <DropdownMenuItem
              key={tag}
              className="cursor-pointer [&[data-highlighted]]:bg-orange-200 dark:[&[data-highlighted]]:bg-zinc-700 [&[data-highlighted]]:text-inherit dark:[&[data-highlighted]]:text-inherit"
              onSelect={(e) => e.preventDefault()}
            >
              {tag !== 'Resume' && tag !== 'View Source' ? (
                <button
                  onClick={() => handleScroll(scrollTarget[tag as keyof typeof scrollTarget] || 'top')}
                  className="w-full text-left"
                >
                  {tag}
                </button>
              ) : tag === 'Resume' ? (
                <Link
                  href="https://docs.google.com/document/d/1ilyP2PJTsfK_xHb40rRoQkutdEkJhFBKVifTae_LAkk/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left"
                >
                  {tag}
                </Link>
              ) : (
                <Link
                  href="https://github.com/SheilaSusan/my-portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left"
                >
                  {tag}
                </Link>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </ShadcnDropdownMenu>
    </div>
  );
};

export default DropdownMenu;