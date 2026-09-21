import { SiteChrome } from "@/components/SiteChrome";

export default function ClassicLayout({ children }: LayoutProps<"/">) {
  return <SiteChrome>{children}</SiteChrome>;
}
