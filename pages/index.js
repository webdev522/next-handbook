import Link from "next/link";

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  </div>
);

export default Index;
