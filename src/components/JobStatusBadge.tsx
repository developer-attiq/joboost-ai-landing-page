
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { JobStatus } from '@/types/job-types';

interface JobStatusBadgeProps {
  status: JobStatus;
}

const JobStatusBadge = ({ status }: JobStatusBadgeProps) => {
  const statusStyles = {
    'Wishlist': 'bg-blue-100 text-blue-800 hover:bg-blue-100',
    'Applied': 'bg-purple-100 text-purple-800 hover:bg-purple-100',
    'Interview': 'bg-amber-100 text-amber-800 hover:bg-amber-100',
    'Rejected': 'bg-red-100 text-red-800 hover:bg-red-100',
    'Offer': 'bg-green-100 text-green-800 hover:bg-green-100'
  };
  
  return (
    <Badge className={statusStyles[status] || ''} variant="outline">
      {status}
    </Badge>
  );
};

export default JobStatusBadge;
