'use client';
import { useState } from 'react';
// import { Auth, getAuth, signInWithEmailAndPassword } from '@firebase/auth';
// import { app } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import useFirebaseAuth from '@/hooks/useAuth';

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useFirebaseAuth();
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (auth) {
      try {
        // await signInWithEmailAndPassword(auth, email, password);
        // router.push('/');
      } catch (error) {
        // console.log(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Page;
