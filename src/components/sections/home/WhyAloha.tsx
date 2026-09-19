import { Section } from "@/components/common/Section";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Icon, type IconName } from "@/components/common/Icon";
import type { Dictionary } from "@/i18n/types";

const icons: IconName[] = ["translate", "chart", "users", "badge-check", "monitor", "map-pin"];

export function WhyAloha({ why }: { why: Dictionary["home"]["why"] }) {
  return (
    <Section tone="white">
      <Eyebrow className="mb-2">{why.eyebrow}</Eyebrow>
      <h2 className="mb-8 text-3xl font-extrabold tracking-[-0.01em] sm:text-[34px]">{why.title}</h2>

      <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-6">
        {why.items.map((item, i) => (
          <div key={item} className="text-center">
            <span className="mb-3 inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand-tint text-brand">
              <Icon name={icons[i % icons.length]} size={26} />
            </span>
            <div className="text-sm font-semibold text-ink">{item}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
