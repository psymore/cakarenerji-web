import type { Metadata } from "next";
import "./gallery.css";
import { FixGallery } from "@/components/fixes/FixGallery";

export const metadata: Metadata = {
  title: "Yazım düzeltmeleri",
  robots: { index: false, follow: false },
};

export default function FixesPage() {
  return <FixGallery />;
}
