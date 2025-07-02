
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  Target, 
  Calendar, 
  Gift, 
  CreditCard, 
  Bell, 
  Shield, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Users', path: '/users', icon: Users },
    { name: 'Players', path: '/players', icon: Trophy },
    { name: 'Challenges', path: '/challenges', icon: Target },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Reward Management', path: '/rewards', icon: Gift },
    { name: 'Transactions', path: '/transactions', icon: CreditCard },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Permissions', path: '/permissions', icon: Shield },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // Add logout logic here
  };

  return (
    <>
      <div className={`fixed left-0 top-0 h-full bg-[#FFF5F0] border-r border-orange-100 transition-all duration-300 z-50 ${
        collapsed ? 'w-16' : 'w-64'
      }`}>
        {/* Header */}
        <div className="p-4 border-b border-orange-100">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐕</span>
                </div>
                <span className="font-bold text-xl text-gray-800">DUNDAT</span>
              </div>
            )}
            <button
              onClick={onToggle}
              className="p-1 rounded-lg hover:bg-orange-100 transition-colors"
            >
              {collapsed ? <Menu size={20} /> : <X size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-orange-100'
                } ${collapsed ? 'justify-center' : ''}`
              }
            >
              <item.icon size={20} />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors w-full ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <LogOut size={20} />
            {!collapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
