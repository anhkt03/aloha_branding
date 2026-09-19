import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { Icon } from "@/components/common/Icon";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/types";

interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <div className="mb-3.5 text-sm font-bold text-white">{title}</div>
      <div className="flex flex-col gap-2.5 text-[13px] text-footer-text">
        {links.map((link) => (
          <a key={link} href="#" className="transition-colors hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Footer({ footer, common }: { footer: Dictionary["footer"]; common: Dictionary["common"] }) {
  return (
    <footer className="bg-footer text-footer-text">
      <Container className="pb-7 pt-14">
        <div className="grid gap-10 border-b border-white/10 pb-9 md:grid-cols-2 lg:grid-cols-[280px_1fr_1fr_1fr_auto]">
          <div className="max-w-[280px]">
            <Logo tone="light" size="sm" className="mb-3.5" />
            <p className="text-[13px] leading-5 text-footer-text/90">{footer.blurb}</p>
          </div>

          <FooterColumn title={footer.colAbout.title} links={footer.colAbout.links} />
          <FooterColumn title={footer.colTraining.title} links={footer.colTraining.links} />
          <FooterColumn title={footer.colStudy.title} links={footer.colStudy.links} />

          <div>
            <div className="mb-3.5 text-sm font-bold text-white">{footer.connect}</div>
            <a
              href={`tel:${common.phone.replace(/\s/g, "")}`}
              className="mb-3 flex items-center gap-2 font-bold text-white"
            >
              <Icon name="phone" size={16} className="text-footer-accent" />
              {common.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-[13px] transition-colors hover:text-white"
            >
              <Icon name="mail" size={16} className="text-footer-accent" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-xs text-footer-dim sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.copyright}</span>
          <span className="font-hand text-lg text-footer-accent">{footer.handTagline}</span>
        </div>
      </Container>
    </footer>
  );
}
