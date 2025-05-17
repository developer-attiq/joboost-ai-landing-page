
export const validateJobApplication = (
  jobTitle: string, 
  company: string,
  userId: string | undefined
): { isValid: boolean; error?: string } => {
  if (!userId) {
    return { isValid: false, error: 'You must be logged in to save job applications' };
  }

  if (!jobTitle || !company) {
    return { isValid: false, error: 'Job title and company are required' };
  }

  return { isValid: true };
};
