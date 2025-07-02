
import React from 'react';
import { Bell } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Manage system notifications and alerts</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-100 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell size={32} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Notifications</h3>
          <p className="text-gray-600">All notifications will appear here when there are updates or alerts to review.</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
