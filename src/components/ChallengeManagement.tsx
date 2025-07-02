
import React, { useState } from 'react';
import { Search, Plus, Edit } from 'lucide-react';
import AddChallengeModal from './AddChallengeModal';

const ChallengeManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddChallengeModalOpen, setIsAddChallengeModalOpen] = useState(false);

  const challenges = [
    { 
      title: 'Downtown Art Walk', 
      location: 'Downtown District', 
      photoSpots: 4, 
      difficulty: 'Easy', 
      rewards: '3 Bones', 
      status: 'Active',
      participants: ['J', 'C']
    },
    { 
      title: 'Historic Building Hunt', 
      location: 'Historic Quarter', 
      photoSpots: 8, 
      difficulty: 'Medium', 
      rewards: '5 Bones + Badge', 
      status: 'Active',
      participants: []
    },
    { 
      title: 'Sunset Views Challenge', 
      location: 'Hilltop Arena', 
      photoSpots: 3, 
      difficulty: 'Hard', 
      rewards: '8 Bones + Coupon', 
      status: 'Draft',
      participants: []
    },
  ];

  const filteredChallenges = challenges.filter(challenge =>
    challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    challenge.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 min-h-screen">
      {/* Header - Fixed positioning to prevent overlap */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Challenges Management</h1>
          <p className="text-gray-600">Create and manage photo challenges</p>
        </div>
        <button 
          onClick={() => setIsAddChallengeModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2 whitespace-nowrap shadow-md"
        >
          <Plus size={16} />
          <span>Add Challenge</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
          <h2 className="text-lg font-semibold text-gray-900">All Challenges ({challenges.length})</h2>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Challenges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full sm:w-64"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo Spots</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rewards</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredChallenges.map((challenge, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="font-medium text-gray-900">{challenge.title}</div>
                      {challenge.participants.length > 0 && (
                        <div className="ml-2 flex -space-x-1">
                          {challenge.participants.map((participant, idx) => (
                            <div key={idx} className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-white">
                              {participant}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{challenge.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{challenge.photoSpots}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-orange-600 font-medium">{challenge.rewards}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(challenge.status)}`}>
                      {challenge.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => console.log(`Edit challenge: ${challenge.title}`)}
                      className="text-orange-600 hover:text-orange-900"
                    >
                      <Edit size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddChallengeModal 
        isOpen={isAddChallengeModalOpen} 
        onClose={() => setIsAddChallengeModalOpen(false)} 
      />
    </div>
  );
};

export default ChallengeManagement;
