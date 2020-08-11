import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <a>sickfits</a>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
