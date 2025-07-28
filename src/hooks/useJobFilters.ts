// Core
import { useState, useMemo, useCallback } from 'react';

// Types
import { Job } from '../types/Job';
import { FilterState } from '../types/FilterState';
// Utils
import { filterJobs } from '../utils/jobFilters';
// Hooks
import { useDebounce } from './useDebounce';

export const useJobFilters = (jobs: Job[]) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    jobType: '',
    experience: ''
  });

  const debouncedSearch = useDebounce(filters.search, 300);

  const debouncedFilters = useMemo(() => ({
    ...filters,
    search: debouncedSearch
  }), [filters, debouncedSearch]);

  const filteredJobs = useMemo(() => {
    return filterJobs(jobs, debouncedFilters);
  }, [jobs, debouncedFilters]);

  const handleFilterChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      search: '',
      location: '',
      jobType: '',
      experience: ''
    });
  }, []);

  return {
    filters,
    filteredJobs,
    handleFilterChange,
    resetFilters
  };
}; 