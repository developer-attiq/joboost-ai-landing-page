
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { JobStatus } from '@/types/job-types';

interface FormFieldsProps {
  formData: {
    job_title: string;
    company: string;
    job_link: string;
    status: JobStatus;
    notes: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleStatusChange: (value: string) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({ 
  formData, 
  handleChange, 
  handleStatusChange 
}) => {
  return (
    <>
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
    </>
  );
};
