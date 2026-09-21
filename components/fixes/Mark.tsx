import type { Excerpt } from "@/lib/typo-fixes";

/** A text excerpt with the changed word emphasised. */
export function Mark({ x }: { x: Excerpt }) {
  return (
    <>
      {x.pre}
      <mark>{x.mid}</mark>
      {x.post}
    </>
  );
}
