
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { JobApplication, JobStatus } from '@/types/job-types';
import { FormFields } from './job-form/FormFields';
import { FormActions } from './job-form/FormActions';
import { validateJobApplication } from '@/utils/formValidation';
import { submitJobApplication } from '@/utils/jobApplicationSubmission';

interface JobApplicationFormProps {
  job: JobApplication | null;
  onSave: () => void;
  onCancel: () => void;
}

const JobApplicationForm = ({ job, onSave, onCancel }: JobApplicationFormProps) => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    job_title: job?.job_title || '',
    company: job?.company || '',
    job_link: job?.job_link || '',
    status: job?.status || 'Wishlist' as JobStatus,
    notes: job?.notes || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStatusChange = (value: string) => {
    setFormData({
      ...formData,
      status: value as JobStatus,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateJobApplication(
      formData.job_title,
      formData.company,
      user?.id
    );
    
    if (!validation.isValid) {
      toast.error(validation.error);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitJobApplication(
        {
          job_title: formData.job_title,
          company: formData.company,
          job_link: formData.job_link || null,
          status: formData.status,
          notes: formData.notes || null,
        },
        job,
        user!.id
      );
      
      if (result.success) {
        onSave();
      }
    } catch (error: any) {
      toast.error(error.message || 'Error saving job application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-2">
      <FormFields 
        formData={formData}
        handleChange={handleChange}
        handleStatusChange={handleStatusChange}
      />
      
      <FormActions 
        onCancel={onCancel}
        isSubmitting={isSubmitting}
        isEditing={!!job}
      />
    </form>
  );
};

export default JobApplicationForm;
