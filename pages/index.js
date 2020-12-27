import Link from 'next/link';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

export async function getStaticProps() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  );
  const data = await res.json();
  const posts = data.posts;
  return {
    props: { posts },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  const liVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="prose mx-auto">
      <h1>Welcome to my blog!</h1>
      <motion.ul
        animate="animate"
        initial="initial"
        transition={{ staggerChildren: 0.2, delayChildren: 1 }}
      >
        {posts.map((post) => (
          <motion.li key={post.id} variants={liVariants}>
            <Link href={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
