import Link from "next/link";

export default function FastLinks() {
  return (
  <div className="fast-links">
    <Link href="/">kezdőlap</Link>
    <Link href="/love">love</Link>
    <Link href="/map">térkép</Link>
  </div>
  );
}
