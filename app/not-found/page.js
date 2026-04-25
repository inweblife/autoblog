import Link from "next/link";

export const metadata = {
  title: "404 – Страницата не е намерена | Autoblog",
};

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1>404</h1>
      <p>Страницата, която търсите, не съществува.</p>
      <Link href="/">Към началото</Link>
    </main>
  );
}