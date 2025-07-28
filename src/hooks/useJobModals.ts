import { useState, useCallback } from 'react';
import { Job } from '../types/Job';
import { useModal } from './useModal';

export const useJobModals = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  const postJobModal = useModal();
  const jobDetailModal = useModal();

  const openPostJobModal = useCallback(() => {
    postJobModal.open();
  }, [postJobModal]);

  const closePostJobModal = useCallback(() => {
    postJobModal.close();
  }, [postJobModal]);

  const openJobDetailModal = useCallback((job: Job) => {
    setSelectedJob(job);
    jobDetailModal.open();
  }, [jobDetailModal]);

  const closeJobDetailModal = useCallback(() => {
    setSelectedJob(null);
    jobDetailModal.close();
  }, [jobDetailModal]);

  return {
    // Post Job Modal
    isPostModalOpen: postJobModal.isOpen,
    openPostJobModal,
    closePostJobModal,
    
    // Job Detail Modal
    selectedJob,
    isJobDetailModalOpen: jobDetailModal.isOpen,
    openJobDetailModal,
    closeJobDetailModal
  };
}; 