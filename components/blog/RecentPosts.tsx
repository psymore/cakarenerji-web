import Link from "next/link";
import { posts } from "@/content/blog-posts";

/** "Recent Posts": the three newest posts other than the current one, as on the live template. */
export function RecentPosts({ current }: { current: string }) {
  const recent = posts.filter((p) => p.key !== current).slice(0, 3);
  return (
    <section className="section section--white">
      <div className="wrap">
        <h2 style={{ fontSize: "1.4rem", marginBottom: 12 }}>Recent Posts</h2>
        <ul className="recent">
          {recent.map((p) => (
            <li key={p.key}>
              <Link href={`/blog-1/f/${p.slug}`}>
                <strong>{p.title}</strong>
                <span className="post-date">{p.short}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
