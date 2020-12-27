import { motion } from 'framer-motion';

function Dashboard({ name, blog, bio }) {
  return (
    <div className="flex justify-center">
      <div>
        <h1>{name}</h1>
        <p>Bio: {bio}</p>
        <p>Blog: {blog}</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/nsaicharan');
  const user = await res.json();

  return {
    revalidate: 10,
    props: user, // will be passed to the page component as props
  };
}

export default Dashboard;
