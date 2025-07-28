# Project Changes Documentation

This document tracks the changes made to the project.

## Components

### Main App Component (`src/App.tsx`)
- Changing the way a component is initialized from Declaration to Expression.
- Mocks extracted from the file.
- Theme extracted from the component.
- Filtering extracted from the component.

### Mock Data (`src/mock/jobs.ts`)
- Mock job data extracted to a separate file.

### Main Entry Point (`src/main.tsx`)
- Added ThemeProvider wrapper for global theme management in a root file.

### Theme Context (`src/contexts/ThemeContext.tsx`)
- Added memoization to context value using useMemo for performance optimization.

## Hooks

### useJobFilters
- Implemented filtration in combination with memoization and debouncing

### useDebounce
- Implemented debouncing for abstract string value

## Utils

### jobFilters
- Implemented optimized logic of filtration abstract FilterState

## Types

### FilterState
- Implemented TS interface for filter's state