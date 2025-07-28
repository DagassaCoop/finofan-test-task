// Core
import { useState, useCallback } from 'react';

// Types
import { Job } from '../types/Job';
// Hooks
import { useModal } from './useModal';

export const useJobModals = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  const postJobModal = useModal();
  const jobDetailModal = useModal();
  const applicationModal = useModal();

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

  const openApplicationModal = useCallback((job: Job) => {
    setSelectedJob(job);
    applicationModal.open();
  }, [applicationModal]);

  const closeApplicationModal = useCallback(() => {
    setSelectedJob(null);
    applicationModal.close();
  }, [applicationModal]);

  return {
    // Post Job Modal
    isPostModalOpen: postJobModal.isOpen,
    openPostJobModal,
    closePostJobModal,
    
    // Job Detail Modal
    selectedJob,
    isJobDetailModalOpen: jobDetailModal.isOpen,
    openJobDetailModal,
    closeJobDetailModal,

    // Application Modal
    isApplicationModalOpen: applicationModal.isOpen,
    openApplicationModal,
    closeApplicationModal
  };
}; 