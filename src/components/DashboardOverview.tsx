import React, { useState } from 'react';
import { Trophy, Target, Calendar, CreditCard, Plus, BarChart3, Users as UsersIcon, Eye } from 'lucide-react';
import ViewPlayerCardsModal from './ViewPlayerCardsModal';

const DashboardOverview = () => {
  const [isPlayerCardsModalOpen, setIsPlayerCardsModalOpen] = useState(false);

  const metrics = [
    { title: 'Total Players', value: '1,247', icon: Trophy, color: 'bg-orange-100 text-orange-600' },
    { title: 'Total Challenges', value: '89', icon: Target, color: 'bg-green-100 text-green-600' },
    { title: 'Total Events', value: '23', icon: Calendar, color: 'bg-blue-100 text-blue-600' },
    { title: 'Daily Transactions', value: '156', icon: CreditCard, color: 'bg-purple-100 text-purple-600' },
  ];

  const recentActivity = [
    { user: 'Jane Doe', action: 'Completed Challenge', time: '2 hours ago', type: 'challenge' },
    { user: 'Jane Smith', action: 'Redeemed Reward', time: '3 hours ago', type: 'reward' },
    { user: 'Mike Jonson', action: 'Joined Event', time: '4 hours ago', type: 'event' },
    { user: 'Sahra Winson', action: 'Earned 3 Bones', time: '5 hours ago', type: 'bones' },
  ];

  const quickActions = [
    { title: 'Add Challenge', icon: Plus, color: 'bg-orange-500' },
    { title: 'Create Event', icon: Calendar, color: 'bg-green-500' },
    { title: 'Manage Users', icon: UsersIcon, color: 'bg-blue-500' },
    { title: 'View Analytics', icon: BarChart3, color: 'bg-purple-500' },
  ];

  const getActivityBadgeColor = (type: string) => {
    switch (type) {
      case 'challenge': return 'bg-yellow-100 text-yellow-800';
      case 'reward': return 'bg-green-100 text-green-800';
      case 'event': return 'bg-blue-100 text-blue-800';
      case 'bones': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back here's what's happening today.</p>
        </div>
        <button 
          onClick={() => setIsPlayerCardsModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
        >
          <Eye size={16} />
          <span>View Player Cards</span>
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${metric.color}`}>
                <metric.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getActivityBadgeColor(activity.type)}`}>
                    {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => console.log(`${action.title} clicked`)}
                className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center space-y-2`}
              >
                <action.icon size={24} />
                <span className="text-sm font-medium text-center">{action.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ViewPlayerCardsModal 
        isOpen={isPlayerCardsModalOpen} 
        onClose={() => setIsPlayerCardsModalOpen(false)} 
      />
    </div>
  );
};

export default DashboardOverview;
