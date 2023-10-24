'use client';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { app } from '@/firebase/firebase';
import useFirebaseAuth from '@/hooks/useAuth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useFirebaseAuth();
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (auth) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log('Signup successful wit UID:', userCredential);
      } catch (error) {
        // console.error(error?.mesage);
      }
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSignup}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            />
          </div>
          <div>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
