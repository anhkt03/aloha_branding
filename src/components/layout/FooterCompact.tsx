import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import type { Dictionary } from "@/i18n/types";

export function FooterCompact({
  footer,
  common,
}: {
  footer: Dictionary["footer"];
  common: Dictionary["common"];
}) {
  return (
    <footer className="bg-footer text-footer-text">
      <Container className="flex flex-col items-center gap-3 py-8 text-[13px] sm:flex-row sm:justify-between">
        <Logo tone="light" size="sm" />
        <span>{footer.compactCopyright}</span>
        <span className="font-bold text-white">{common.phone}</span>
      </Container>
    </footer>
  );
}
