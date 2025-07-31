'use client';

import { ReactNode } from 'react';
import { useTheme } from 'next-themes';

export default function IPhoneFrame({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-[440px] h-[956px] animate-fade-up-in">
        {/* Phone outer frame - Natural Titanium */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4d4d8] to-[#a1a1aa] rounded-[60px] p-[3px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          {/* Phone inner frame */}
          <div className="relative h-full w-full bg-black dark:bg-gray-900 rounded-[57px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[35px] bg-black dark:bg-gray-900 rounded-b-[22px] z-30" />
            
            {/* Screen */}
            <div className="absolute inset-[3px] bg-background rounded-[54px] overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-[30px] z-20 bg-background">
                <span className="text-[15px] font-semibold text-foreground">9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="h-3 w-[18px] bg-foreground rounded-[2px]" />
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
            <div className="absolute -left-[3px] top-[140px] w-[3px] h-[30px] bg-[#ff9500] rounded-l-[3px]" />
            <div className="absolute -left-[3px] top-[170px] w-[3px] h-[50px] bg-[#1a1a1a] rounded-l-[3px]" />
            <div className="absolute -left-[3px] top-[240px] w-[3px] h-[50px] bg-[#1a1a1a] rounded-l-[3px]" />
            <div className="absolute -right-[3px] top-[200px] w-[3px] h-[80px] bg-[#1a1a1a] rounded-r-[3px]" />
            <div className="absolute -right-[3px] top-[340px] w-[3px] h-[40px] bg-[#2a2a2a] rounded-r-[3px]" />
          </div>
        </div>
      </div>
    </div>
  );
}