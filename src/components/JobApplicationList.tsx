
import React from 'react';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import JobStatusBadge from '@/components/JobStatusBadge';
import { JobApplication } from '@/types/job-types';

interface JobApplicationListProps {
  applications: JobApplication[];
  onEdit: (job: JobApplication) => void;
  onDelete: (id: string) => void;
}

const JobApplicationList = ({ 
  applications,
  onEdit,
  onDelete
}: JobApplicationListProps) => {
  return (
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
          {applications.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.job_title}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell><JobStatusBadge status={job.status} /></TableCell>
              <TableCell>{new Date(job.updated_at).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(job)}
                    title="Edit"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(job.id)}
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
  );
};

export default JobApplicationList;
