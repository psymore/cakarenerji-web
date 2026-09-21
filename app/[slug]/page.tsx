import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { pages } from "@/content/pages";

const bySlug = new Map(Object.entries(pages).map(([slug, page]) => [decodeURIComponent(slug), page]));

const find = (slug: string) => {
  try {
    return bySlug.get(decodeURIComponent(slug));
  } catch {
    return undefined;
  }
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug: decodeURIComponent(slug) }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = find(slug);
  return { title: page?.title };
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
