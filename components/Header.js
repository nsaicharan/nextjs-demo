import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  const links = [
    { path: '/', value: 'Home' },
    { path: '/about', value: 'About' },
    { path: '/login', value: 'Login' },
    { path: '/gallery', value: 'Gallery' },
  ];

  return (
    <header className="mt-6 mb-10 text-center">
      {links.map((link) => (
        <Link href={link.path} key={link.path}>
          <a
            className={`
              inline-block font-medium mr-4 text-gray-500 
              hover:text-gray-900
              ${router.pathname === link.path && 'text-gray-900'}
            `}
          >
            {link.value}
          </a>
        </Link>
      ))}
    </header>
  );
}

export default Header;
