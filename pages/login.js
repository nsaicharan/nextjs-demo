import { useRouter } from 'next/router';
import Header from '../components/Header';

function Login() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="" className="border" /> <br />
        <input type="password" name="password" id="" /> <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Login;
