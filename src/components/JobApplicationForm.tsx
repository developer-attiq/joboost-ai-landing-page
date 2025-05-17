import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { JobApplication, JobStatus } from '@/types/job-types';

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
    
    if (!user) {
      toast.error('You must be logged in to save job applications');
      return;
    }

    if (!formData.job_title || !formData.company) {
      toast.error('Job title and company are required');
      return;
    }

    setIsSubmitting(true);

    try {
      if (job) {
        // Update existing job
        const { error } = await supabase
          .from('job_applications')
          .update({
            job_title: formData.job_title,
            company: formData.company,
            job_link: formData.job_link || null,
            status: formData.status,
            notes: formData.notes || null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', job.id);

        if (error) throw error;
        toast.success('Job application updated successfully');
      } else {
        // Create new job
        const { error } = await supabase
          .from('job_applications')
          .insert({
            job_title: formData.job_title,
            company: formData.company,
            job_link: formData.job_link || null,
            status: formData.status,
            notes: formData.notes || null,
            user_id: user.id,
          });

        if (error) throw error;
        toast.success('Job application added successfully');
      }

      onSave();
    } catch (error: any) {
      toast.error(error.message || 'Error saving job application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-2">
      <div className="space-y-2">
        <Label htmlFor="job_title">Job Title</Label>
        <Input
          id="job_title"
          name="job_title"
          value={formData.job_title}
          onChange={handleChange}
          placeholder="e.g., Frontend Developer"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g., Acme Inc."
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="job_link">Job Link (Optional)</Label>
        <Input
          id="job_link"
          name="job_link"
          value={formData.job_link}
          onChange={handleChange}
          placeholder="https://..."
          type="url"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select 
          value={formData.status} 
          onValueChange={handleStatusChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Wishlist">Wishlist</SelectItem>
            <SelectItem value="Applied">Applied</SelectItem>
            <SelectItem value="Interview">Interview</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Offer">Offer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="notes">Notes (Optional)</Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Add any notes or details about this application..."
          rows={3}
        />
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 
            <><div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div> Saving...</> : 
            (job ? 'Update' : 'Add')}
        </Button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
