'use client';

import React, { useState } from 'react';

type ModelType = 'dqn' | 'ppo' | 'transformer';

interface ModelInfo {
  id: ModelType;
  name: string;
  description: string;
  strengths: string[];
  bestFor: string[];
  complexity: 'Low' | 'Medium' | 'High';
  inferenceSpeed: 'Fast' | 'Medium' | 'Slow';
  provider: 'deepseek' | 'openrouter' | 'both';
}

const modelInfo: Record<ModelType, ModelInfo> = {
  dqn: {
    id: 'dqn',
    name: 'Deep Q-Network (DQN)',
    description: 'A deep learning model that learns the value of actions in different states, suited for discrete action spaces.',
    strengths: [
      'Handles complex state representations',
      'Good for discrete action spaces (buy, sell, hold)',
      'Efficient memory usage with experience replay',
      'Reduces overestimation bias with dual networks'
    ],
    bestFor: [
      'Simple trading strategies',
      'Low frequency trading',
      'Limited action space'
    ],
    complexity: 'Medium',
    inferenceSpeed: 'Fast',
    provider: 'both'
  },
  ppo: {
    id: 'ppo',
    name: 'Proximal Policy Optimization (PPO)',
    description: 'A policy gradient method that stabilizes training by limiting policy updates, ideal for continuous action spaces.',
    strengths: [
      'Handles continuous action spaces',
      'More stable training dynamics',
      'Good sample efficiency',
      'Balances exploration and exploitation'
    ],
    bestFor: [
      'Position sizing strategies',
      'Multi-asset portfolio allocation',
      'Dynamic risk management'
    ],
    complexity: 'Medium',
    inferenceSpeed: 'Medium',
    provider: 'deepseek'
  },
  transformer: {
    id: 'transformer',
    name: 'Transformer-Based Model',
    description: 'Utilizes attention mechanisms to capture temporal dependencies in market data across multiple timeframes.',
    strengths: [
      'Superior pattern recognition in time series',
      'Captures long-range dependencies',
      'Processes multiple data streams simultaneously',
      'Better handling of market regime changes'
    ],
    bestFor: [
      'Complex market environments',
      'Multi-timeframe analysis',
      'Sentiment integration',
      'Trend detection'
    ],
    complexity: 'High',
    inferenceSpeed: 'Slow',
    provider: 'both'
  }
};

export default function ModelSelection() {
  const [selectedModel, setSelectedModel] = useState<ModelType>('dqn');
  const [enableEnsemble, setEnableEnsemble] = useState(false);
  const [ensembleWeights, setEnsembleWeights] = useState({
    dqn: 33,
    ppo: 33,
    transformer: 34
  });

  const handleModelSelect = (modelType: ModelType) => {
    setSelectedModel(modelType);
  };

  const handleEnableEnsemble = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnableEnsemble(e.target.checked);
  };

  const handleWeightChange = (model: ModelType, value: number) => {
    // Calculate other weights to ensure sum is 100
    const remaining = 100 - value;
    const otherModels = Object.keys(ensembleWeights).filter(m => m !== model) as ModelType[];
    
    // Distribute remaining percentage proportionally among other models
    const currentOtherTotal = otherModels.reduce((sum, m) => sum + ensembleWeights[m], 0);
    const newWeights: Record<ModelType, number> = { ...ensembleWeights, [model]: value };
    
    if (currentOtherTotal > 0) {
      otherModels.forEach(m => {
        const proportion = ensembleWeights[m] / currentOtherTotal;
        newWeights[m] = Math.round(remaining * proportion);
      });
      
      // Adjust for rounding errors to ensure total is exactly 100
      const total = Object.values(newWeights).reduce((sum, w) => sum + w, 0);
      if (total !== 100) {
        newWeights[otherModels[0]] += (100 - total);
      }
    } else {
      // Equal distribution if all others were 0
      otherModels.forEach(m => {
        newWeights[m] = Math.floor(remaining / otherModels.length);
      });
      // Add remainder to last model
      newWeights[otherModels[otherModels.length - 1]] += remaining - (Math.floor(remaining / otherModels.length) * otherModels.length);
    }
    
    setEnsembleWeights(newWeights);
  };

  const applyModelSettings = () => {
    // In a real app, this would save to backend or global state
    console.log('Model settings applied:', {
      mode: enableEnsemble ? 'ensemble' : 'single',
      selectedModel: enableEnsemble ? 'ensemble' : selectedModel,
      weights: enableEnsemble ? ensembleWeights : null
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Model Selection</h2>
      
      <div className="mb-6">
        <label className="flex items-center space-x-3 mb-6">
          <input
            type="checkbox"
            checked={enableEnsemble}
            onChange={handleEnableEnsemble}
            className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-600 bg-gray-700"
          />
          <span className="text-white font-medium">Enable Ensemble Strategy</span>
        </label>
        
        {enableEnsemble ? (
          <div className="space-y-6">
            <p className="text-gray-300 text-sm">
              An ensemble strategy combines predictions from multiple models. Adjust the weight of each model in the ensemble.
            </p>
            
            {Object.values(modelInfo).map((model) => (
              <div key={model.id} className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-white text-sm">{model.name}</label>
                  <span className="text-gray-400 text-sm">{ensembleWeights[model.id]}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ensembleWeights[model.id]}
                  onChange={(e) => handleWeightChange(model.id, parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {Object.values(modelInfo).map((model) => (
              <div 
                key={model.id}
                className={`border rounded-lg p-4 cursor-pointer 
                  ${selectedModel === model.id 
                    ? 'border-blue-500 bg-gray-700' 
                    : 'border-gray-700 bg-gray-800 hover:bg-gray-750'}`}
                onClick={() => handleModelSelect(model.id)}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-white">{model.name}</h3>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      model.complexity === 'Low' ? 'bg-green-900 text-green-300' :
                      model.complexity === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {model.complexity} Complexity
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      model.inferenceSpeed === 'Fast' ? 'bg-green-900 text-green-300' :
                      model.inferenceSpeed === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {model.inferenceSpeed}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{model.description}</p>
                
                <div className="mb-3">
                  <h4 className="text-gray-400 text-xs uppercase mb-1">Best For</h4>
                  <div className="flex flex-wrap gap-2">
                    {model.bestFor.map((item, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-xs uppercase mb-1">Strengths</h4>
                  <ul className="text-gray-300 text-sm list-disc list-inside">
                    {model.strengths.slice(0, 2).map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-3 text-xs text-blue-400">
                  Available on: {model.provider === 'both' ? 'DeepSeek & OpenRouter' : 
                                model.provider === 'deepseek' ? 'DeepSeek only' : 'OpenRouter only'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <button
        onClick={applyModelSettings}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
      >
        Apply Model Settings
      </button>
    </div>
  );
} 