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
  { label: 'Settings', path: '/settings', icon: '⚙️' },
  { label: 'Transactions', path: '/transactions', icon: '📝' },
  { label: 'Analytics', path: '/analytics', icon: '📈' },
  { label: 'API Keys', path: '/api-keys', icon: '🔑' },
];

export default function Sidebar({ onCollapseChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

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
    <div 
      className={`${collapsed ? 'w-16' : 'w-64'} h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col fixed left-0 top-0 overflow-hidden`}
    >
      {/* Header / Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h1 className="text-xl font-bold">IntelCryptoBot</h1>}
        {collapsed && <h1 className="text-xl font-bold mx-auto">ICB</h1>}
        <button 
          onClick={toggleCollapse} 
          className="p-1 rounded-md hover:bg-gray-700"
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
                className={`flex items-center p-3 rounded-md transition-colors hover:bg-gray-700 ${
                  pathname === item.path ? 'bg-blue-600' : ''
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.label}</span>}
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
  );
} 