import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import Layout from './../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  );
}

export default MyApp;
