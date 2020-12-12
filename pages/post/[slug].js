import Link from 'next/link';
const { BLOG_URL, CONTENT_API_KEY } = process.env;

function Post({ post }) {
  return (
    <div className="px-4 my-12 mx-auto max-w-prose">
      <Link href="/">
        <a className="inline-block mb-8">&larr; Back To Home</a>
      </Link>

      <article className="prose">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </article>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const slug = ctx.params.slug;
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  );
  const data = await res.json();
  console.log('post:', data.posts[0]);
  return {
    props: {
      post: data.posts[0],
    },
  };
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=slug`
  );
  const data = await res.json();

  const paths = data.posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
