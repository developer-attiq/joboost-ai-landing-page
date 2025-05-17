
export type JobStatus = 'Wishlist' | 'Applied' | 'Interview' | 'Rejected' | 'Offer';

export interface JobApplication {
  id: string;
  job_title: string;
  company: string;
  job_link: string | null;
  status: JobStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
}
