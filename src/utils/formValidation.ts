
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

export const validateAIRequest = (
  prompt: string,
  userId: string | undefined,
  contentType: 'resume' | 'cover_letter' | 'interview_prep'
): { isValid: boolean; error?: string } => {
  if (!userId) {
    return { isValid: false, error: 'You must be logged in to use AI tools' };
  }

  if (!prompt || prompt.trim().length < 10) {
    return { isValid: false, error: 'Please provide a detailed prompt (at least 10 characters)' };
  }

  return { isValid: true };
};
