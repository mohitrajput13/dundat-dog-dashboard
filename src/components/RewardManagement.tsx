
import React from 'react';
import { Plus } from 'lucide-react';

const RewardManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reward Management</h1>
          <p className="text-gray-600">Manage player rewards and incentives</p>
        </div>
        <button 
          onClick={() => console.log('Add Reward clicked')}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>Add Reward</span>
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-100 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus size={32} className="text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Rewards Yet</h3>
          <p className="text-gray-600 mb-6">Create your first reward to start incentivizing player engagement.</p>
          <button 
            onClick={() => console.log('Create First Reward clicked')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Create First Reward
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardManagement;
