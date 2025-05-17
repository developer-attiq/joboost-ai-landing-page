import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, ExternalLink } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobApplicationForm from '@/components/JobApplicationForm';
import { Badge } from '@/components/ui/badge';

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

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<JobApplication | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/signin');
    } else if (user) {
      fetchJobApplications();
    }
  }, [user, loading, navigate]);

  const fetchJobApplications = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('job_applications')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) {
        throw error;
      }

      // Cast the status to JobStatus type since we know the database enforces valid values
      setJobApplications((data || []).map(job => ({
        ...job,
        status: job.status as JobStatus
      })));
    } catch (error: any) {
      toast.error('Error fetching job applications: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (job: JobApplication) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!jobToDelete) return;
    
    try {
      const { error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', jobToDelete);

      if (error) {
        throw error;
      }

      setJobApplications(jobApplications.filter(job => job.id !== jobToDelete));
      toast.success('Job application deleted successfully');
      setDeleteDialogOpen(false);
      setJobToDelete(null);
    } catch (error: any) {
      toast.error('Error deleting job application: ' + error.message);
    }
  };

  const confirmDelete = (id: string) => {
    setJobToDelete(id);
    setDeleteDialogOpen(true);
  };

  const getStatusBadge = (status: JobStatus) => {
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

  const handleJobSaved = () => {
    fetchJobApplications();
    setIsModalOpen(false);
    setCurrentJob(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Job Applications</h1>
          <Button onClick={() => { setCurrentJob(null); setIsModalOpen(true); }}>
            <Plus className="mr-2 h-4 w-4" /> Add Job
          </Button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : jobApplications.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium mb-2">No job applications yet</h3>
            <p className="text-gray-500 mb-4">Start tracking your job search by adding your first application</p>
            <Button onClick={() => { setCurrentJob(null); setIsModalOpen(true); }}>
              <Plus className="mr-2 h-4 w-4" /> Add Your First Job
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead className="w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobApplications.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.job_title}</TableCell>
                    <TableCell>{job.company}</TableCell>
                    <TableCell>{getStatusBadge(job.status)}</TableCell>
                    <TableCell>{new Date(job.updated_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(job)}
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => confirmDelete(job.id)}
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        {job.job_link && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => window.open(job.job_link as string, '_blank')}
                            title="Open job posting"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>{currentJob ? 'Edit Job Application' : 'Add Job Application'}</DialogTitle>
              <DialogDescription>
                {currentJob ? 'Edit details for this job application.' : 'Enter details for your new job application.'}
              </DialogDescription>
            </DialogHeader>
            
            <JobApplicationForm 
              job={currentJob} 
              onSave={handleJobSaved} 
              onCancel={() => setIsModalOpen(false)} 
            />
          </DialogContent>
        </Dialog>

        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this job application? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDelete}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
