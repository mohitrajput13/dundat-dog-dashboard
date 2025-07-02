
import React, { useState } from 'react';
import { Plus, Calendar, MapPin, Clock, DollarSign, Edit, Trash2 } from 'lucide-react';
import AddEventModal from './AddEventModal';

const EventManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      name: 'Summer Music Festival',
      category: 'Music',
      description: 'Annual outdoor music festival featuring local and international artists',
      location: 'Central Park',
      date: '15/7/2025',
      time: '18:00 PM',
      price: '$45',
      status: 'Paid'
    },
    {
      name: 'Art Gallery Opening',
      category: 'Arts',
      description: 'Opening night for contemporary art exhibition',
      location: 'Downtown Gallery',
      date: '8/8/2025',
      time: '18:00 PM',
      price: 'Free',
      status: 'Free'
    },
    {
      name: 'Art Gallery Opening',
      category: 'Arts',
      description: 'Opening night for contemporary art exhibition',
      location: 'Downtown Gallery',
      date: '8/8/2025',
      time: '18:00 PM',
      price: 'Free',
      status: 'Free'
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Music': return 'bg-purple-100 text-purple-800';
      case 'Arts': return 'bg-pink-100 text-pink-800';
      case 'Sports': return 'bg-blue-100 text-blue-800';
      case 'Food': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Event Manager</h1>
          <p className="text-gray-600">Create and manage all your events</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>Add Event</span>
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Category Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  <Edit size={16} />
                </button>
                <button 
                  onClick={() => console.log(`Delete event: ${event.name}`)}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Event Title and Description */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>

            {/* Event Details */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin size={14} className="mr-2 text-gray-400" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={14} className="mr-2 text-gray-400" />
                {event.date}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={14} className="mr-2 text-gray-400" />
                {event.time}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign size={14} className="mr-2 text-gray-400" />
                  {event.price}
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  event.status === 'Paid' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                }`}>
                  {event.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddEventModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default EventManager;
