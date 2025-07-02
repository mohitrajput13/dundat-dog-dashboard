
import React, { useState } from 'react';
import { Search, Plus, Eye, Settings } from 'lucide-react';

const PlayerManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const players = [
    { name: 'Joe Doe', username: '@joedoe123', bonesEarned: '700 Bones', rewards: 14, challenges: 12, status: 'Active' },
    { name: 'Mike Jones', username: '@mikejones123', bonesEarned: '650 Bones', rewards: 8, challenges: 6, status: 'Active' },
    { name: 'Joe Smith', username: '@joesmith123', bonesEarned: '500 Bones', rewards: 4, challenges: 14, status: 'Active' },
    { name: 'Smith Jones', username: '@smithjones123', bonesEarned: '450 Bones', rewards: 16, challenges: 18, status: 'Active' },
    { name: 'Sahra Wilson', username: '@sahrawilson123', bonesEarned: '800 Bones', rewards: 12, challenges: 23, status: 'Active' },
    { name: 'Ronak Obama', username: '@ronakobama12', bonesEarned: '300 Bones', rewards: 10, challenges: 5, status: 'Active' },
    { name: 'Michael Obama', username: '@michaelobama123', bonesEarned: '550 Bones', rewards: 13, challenges: 22, status: 'Active' },
    { name: 'Miya Jack', username: '@miyajack123', bonesEarned: '750 Bones', rewards: 16, challenges: 18, status: 'Active' },
  ];

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Players Management</h1>
          <p className="text-gray-600">Manage all register players</p>
        </div>
        <button 
          onClick={() => console.log('Add new users clicked')}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>Add new users</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">All Players ({players.length})</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bones Earned</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rewards</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Challenges</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPlayers.map((player, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{player.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{player.username}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-orange-600 font-medium">{player.bonesEarned}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{player.rewards}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{player.challenges}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {player.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => console.log(`View player: ${player.name}`)}
                      className="text-gray-600 hover:text-gray-900 mr-3"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      onClick={() => console.log(`Settings for player: ${player.name}`)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Settings size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerManagement;
