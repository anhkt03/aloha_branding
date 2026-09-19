import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import type { Dictionary } from "@/i18n/types";

export function ContactHero({ hero }: { hero: Dictionary["contact"]["hero"] }) {
  return (
    <section className="bg-gradient-to-b from-surface to-page">
      <Container className="py-10 text-center">
        <Eyebrow className="mb-2 flex justify-center">{hero.eyebrow}</Eyebrow>
        <h1 className="text-[32px] font-extrabold tracking-[-0.02em] sm:text-[40px]">{hero.title}</h1>
        <p className="mx-auto mt-2.5 max-w-[620px] text-base leading-relaxed text-muted">
          {hero.subtitle}
        </p>
      </Container>
    </section>
  );
}
