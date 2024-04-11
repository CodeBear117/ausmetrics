import Link from "next/link";

export default function Landing() {
  return (
    <main className="text-white">
      <p>Landing</p>
      <Link href="/about">Link to About Page</Link>
      <Link href="/dashboard">Link to Dashboard Page</Link>
    </main>
  );
}
