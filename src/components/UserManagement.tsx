
import React, { useState } from 'react';
import { Search, Plus, Edit, Eye } from 'lucide-react';
import AddUserModal from './AddUserModal';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const users = [
    { name: 'Joe Doe', email: 'joedoe123@gmail.com', location: 'New York', status: 'Active', joinDate: '24/4/2024' },
    { name: 'Mike Jones', email: 'mikejones123@gmail.com', location: 'Los Angeles', status: 'Active', joinDate: '20/6/2024' },
    { name: 'Joe Smith', email: 'joesmith23@gmail.com', location: 'Chicago', status: 'Active', joinDate: '30/4/2024' },
    { name: 'Smith Jones', email: 'smithjones123@gmail.com', location: 'Houston', status: 'Active', joinDate: '12/8/2024' },
    { name: 'Sahra Wilson', email: 'sahrawilson123@gmail.com', location: 'Los Angeles', status: 'Active', joinDate: '18/12/2024' },
    { name: 'Ronak Obama', email: 'ronakobama123@gmail.com', location: 'Miami', status: 'Active', joinDate: '1/3/2025' },
    { name: 'Michael Obama', email: 'michaelobama123@gmail.com', location: 'New York', status: 'Active', joinDate: '5/3/2025' },
    { name: 'Miya Jack', email: 'miyajack123@gmail.com', location: 'Chicago', status: 'Active', joinDate: '6/3/2025' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage Register business users</p>
        </div>
        <button 
          onClick={() => setIsAddUserModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>Add new users</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">All Users ({users.length})</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Users..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{user.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => console.log(`Edit user: ${user.name}`)}
                      className="text-orange-600 hover:text-orange-900 mr-3"
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

      <AddUserModal 
        isOpen={isAddUserModalOpen} 
        onClose={() => setIsAddUserModalOpen(false)} 
      />
    </div>
  );
};

export default UserManagement;
