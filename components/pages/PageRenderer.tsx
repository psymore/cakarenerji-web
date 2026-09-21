import { ContactView } from "@/components/pages/ContactView";
import { DocView } from "@/components/pages/DocView";
import { FaqView } from "@/components/pages/FaqView";
import { HrView } from "@/components/pages/HrView";
import { SoonView, StubView } from "@/components/pages/StubViews";
import type { PageDef } from "@/content/pages";
import { text } from "@/lib/text";

export function PageRenderer({ page }: { page: PageDef }) {
  switch (page.kind) {
    case "doc":
      return <DocView page={page} />;
    case "faq":
      return <FaqView page={page} />;
    case "hr":
      return <HrView h1={text(page.h1)} />;
    case "contact":
    case "quote":
      return <ContactView h1={text(page.h1)} variant={page.kind} />;
    case "stub":
      return <StubView page={page} />;
    case "soon":
      return <SoonView page={page} />;
  }
}
