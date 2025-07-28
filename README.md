# Project Changes Documentation

This document tracks the changes made to the project.

## Components

### Main App Component (`src/App.tsx`)
- Changing the way a component is initialized from Declaration to Expression.
- Mocks extracted from the file.
- Theme extracted from the component.
- Filtering extracted from the component.
- Modal logic moved to custom hooks for better separation of concerns.
- Refactored to use centralized context providers.

### SearchFilters Component (`src/components/SearchFilters.tsx`)
- Added reset button functionality for clearing all filters.
- Updated routing logic for better filter management.

### JobCard Component (`src/components/JobCard.tsx`)
- Refactored to use utility functions for better code organization.
- Extracted date formatting logic to dateUtils.
- Extracted sport tag color logic to sportTagColors.
- Extracted company domain generation logic to companyUtils.
- Improved code maintainability and reusability.
- Created advanced memo function.

### PostJobModal Component (`src/components/PostJobModal.tsx`)
- Added TypeScript interface for formData.
- Created initialFormData state management.
- Integrated usage of Job Context for job creation.
- Added form reset functionality after modal closing.

### ApplicationModal Component (`src/components/ApplicationModal.tsx`)
- Added TypeScript interface for formData.
- Created initialFormData state management.
- Added form reset functionality after modal closing.
- Integrated with useJobModals hook for centralized modal management.

### JobDetailModal Component (`src/components/JobDetailModal.tsx`)
- Refactored to use utility functions for badge colors.
- Improved code organization and maintainability.

### Main Entry Point (`src/main.tsx`)
- Added Provider wrapper for all contexts.

### Provider (`src/contexts/Provider.tsx`)
- Created root wrapper for contexts.
- Provides centralized context management.

### Theme Context (`src/contexts/ThemeContext.tsx`)
- Added memoization to context value using useMemo for performance optimization.

### Job Context (`src/contexts/JobContext.tsx`)
- Created store for jobs management.
- Provides addJob functionality for creating new jobs.
- Manages jobs state with mock data integration.

## Hooks

### useJobFilters
- Implemented filtration in combination with memoization and debouncing.

### useDebounce
- Implemented debouncing for abstract string value.

### useModal
- Created abstract hook for controlling modal state management.
- Provides reusable modal functionality across the application.

### useJobModals
- Created specialized hook for managing job-related modals (ApplicationModal, JobDetailModal, PostJobModal).
- Centralized modal logic previously scattered in App component.
- Integrated ApplicationModal state management.

## Utils

### jobFilters
- Implemented optimized logic of filtration abstract FilterState.

### dateUtils
- Extracted date formatting logic from JobCard component.
- Provides reusable date formatting functionality.

### badgeColors
- Centralized color management for different badge types.
- Provides functions for sport tag colors, experience badge colors, and job type badge colors.
- Replaces sportTagColors utility with more comprehensive solution.

### companyUtils
- Extracted company domain generation logic from JobCard component.
- Provides utility for generating website domains from company names.

## Types

### FilterState
- Implemented TS interface for filter's state.

## Mock

### Jobs Data (`src/mock/jobs.ts`)
- Mock job data extracted to a separate file.