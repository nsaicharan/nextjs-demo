import Header from '../components/Header';

function Dashboard({ name, blog, bio }) {
  return (
    <>
      <Header />
      <h1>{name}</h1>
      <p>Bio: {bio}</p>
      <p>Blog: {blog}</p>
    </>
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
