// Core
import React, { ReactNode } from 'react';

// Context Providers
import { JobProvider } from "./JobContext"
import { ThemeProvider } from "./ThemeContext"

const Provider: React.FC<{children: ReactNode}> = ({ children}) => {
  return (
    <div>
        <ThemeProvider>
            <JobProvider>{children}</JobProvider>
        </ThemeProvider>
    </div>
  )
}

export default Provider
