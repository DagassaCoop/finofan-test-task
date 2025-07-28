import { useState, useMemo } from 'react';

// Components
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import JobGrid from './components/JobGrid';
import PostJobModal from './components/PostJobModal';
import JobDetailModal from './components/JobDetailModal';
// Types
import { Job } from './types/Job';
// Mock
import { mockJobs } from './mock/jobs';





export interface FilterState {
  search: string;
  location: string;
  jobType: string;
  experience: string;
}

const App = () => {
  const [jobs] = useState<Job[]>(mockJobs);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    jobType: '',
    experience: ''
  });

  const filteredJobs = useMemo(() => {
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
  }, [jobs, filters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handlePostJob = () => {
    setIsPostModalOpen(true);
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetail = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header onPostJob={handlePostJob} />
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <SearchFilters 
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        
        <JobGrid jobs={filteredJobs} onJobClick={handleJobClick} />
      </main>
      
      <PostJobModal 
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
      />

      <JobDetailModal 
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={handleCloseJobDetail}
      />
    </div>
  );
}

export default App;