import { Link } from "@/components/AppLink";
import { BlogTemplate } from "@/components/blog/BlogTemplate";
import { RecentPosts } from "@/components/blog/RecentPosts";
import { PageHero } from "@/components/PageHero";
import { postBody } from "@/content/blog-body";
import type { Post } from "@/content/blog-posts";
import { T } from "@/lib/text";

/** One blog post: title and date, verbatim body, recent posts, then the live template's EPC block. */
export function PostArticle({ post }: { post: Post }) {
  const body = postBody(post.key);
  return (
    <>
      <PageHero
        title={post.title}
        sup={
          <>
            <p className="label">{"Çakar Enerji'den Faydalı İçerikler"}</p>
            <Link className="textlink" href="/blog-1" style={{ display: "inline-block", marginTop: 10 }}>
              All Posts
            </Link>
          </>
        }
      >
        <p className="meta">{post.date}</p>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="article">
            {body.map((n, i) => {
              if ("h" in n) return <T key={i} as={`h${n.h}`} v={n.v} />;
              if ("ul" in n)
                return (
                  <ul key={i}>
                    {n.ul.map((li, j) => (
                      <T as="li" key={j} v={li} />
                    ))}
                  </ul>
                );
              return <T key={i} v={n.p} />;
            })}
          </div>
        </div>
      </section>
      <RecentPosts current={post.key} />
      <BlogTemplate />
    </>
  );
}
