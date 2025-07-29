// Core
import React, { ReactNode } from 'react';

// Context Providers
import { JobProvider } from "./JobContext"
import { ThemeProvider } from "./ThemeContext"
import { AuthContextProvider } from './AuthContext';

const Provider: React.FC<{children: ReactNode}> = ({ children}) => {
  return (
    <div>
        <ThemeProvider>
            <AuthContextProvider>
                <JobProvider>{children}</JobProvider>
            </AuthContextProvider>
        </ThemeProvider>
    </div>
  )
}

export default Provider
