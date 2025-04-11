"use client";

import React, { useState } from 'react';
import MLStrategyConfig from '../components/MLStrategyConfig';
import APIKeyManagement from '../components/APIKeyManagement';
import ModelSelection from '../components/ModelSelection';

type SettingsTab = 'api' | 'model' | 'strategy';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('api');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="bg-gray-800 rounded-lg p-4 h-fit">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('api')}
              className={`w-full text-left px-3 py-2 rounded-md ${
                activeTab === 'api' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              API Credentials
            </button>
            
            <button
              onClick={() => setActiveTab('model')}
              className={`w-full text-left px-3 py-2 rounded-md ${
                activeTab === 'model' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Model Selection
            </button>
            
            <button
              onClick={() => setActiveTab('strategy')}
              className={`w-full text-left px-3 py-2 rounded-md ${
                activeTab === 'strategy' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Strategy Configuration
            </button>
          </nav>
          
          <div className="mt-8 p-3 bg-gray-700 rounded-md">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Status</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">DeepSeek API</span>
                <span className="text-xs text-green-400">Connected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">OpenRouter API</span>
                <span className="text-xs text-red-400">Not Connected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">Active Model</span>
                <span className="text-xs text-blue-400">DQN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">Strategy Status</span>
                <span className="text-xs text-yellow-400">Paper Trading</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="md:col-span-3">
          {activeTab === 'api' && (
            <APIKeyManagement />
          )}
          
          {activeTab === 'model' && (
            <ModelSelection />
          )}
          
          {activeTab === 'strategy' && (
            <MLStrategyConfig />
          )}
        </div>
      </div>
    </div>
  );
} 