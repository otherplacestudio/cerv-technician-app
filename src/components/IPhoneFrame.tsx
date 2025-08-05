'use client';

import { ReactNode } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function IPhoneFrame({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  
  const navLinks = [
    { href: '/preview/jobs', label: 'Jobs' },
    { href: '/preview/messages', label: 'Messages' },
    { href: '/preview/performance', label: 'Performance' },
    { href: '/preview/settings', label: 'Settings' },
    { href: '/preview/ui-kit', label: 'UI Kit' },
  ];
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="mb-4 flex gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              pathname === link.href
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      {/* Container that scales the entire phone */}
      <div className="relative scale-[0.65] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 2xl:scale-110">
        {/* Fixed base dimensions - iPhone 15 Pro Max proportions */}
        <div className="relative w-[430px] h-[932px] animate-fade-up-in">
          {/* Phone outer frame - Natural Titanium */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4d4d8] to-[#a1a1aa] rounded-[70px] p-[3px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            {/* Phone inner frame */}
            <div className="relative h-full w-full bg-black dark:bg-gray-900 rounded-[67px] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black dark:bg-gray-900 rounded-b-[24px] z-30" />
              
              {/* Screen */}
              <div className="absolute inset-[3px] bg-background rounded-[64px] overflow-hidden">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-8 z-20 bg-background">
                  <span className="text-sm font-semibold text-foreground">9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="h-3 w-5 bg-foreground rounded-[2px]" />
                    <div className="h-3 w-4 bg-foreground rounded-[2px]" />
                    <div className="h-3 w-6 bg-foreground rounded-[2px]" />
                  </div>
                </div>
                
                {/* App Content */}
                <div className="h-full pt-11 overflow-hidden bg-background">
                  {children}
                </div>
              </div>
              
              {/* Side buttons */}
              <div className="absolute -left-[3px] top-[189px] w-[3px] h-[40px] bg-[#ff9500] rounded-l-[3px]" />
              <div className="absolute -left-[3px] top-[242px] w-[3px] h-[50px] bg-[#1a1a1a] rounded-l-[3px]" />
              <div className="absolute -left-[3px] top-[302px] w-[3px] h-[50px] bg-[#1a1a1a] rounded-l-[3px]" />
              <div className="absolute -right-[3px] top-[258px] w-[3px] h-[70px] bg-[#1a1a1a] rounded-r-[3px]" />
              <div className="absolute -right-[3px] top-[338px] w-[3px] h-[40px] bg-[#2a2a2a] rounded-r-[3px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}