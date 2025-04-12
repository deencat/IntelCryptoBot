"use client";

import React, { useState, useMemo } from 'react';
import { logData } from '../lib/mockData';

type LogType = 'ERROR' | 'WARNING' | 'INFO' | 'TRADE' | 'SIGNAL' | 'ALL';

export default function LogViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [logTypeFilter, setLogTypeFilter] = useState<LogType>('ALL');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // newest first by default
  const [expandedLogIndex, setExpandedLogIndex] = useState<number | null>(null);

  // Filter and sort logs based on user selections
  const filteredLogs = useMemo(() => {
    let filtered = [...logData];
    
    // Apply type filter
    if (logTypeFilter !== 'ALL') {
      filtered = filtered.filter(log => log.type === logTypeFilter);
    }
    
    // Apply search filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        log => log.message.toLowerCase().includes(term) || 
               log.type.toLowerCase().includes(term)
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      const timeA = new Date(`1970/01/01 ${a.timestamp}`).getTime();
      const timeB = new Date(`1970/01/01 ${b.timestamp}`).getTime();
      return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
    });
    
    return filtered;
  }, [logTypeFilter, searchTerm, sortOrder]);

  // Handle log type selection
  const handleLogTypeChange = (type: LogType) => {
    setLogTypeFilter(type);
    setExpandedLogIndex(null); // Reset expanded log when changing filter
  };

  // Handle log entry expansion
  const toggleExpandLog = (index: number) => {
    setExpandedLogIndex(expandedLogIndex === index ? null : index);
  };

  // Get type-specific styling
  const getLogTypeStyles = (type: string) => {
    switch (type) {
      case 'ERROR':
        return 'bg-red-900/20 text-red-400 border-red-800';
      case 'WARNING':
        return 'bg-yellow-900/20 text-yellow-400 border-yellow-800';
      case 'INFO':
        return 'bg-blue-900/20 text-blue-400 border-blue-800';
      case 'TRADE':
        return 'bg-green-900/20 text-green-400 border-green-800';
      case 'SIGNAL':
        return 'bg-purple-900/20 text-purple-400 border-purple-800';
      default:
        return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white mb-4">System Logs</h2>
        
        {/* Search and filter controls */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-400">Type:</label>
            <select
              value={logTypeFilter}
              onChange={(e) => handleLogTypeChange(e.target.value as LogType)}
              className="bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">All Types</option>
              <option value="ERROR">Error</option>
              <option value="WARNING">Warning</option>
              <option value="INFO">Info</option>
              <option value="TRADE">Trade</option>
              <option value="SIGNAL">Signal</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-400">Sort:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
              className="bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>
        
        {/* Log status */}
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <div>
            Showing {filteredLogs.length} of {logData.length} logs
          </div>
          <div>
            {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
      
      {/* Log entries */}
      <div className="overflow-y-auto max-h-96">
        {filteredLogs.length > 0 ? (
          <ul className="divide-y divide-gray-700">
            {filteredLogs.map((log, index) => (
              <li 
                key={index} 
                className={`p-3 hover:bg-gray-700 transition-colors cursor-pointer ${
                  expandedLogIndex === index ? 'bg-gray-700' : ''
                }`}
                onClick={() => toggleExpandLog(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className={`inline-block px-2 py-1 text-xs rounded-md font-medium ${getLogTypeStyles(log.type)}`}>
                        {log.type}
                      </span>
                      <span className="text-gray-400 text-sm ml-2">{log.timestamp}</span>
                    </div>
                    <p className="text-white">{log.message}</p>
                    
                    {/* Expanded log details */}
                    {expandedLogIndex === index && (
                      <div className="mt-3 p-3 bg-gray-800 rounded-md border border-gray-700">
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Log Details</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex">
                            <span className="w-24">Timestamp:</span>
                            <span className="text-white">{log.timestamp}</span>
                          </div>
                          <div className="flex">
                            <span className="w-24">Type:</span>
                            <span className={`text-${log.type === 'ERROR' ? 'red' : log.type === 'WARNING' ? 'yellow' : 'blue'}-400`}>
                              {log.type}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="w-24 mb-1">Message:</span>
                            <span className="text-white break-words">{log.message}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="w-24 mb-1">Context:</span>
                            <code className="text-xs bg-gray-900 p-2 rounded-md text-gray-300 block overflow-x-auto">
                              {JSON.stringify({ session: "abc123", type: log.type, time: log.timestamp, msg: log.message }, null, 2)}
                            </code>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-gray-500 transform transition-transform duration-200">
                    {expandedLogIndex === index ? '▼' : '▶'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-8 text-center text-gray-400">
            No logs found matching your filters
          </div>
        )}
      </div>
      
      {/* Export and clear buttons */}
      <div className="p-4 border-t border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm">
            Export Logs
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm">
            Clear Filters
          </button>
        </div>
        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm">
            Clear Logs
          </button>
        </div>
      </div>
    </div>
  );
} 