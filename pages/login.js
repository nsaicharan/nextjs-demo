import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

function Login() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <button className="px-6 py-2 bg-gray-900 text-gray-100 rounded uppercase tracking-wide">
        Login
      </button>
    </form>
  );
}

export default Login;
