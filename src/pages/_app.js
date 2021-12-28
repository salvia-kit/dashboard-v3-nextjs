import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../dashboard/layout';
import DashboardProvider from '../dashboard/provider/context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Salvia-kit Dashboard v3 Next.js</title>
      </Head>
      <DashboardProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
}

export default MyApp;
