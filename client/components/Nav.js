import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  );
};

export default Nav;
