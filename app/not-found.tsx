import { NotFoundView } from "@/components/NotFoundView";
import { SiteChrome } from "@/components/SiteChrome";

/** Unmatched URLs only: sits directly under the bare root layout, so it brings its own chrome. */
export default function NotFound() {
  return (
    <SiteChrome>
      <NotFoundView />
    </SiteChrome>
  );
}
