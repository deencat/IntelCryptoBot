"use client";

import React, { useState } from 'react';

interface APIKeyState {
  deepseekApiKey: string;
  deepseekOrgId: string;
  openrouterApiKey: string;
  dailyBudgetLimit: number;
}

export default function APIKeyManagement() {
  const [apiKeys, setApiKeys] = useState<APIKeyState>({
    deepseekApiKey: '',
    deepseekOrgId: '',
    openrouterApiKey: '',
    dailyBudgetLimit: 10,
  });

  const [maskedKeys, setMaskedKeys] = useState({
    deepseekApiKey: true,
    openrouterApiKey: true,
  });

  const [savedStatus, setSavedStatus] = useState({
    deepseek: false,
    openrouter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    setApiKeys(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));

    // Reset saved status when editing
    if (name.includes('deepseek')) {
      setSavedStatus(prev => ({ ...prev, deepseek: false }));
    } else if (name.includes('openrouter')) {
      setSavedStatus(prev => ({ ...prev, openrouter: false }));
    }
  };

  const toggleVisibility = (key: 'deepseekApiKey' | 'openrouterApiKey') => {
    setMaskedKeys(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const saveDeepseekSettings = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to secure storage
    console.log('DeepSeek settings saved:', {
      apiKey: apiKeys.deepseekApiKey,
      orgId: apiKeys.deepseekOrgId,
      dailyBudget: apiKeys.dailyBudgetLimit
    });
    setSavedStatus(prev => ({ ...prev, deepseek: true }));
    // In demo mode we mock successful save
    setTimeout(() => setSavedStatus(prev => ({ ...prev, deepseek: false })), 3000);
  };

  const saveOpenRouterSettings = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('OpenRouter settings saved:', {
      apiKey: apiKeys.openrouterApiKey,
      dailyBudget: apiKeys.dailyBudgetLimit
    });
    setSavedStatus(prev => ({ ...prev, openrouter: true }));
    // In demo mode we mock successful save
    setTimeout(() => setSavedStatus(prev => ({ ...prev, openrouter: false })), 3000);
  };

  // Mock API connection status - in a real app would check actual connection
  const connectionStatus = {
    deepseek: apiKeys.deepseekApiKey.length > 10,
    openrouter: apiKeys.openrouterApiKey.length > 10
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">API Key Management</h2>
      
      <div className="space-y-8">
        {/* DeepSeek API Section */}
        <div className="border-b border-gray-700 pb-6">
          <h3 className="text-lg font-medium text-white mb-4">DeepSeek AI API</h3>
          
          <div className="flex items-center mb-3">
            <div className={`w-3 h-3 rounded-full mr-2 ${connectionStatus.deepseek ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-300">
              {connectionStatus.deepseek ? 'Connected' : 'Not Connected'}
            </span>
          </div>
          
          <form onSubmit={saveDeepseekSettings} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                API Key
              </label>
              <div className="relative">
                <input 
                  type={maskedKeys.deepseekApiKey ? 'password' : 'text'}
                  name="deepseekApiKey"
                  value={apiKeys.deepseekApiKey}
                  onChange={handleChange}
                  placeholder="Enter DeepSeek API Key"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white pr-10"
                />
                <button 
                  type="button"
                  onClick={() => toggleVisibility('deepseekApiKey')}
                  className="absolute inset-y-0 right-0 px-3 text-gray-400"
                >
                  {maskedKeys.deepseekApiKey ? 'Show' : 'Hide'}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Organization ID (Optional)
              </label>
              <input 
                type="text"
                name="deepseekOrgId"
                value={apiKeys.deepseekOrgId}
                onChange={handleChange}
                placeholder="Enter Organization ID"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Daily Budget Limit (USD)
              </label>
              <input 
                type="number"
                name="dailyBudgetLimit"
                value={apiKeys.dailyBudgetLimit}
                onChange={handleChange}
                min="1"
                max="100"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex justify-center items-center"
              >
                {savedStatus.deepseek ? 'Saved!' : 'Save DeepSeek Settings'}
              </button>
            </div>
          </form>
        </div>
        
        {/* OpenRouter API Section */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">OpenRouter API</h3>
          
          <div className="flex items-center mb-3">
            <div className={`w-3 h-3 rounded-full mr-2 ${connectionStatus.openrouter ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-300">
              {connectionStatus.openrouter ? 'Connected' : 'Not Connected'}
            </span>
          </div>
          
          <form onSubmit={saveOpenRouterSettings} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                API Key
              </label>
              <div className="relative">
                <input 
                  type={maskedKeys.openrouterApiKey ? 'password' : 'text'}
                  name="openrouterApiKey"
                  value={apiKeys.openrouterApiKey}
                  onChange={handleChange}
                  placeholder="Enter OpenRouter API Key"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white pr-10"
                />
                <button 
                  type="button"
                  onClick={() => toggleVisibility('openrouterApiKey')}
                  className="absolute inset-y-0 right-0 px-3 text-gray-400"
                >
                  {maskedKeys.openrouterApiKey ? 'Show' : 'Hide'}
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Daily Budget Limit (USD)
              </label>
              <input 
                type="number"
                name="dailyBudgetLimit"
                value={apiKeys.dailyBudgetLimit}
                onChange={handleChange}
                min="1"
                max="100"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex justify-center items-center"
              >
                {savedStatus.openrouter ? 'Saved!' : 'Save OpenRouter Settings'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 