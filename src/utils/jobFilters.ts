// Types
import { Job } from '../types/Job';
import { FilterState } from '../types/FilterState';

export const filterJobs = (jobs: Job[], filters: FilterState): Job[] => {
  const { search, location, jobType, experience } = filters;    
  
  if (!search && !location && !jobType && !experience) {
    return jobs;
  }

  return jobs.filter(job => {      
    if (search) {
      const searchLower = search.toLowerCase();
      const matchesSearch = job.title.toLowerCase().includes(searchLower) ||
                           job.company.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    if (location && !job.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }

    if (jobType && job.type !== jobType) {
      return false;
    }

    if (experience && job.experience !== experience) {
      return false;
    }

    return true;
  });
}; 