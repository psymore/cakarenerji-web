import { Link } from "@/components/AppLink";
import { BlogTemplate } from "@/components/blog/BlogTemplate";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/content/blog-posts";

/** /blog-1: list of posts, then the live template's EPC block. "Continue Reading" is the live (English) label. */
export function PostList() {
  return (
    <>
      <PageHero title="Çakar Enerji'den Faydalı İçerikler" solo />
      <section className="section">
        <div className="wrap">
          <div className="posts">
            {posts.map((p) => {
              const href = `/blog-1/f/${p.slug}`;
              return (
                <article className="post-row" key={p.key}>
                  <time>{p.date}</time>
                  <div>
                    <h2>
                      <Link href={href}>{p.title}</Link>
                    </h2>
                    <p>{p.excerpt}</p>
                    <p>
                      <Link className="textlink" href={href}>
                        Continue Reading
                      </Link>
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <BlogTemplate />
    </>
  );
}
