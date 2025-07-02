
import React from 'react';
import Modal from './Modal';

interface ViewPlayerCardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ViewPlayerCardsModal = ({ isOpen, onClose }: ViewPlayerCardsModalProps) => {
  const players = [
    { name: 'Joe Doe', email: 'joedoe123@gmail.com', location: 'New York', status: 'Active', joinDate: '24/04/2024' },
    { name: 'Mike Jones', email: 'mikejones123@gmail.com', location: 'California', status: 'Active', joinDate: '15/03/2024' },
    { name: 'Sahra Wilson', email: 'sahrawilson123@gmail.com', location: 'Texas', status: 'Active', joinDate: '10/02/2024' },
    { name: 'Smith Jones', email: 'smithjones123@gmail.com', location: 'Florida', status: 'Active', joinDate: '05/01/2024' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Player Cards">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
        {players.map((player, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{player.name}</h3>
                <p className="text-sm text-gray-600">{player.email}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="text-gray-900">{player.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  {player.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Join Date:</span>
                <span className="text-gray-900">{player.joinDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ViewPlayerCardsModal;
