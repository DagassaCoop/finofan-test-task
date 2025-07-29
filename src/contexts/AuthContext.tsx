// Core
import React, { createContext, useEffect, useState, ReactNode } from 'react';

// Types
import { AuthContextType, Credentials, User } from '../types/Auth';
// DB
import supabase from '../utils/supabase';

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            setUser(session?.user as User ?? null)
            setLoading(false)
        }

        getSession()

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user as User ?? null)
                setLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    const clearMessages = () => {
        setError(null)
        setMessage(null)
    }

    const signUp = async ({email, password}: Credentials) => {
        try {
            clearMessages()
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            })

            if (error) {
                console.log("Error during sign up:", error)
                setError(error.message)
                return { success: false, error: error.message }
            }

            setMessage('Please check your email to confirm your account')
            return { success: true, data }
        } catch {
            const errorMsg = 'Unexpected error during sign up'
            setError(errorMsg)
            return { success: false, error: errorMsg }
        }
    }

    const login = async ({email, password}: Credentials) => {
        try {
            clearMessages()
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (error) {
                console.log("Error during login:", error)
                setError(error.message)
                return { success: false, error: error.message }
            }

            return { success: true, data }
        } catch {
            const errorMsg = 'Unexpected error during login'
            setError(errorMsg)
            return { success: false, error: errorMsg }
        }
    }

    const signInWithGoogle = async () => {
        try {
            clearMessages()
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: import.meta.env.VITE_GOOGLE_REDIRECT_TO
                }
            })

            if (error) {
                console.log("Error during Google sign in:", error)
                setError(error.message)
                return { success: false, error: error.message }
            }

            return { success: true, data }
        } catch {
            const errorMsg = 'Unexpected error during Google sign in'
            setError(errorMsg)
            return { success: false, error: errorMsg }
        }
    }

    const logout = async () => {
        try {
            clearMessages()
            const { error } = await supabase.auth.signOut()
            
            if (error) {
                console.log("Error during logout:", error)
                setError(error.message)
                return { success: false, error: error.message }
            }

            return { success: true }
        } catch {
            const errorMsg = 'Unexpected error during logout'
            setError(errorMsg)
            return { success: false, error: errorMsg }
        }
    }

    const value: AuthContextType = {
        user,
        loading,
        error,
        message,
        signUp,
        login,
        signInWithGoogle,
        logout,
        clearMessages,
    }
  
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
