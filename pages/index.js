import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Link from 'next/link';

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
  console.log(posts.slug);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className="prose">
          <h1>Welcome to my blog!</h1>
          <ul>
            <li>
              <Link href="https://quora.com">
                <a>Quora Home Page</a>
              </Link>
            </li>
            {posts.map((post) => (
              <li>
                <Link href={`/post/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
