
import React from 'react';
import { Shield } from 'lucide-react';

const Permissions = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Permissions</h1>
          <p className="text-gray-600">Manage user roles and access permissions</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-100 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield size={32} className="text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Permission Management</h3>
          <p className="text-gray-600">Configure user roles and permissions to control access to different features and data.</p>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
