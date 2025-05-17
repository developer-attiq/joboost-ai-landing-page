
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import JobApplicationForm from '@/components/JobApplicationForm';
import { JobApplication } from '@/types/job-types';

interface JobApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentJob: JobApplication | null;
  onSave: () => void;
}

const JobApplicationModal = ({
  open,
  onOpenChange,
  currentJob,
  onSave
}: JobApplicationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{currentJob ? 'Edit Job Application' : 'Add Job Application'}</DialogTitle>
          <DialogDescription>
            {currentJob ? 'Edit details for this job application.' : 'Enter details for your new job application.'}
          </DialogDescription>
        </DialogHeader>
        
        <JobApplicationForm 
          job={currentJob} 
          onSave={onSave} 
          onCancel={() => onOpenChange(false)} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
