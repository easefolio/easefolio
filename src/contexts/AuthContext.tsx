'use client';
import { Auth, onAuthStateChanged, User } from '@firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import useFirebaseAuth from '@/hooks/useAuth';

interface AuthContextProps {
  children?: ReactNode;
}

const AuthContext = createContext<{
  user: User | null;
  logout: () => Promise<void>;
} | null>(null);

export const useAuthState = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  let auth: Auth | undefined;
  auth = useFirebaseAuth();
  const logout = async () => {
    if (auth) {
      await auth.signOut();
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [auth]);

  useEffect(() => {
    console.log('Current user:', currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ user: currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
