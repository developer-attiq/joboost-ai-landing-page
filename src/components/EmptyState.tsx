
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onAddClick: () => void;
}

const EmptyState = ({ onAddClick }: EmptyStateProps) => {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium mb-2">No job applications yet</h3>
      <p className="text-gray-500 mb-4">Start tracking your job search by adding your first application</p>
      <Button onClick={onAddClick}>
        <Plus className="mr-2 h-4 w-4" /> Add Your First Job
      </Button>
    </div>
  );
};

export default EmptyState;
