"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

interface SidebarProps {
  onCollapseChange?: (collapsed: boolean) => void;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: '📊' },
  { label: 'Logs', path: '/logs', icon: '📝' },
  { label: 'Settings', path: '/settings', icon: '⚙️' },
  { label: 'Transactions', path: '/transactions', icon: '💸' },
  { label: 'Analytics', path: '/analytics', icon: '📈' },
  { label: 'API Keys', path: '/api-keys', icon: '🔑' },
];

export default function Sidebar({ onCollapseChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Notify parent component when collapsed state changes
  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(collapsed);
    }
  }, [collapsed, onCollapseChange]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile overlay when sidebar is expanded */}
      {isMobile && !collapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleCollapse}
          aria-hidden="true"
        />
      )}
    
      <div 
        className={`
          ${collapsed ? 'w-16' : 'w-64'} 
          h-screen bg-gray-800 text-white 
          transition-all duration-300 ease-in-out 
          flex flex-col fixed left-0 top-0 
          ${isMobile ? 'z-30' : 'z-10'}
          overflow-hidden
          shadow-lg
        `}
      >
        {/* Header / Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!collapsed && <h1 className="text-xl font-bold">IntelCryptoBot</h1>}
          {collapsed && <h1 className="text-xl font-bold mx-auto">ICB</h1>}
          <button 
            onClick={toggleCollapse} 
            className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>
        
        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`
                    flex items-center p-3 rounded-md 
                    transition-all duration-200 
                    hover:bg-gray-700 
                    ${pathname === item.path ? 'bg-blue-600 shadow-md' : ''}
                  `}
                  onClick={() => isMobile && setCollapsed(true)}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && (
                    <span className="ml-3 transition-opacity duration-200">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className={`${collapsed ? 'justify-center' : 'justify-between'} flex items-center`}>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              {!collapsed && <span className="ml-2 text-sm">Connected</span>}
            </div>
            {!collapsed && <span className="text-sm text-gray-400">SOL Network</span>}
          </div>
        </div>
      </div>
      
      {/* Mobile toggle button (fixed at bottom) */}
      {isMobile && collapsed && (
        <button
          onClick={toggleCollapse}
          className="fixed bottom-4 left-4 z-30 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
        >
          ≡
        </button>
      )}
    </>
  );
} 