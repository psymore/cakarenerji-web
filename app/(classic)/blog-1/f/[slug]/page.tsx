import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/blog/PostArticle";
import { postBySlug, posts } from "@/content/blog-posts";
import { originalUrl, photos, type PhotoId } from "@/lib/images";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: decodeURIComponent(p.slug) }));
}

export async function generateMetadata({ params }: PageProps<"/blog-1/f/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  // The live site's social preview image for this post (its file name is the post key).
  const images = post && post.key in photos ? [originalUrl(post.key as PhotoId)] : undefined;
  return { title: post?.title, openGraph: { images } };
}

export default async function PostPage({ params }: PageProps<"/blog-1/f/[slug]">) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  return <PostArticle post={post} />;
}
