import { Container } from "@/components/common/Container";
import { Hand } from "@/components/common/Hand";
import { cn } from "@/lib/utils";

export interface CtaAction {
  label: string;
  href: string;
  style?: "white" | "translucent";
}

interface CtaBandProps {
  title: string;
  body: string;
  actions: CtaAction[];
  hand?: string;
  className?: string;
}

/** Rounded green promo band. Shared by the home and training pages. */
export function CtaBand({ title, body, actions, hand, className }: CtaBandProps) {
  return (
    <div className={cn("bg-page py-0 pb-[72px]", className)}>
      <Container>
        <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-dark to-brand-deep p-10 sm:p-[56px] md:flex-row md:items-center">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-[26px] font-extrabold tracking-[-0.01em] text-white sm:text-[34px]">
              {title}
            </h2>
            <p className="mt-2.5 text-base text-white/80">{body}</p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              {actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={cn(
                    "rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors",
                    action.style === "translucent"
                      ? "border border-white/40 bg-white/15 text-white hover:bg-white/25"
                      : "bg-white text-brand-dark hover:bg-brand-tint",
                  )}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          {hand && (
            <Hand className="relative z-10 text-right text-[28px] leading-tight text-footer-accent sm:text-[34px]">
              {hand}
            </Hand>
          )}

          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/[0.06]" />
        </div>
      </Container>
    </div>
  );
}
