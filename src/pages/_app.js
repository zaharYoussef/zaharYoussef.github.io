import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       console.log('App is changing to:', url);
//       // Additional logic on route change
//     };

//     router.events.on('routeChangeStart', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, [router.events]);

//   return (
//     <div>
//       <Header />
//       <Component {...pageProps} />
//       <Footer />
//     </div>
//   );
// }

// export default MyApp;

export default function App({ Component, pageProps }) {
  return(
    <div>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
