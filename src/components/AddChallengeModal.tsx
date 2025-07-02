
import React, { useState } from 'react';
import Modal from './Modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddChallengeModal = ({ isOpen, onClose }: AddChallengeModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    photoSpots: '',
    difficulty: 'Easy',
    rewards: '',
    status: 'Active'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Challenge Data:', formData);
    onClose();
    // Reset form
    setFormData({
      title: '',
      location: '',
      photoSpots: '',
      difficulty: 'Easy',
      rewards: '',
      status: 'Active'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Challenge">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Downtown Art Walk"
            required
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Downtown District"
            required
          />
        </div>

        <div>
          <Label htmlFor="photoSpots">Photo Spots</Label>
          <Input
            id="photoSpots"
            name="photoSpots"
            type="number"
            value={formData.photoSpots}
            onChange={handleChange}
            placeholder="4"
            required
          />
        </div>

        <div>
          <Label htmlFor="difficulty">Difficulty</Label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <Label htmlFor="rewards">Rewards</Label>
          <Input
            id="rewards"
            name="rewards"
            value={formData.rewards}
            onChange={handleChange}
            placeholder="3 Bones"
            required
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
            <option value="Draft">Draft</option>
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
            Add Challenge
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddChallengeModal;
