import Header from '../components/Header';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Head from 'next/head';

function About() {
  return (
    <div className="text-center">
      <Head>
        <title>About - Create Next App</title>
      </Head>
      <h1 class="text-2xl">About Page</h1>
    </div>
  );
}

export default About;
