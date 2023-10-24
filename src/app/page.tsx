// import { AuthProvider, useAuthState } from '@/contexts/AuthContext';
// import { AppProps } from 'next/dist/shared/lib/router/router';

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <AuthProvider>
//       <LoggedInInfo />
//       <Component {...pageProps} />
//     </AuthProvider>
//   );
// }
// function LoggedInInfo() {
//   const { user, logout } = useAuthState();
//   return (
//     <div>
//       현재 로그인한 사용자 : {user?.email}
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }
export default function Home() {
  return <h1>Hello, Next.js!</h1>;
}
