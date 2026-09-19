import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { Container } from "@/components/common/Container";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { FooterCompact } from "@/components/layout/FooterCompact";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "vi";
  const dict = await getDictionary(l);
  const { contact, common, footer } = dict;

  return (
    <>
      <ContactHero hero={contact.hero} />
      <Container className="grid items-start gap-8 pb-14 pt-6 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm form={contact.form} />
        <ContactInfo
          benefits={contact.benefits}
          hotline={contact.hotline}
          office={contact.office}
          phone={common.phone}
        />
      </Container>
      <FooterCompact footer={footer} common={common} />
    </>
  );
}
