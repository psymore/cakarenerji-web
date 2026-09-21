import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/blog/PostArticle";
import { postBySlug, posts } from "@/content/blog-posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: decodeURIComponent(p.slug) }));
}

export async function generateMetadata({ params }: PageProps<"/blog-1/f/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: postBySlug(slug)?.title };
}

export default async function PostPage({ params }: PageProps<"/blog-1/f/[slug]">) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  return <PostArticle post={post} />;
}
