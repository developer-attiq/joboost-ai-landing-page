
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobApplicationList from '@/components/JobApplicationList';
import EmptyState from '@/components/EmptyState';
import JobApplicationModal from '@/components/JobApplicationModal';
import DeleteConfirmationDialog from '@/components/DeleteConfirmationDialog';
import { JobApplication } from '@/types/job-types';

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
        status: job.status as JobApplication['status']
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

  const handleJobSaved = () => {
    fetchJobApplications();
    setIsModalOpen(false);
    setCurrentJob(null);
  };

  const openAddJobModal = () => {
    setCurrentJob(null);
    setIsModalOpen(true);
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
          <Button onClick={openAddJobModal}>
            <Plus className="mr-2 h-4 w-4" /> Add Job
          </Button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : jobApplications.length === 0 ? (
          <EmptyState onAddClick={openAddJobModal} />
        ) : (
          <JobApplicationList 
            applications={jobApplications} 
            onEdit={handleEdit} 
            onDelete={confirmDelete} 
          />
        )}

        <JobApplicationModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          currentJob={currentJob}
          onSave={handleJobSaved}
        />

        <DeleteConfirmationDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          onConfirm={handleDelete}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
