import Link from 'next/link';

function Header() {
  return (
    <>
      <style jsx>{`
        header {
          text-align: center;
          margin-top: 10px;
        }

        header a {
          display: inline-block;
          margin: 0 10px;
          text-decoration: underline;
        }
      `}</style>

      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about-me">
          <a>About</a>
        </Link>
        <Link as="/post/1" href="/post/[id]">
          <a>Post 1</a>
        </Link>
        <Link as="/post/2" href="/post/[id]">
          <a>Post 2</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </header>
    </>
  );
}

export default Header;
