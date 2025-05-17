
import { supabase } from '@/integrations/supabase/client';
import { JobApplication, JobStatus } from '@/types/job-types';
import { toast } from 'sonner';

interface FormData {
  job_title: string;
  company: string;
  job_link: string | null;
  status: JobStatus;
  notes: string | null;
}

export const submitJobApplication = async (
  formData: FormData,
  job: JobApplication | null,
  userId: string
): Promise<{ success: boolean; error?: any }> => {
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
      return { success: true };
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
          user_id: userId,
        });

      if (error) throw error;
      toast.success('Job application added successfully');
      return { success: true };
    }
  } catch (error: any) {
    toast.error(error.message || 'Error saving job application');
    return { success: false, error };
  }
};
