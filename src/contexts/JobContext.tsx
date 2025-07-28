import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Job } from '../types/Job';
import { mockJobs } from '../mock/jobs';

interface JobContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id' | 'postedDate'>) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

interface JobProviderProps {
  children: ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);

  const addJob = (jobData: Omit<Job, 'id' | 'postedDate'>) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      postedDate: new Date().toISOString().split('T')[0]
    };
    
    setJobs(prevJobs => [newJob, ...prevJobs]);
  };

  const value = {
    jobs,
    addJob
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
}; 