import Header from './Header';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative">{children}</main>
    </div>
  );
}

export default Layout;
