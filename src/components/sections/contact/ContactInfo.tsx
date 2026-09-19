import { Icon } from "@/components/common/Icon";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/types";

export function ContactInfo({
  benefits,
  hotline,
  office,
  phone,
}: {
  benefits: Dictionary["contact"]["benefits"];
  hotline: Dictionary["contact"]["hotline"];
  office: Dictionary["contact"]["office"];
  phone: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* Benefits */}
      <div className="rounded-3xl bg-gradient-to-br from-brand-dark to-brand-deep p-7 text-white">
        <h3 className="mb-4 text-xl font-bold">{benefits.title}</h3>
        <div className="flex flex-col gap-3.5">
          {benefits.items.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <Icon name="check" size={20} className="mt-0.5 shrink-0 text-footer-accent" />
              <div>
                <div className="text-[15px] font-semibold">{item.title}</div>
                <div className="text-[13px] text-white/75">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotline */}
      <div className="flex items-center gap-4 rounded-[20px] bg-brand-tint p-6">
        <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-2xl bg-brand text-white">
          <Icon name="phone" size={24} />
        </span>
        <div>
          <div className="text-[13px] text-muted">{hotline.label}</div>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-2xl font-extrabold text-brand-dark">
            {phone}
          </a>
          <div className="text-[13px] text-muted">{hotline.hours}</div>
        </div>
      </div>

      {/* Office */}
      <div className="rounded-[20px] border border-line bg-card p-6">
        <div className="mb-3 flex items-start gap-3">
          <Icon name="map-pin" size={20} className="mt-0.5 shrink-0 text-brand" />
          <div className="text-sm text-ink-soft">
            <div className="font-semibold text-ink">{office.title}</div>
            {office.address}
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Icon name="mail" size={20} className="mt-0.5 shrink-0 text-brand" />
          <div className="text-sm text-ink-soft">
            <div className="font-semibold text-ink">{office.emailLabel}</div>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
              {office.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
