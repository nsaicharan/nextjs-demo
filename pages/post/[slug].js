import Link from 'next/link';
import { useRouter } from 'next/router';
const { BLOG_URL, CONTENT_API_KEY } = process.env;

function Post({ post }) {
  const router = useRouter();

  return (
    <div className="px-4 my-12 mx-auto max-w-3xl">
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link href="/">
            <a className="inline-block mb-8">&larr; Back To Home</a>
          </Link>
          <article className="prose lg:prose-lg" style={{ maxWidth: '100%' }}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </article>
        </>
      )}
    </div>
  );
}

export async function getStaticProps(ctx) {
  const slug = ctx.params.slug;
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  );
  const data = await res.json();

  return {
    props: {
      post: data.posts[0],
    },
    revalidate: 3,
  };
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=slug`
  );
  const data = await res.json();

  const paths = data.posts.slice(1).map((post) => ({
    params: { slug: post.slug },
  }));

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export default Post;
