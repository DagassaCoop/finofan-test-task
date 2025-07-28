import { useState, useCallback } from 'react';

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
// Hooks
import { useJobFilters } from './hooks/useJobFilters';

const App = () => {
  const [jobs] = useState<Job[]>(mockJobs);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  const { filters, filteredJobs, handleFilterChange } = useJobFilters(jobs);

  const handlePostJob = useCallback(() => {
    setIsPostModalOpen(true);
  }, []);

  const handleJobClick = useCallback((job: Job) => {
    setSelectedJob(job);
  }, []);

  const handleCloseJobDetail = useCallback(() => {
    setSelectedJob(null);
  }, []);

  const handleClosePostModal = useCallback(() => {
    setIsPostModalOpen(false);
  }, []);

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
        onClose={handleClosePostModal}
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