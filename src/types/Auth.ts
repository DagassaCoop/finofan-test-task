export interface User {
  id: string;
  email?: string;
  created_at?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}


export interface AuthResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

export interface AuthContextType extends AuthState {
  error: string | null;
  message: string | null;
  login: (credentials: Credentials) => Promise<AuthResult>;
  signUp: (credentials: Credentials) => Promise<AuthResult>;
  signInWithGoogle: () => Promise<AuthResult>;
  logout: () => Promise<AuthResult>;
  clearMessages: () => void;
} 