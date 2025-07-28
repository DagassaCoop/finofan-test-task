# Project Changes Documentation

This document tracks the changes made to the project.

## Components

### Main App Component (`src/App.tsx`)
- Changing the way a component is initialized from Declaration to Expression.
- Mocks extracted from the file.
- Theme extracted from the component.
- Filtering extracted from the component.
- Modal logic moved to custom hooks for better separation of concerns.

### SearchFilters Component (`src/components/SearchFilters.tsx`)
- Added reset button functionality for clearing all filters.
- Updated routing logic for better filter management.

### JobCard Component (`src/components/JobCard.tsx`)
- Refactored to use utility functions for better code organization.
- Extracted date formatting logic to dateUtils.
- Extracted sport tag color logic to sportTagColors.
- Extracted company domain generation logic to companyUtils.
- Improved code maintainability and reusability.

### Mock Data (`src/mock/jobs.ts`)
- Mock job data extracted to a separate file.

### Main Entry Point (`src/main.tsx`)
- Added ThemeProvider wrapper for global theme management in a root file.

### Theme Context (`src/contexts/ThemeContext.tsx`)
- Added memoization to context value using useMemo for performance optimization.

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

## Utils

### jobFilters
- Implemented optimized logic of filtration abstract FilterState.

### dateUtils
- Extracted date formatting logic from JobCard component.
- Provides reusable date formatting functionality.

### sportTagColors
- Extracted sport tag color logic from JobCard component.
- Centralized color management for different sport types.

### companyUtils
- Extracted company domain generation logic from JobCard component.
- Provides utility for generating website domains from company names.

## Types

### FilterState
- Implemented TS interface for filter's state.

## Code Quality Improvements

### Import Documentation
- Added comprehensive comments to all import statements across the codebase.
- Improves code readability and maintainability.

### Modal Architecture
- Refactored modal management from component-level to hook-based architecture.
- Better separation of concerns and reusability.