'use client';
import { app } from '@/firebase/firebase';
import { getAuth } from '@firebase/auth';

const useFirebaseAuth = () => {
  if (typeof window !== 'undefined' && app) {
    return getAuth(app);
  }
  return undefined;
};

export default useFirebaseAuth;
