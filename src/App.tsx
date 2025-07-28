// Components
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import JobGrid from './components/JobGrid';
import PostJobModal from './components/PostJobModal';
import JobDetailModal from './components/JobDetailModal';
// Contexts
import { useJobs } from './contexts/JobContext';
// Hooks
import { useJobFilters } from './hooks/useJobFilters';
import { useJobModals } from './hooks/useJobModals';

const App = () => {
  const { jobs } = useJobs();
  
  const { filters, filteredJobs, handleFilterChange, resetFilters } = useJobFilters(jobs);
  const {
    isPostModalOpen,
    openPostJobModal,
    closePostJobModal,
    selectedJob,
    isJobDetailModalOpen,
    openJobDetailModal,
    closeJobDetailModal
  } = useJobModals();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header onPostJob={openPostJobModal} />
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <SearchFilters 
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={resetFilters}
        />
        
        <JobGrid jobs={filteredJobs} onJobClick={openJobDetailModal} />
      </main>
      
      <PostJobModal 
        isOpen={isPostModalOpen}
        onClose={closePostJobModal}
      />

      <JobDetailModal 
        job={selectedJob}
        isOpen={isJobDetailModalOpen}
        onClose={closeJobDetailModal}
      />
    </div>
  );
}

export default App;