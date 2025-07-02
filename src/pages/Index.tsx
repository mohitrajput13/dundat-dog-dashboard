
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardOverview from '../components/DashboardOverview';
import UserManagement from '../components/UserManagement';
import PlayerManagement from '../components/PlayerManagement';
import ChallengeManagement from '../components/ChallengeManagement';
import EventManager from '../components/EventManager';
import RewardManagement from '../components/RewardManagement';
import Transactions from '../components/Transactions';
import Notifications from '../components/Notifications';
import Permissions from '../components/Permissions';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF5F0] flex">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/players" element={<PlayerManagement />} />
            <Route path="/challenges" element={<ChallengeManagement />} />
            <Route path="/events" element={<EventManager />} />
            <Route path="/rewards" element={<RewardManagement />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/permissions" element={<Permissions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Index;
