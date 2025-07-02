
import React, { useState } from 'react';
import Modal from './Modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddRewardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddRewardModal = ({ isOpen, onClose }: AddRewardModalProps) => {
  const [formData, setFormData] = useState({
    rewardName: '',
    points: '',
    description: '',
    status: 'Active'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reward Data:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Reward">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="rewardName">Reward Name</Label>
          <Input
            id="rewardName"
            name="rewardName"
            value={formData.rewardName}
            onChange={handleChange}
            placeholder="Free Coffee Voucher"
            required
          />
        </div>

        <div>
          <Label htmlFor="points">Points Required</Label>
          <Input
            id="points"
            name="points"
            type="number"
            value={formData.points}
            onChange={handleChange}
            placeholder="100"
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enjoy a free coffee at participating locations"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="status">Status</Label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600"
          >
            Add Reward
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddRewardModal;
