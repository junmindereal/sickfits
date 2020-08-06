import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-lg">Hello World!</h1>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </>
  );
}
