"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleSidebarCollapseChange = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };
  
  return (
    <div className="flex h-screen bg-background">
      <Sidebar onCollapseChange={handleSidebarCollapseChange} />
      
      {/* Main content */}
      <main 
        className={`
          flex-1 overflow-auto 
          transition-all duration-300 ease-in-out
          ${isMobile ? 'ml-0' : (sidebarCollapsed ? 'ml-16' : 'ml-64')}
          ${isMobile ? 'w-full' : 'w-auto'}
        `}
      >
        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
} 