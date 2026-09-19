import type { Metadata } from "next";
import { Be_Vietnam_Pro, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { themeInitScript } from "@/lib/theme";
import { siteConfig } from "@/config/site";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

function safeMetadataBase(): URL | undefined {
  try {
    return new URL(siteConfig.url);
  } catch {
    return undefined;
  }
}

export const metadata: Metadata = {
  metadataBase: safeMetadataBase(),
  title: {
    default: `${siteConfig.name} — More Languages · A Brighter You`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Language training & study-abroad guidance helping the next generation reach further.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${beVietnam.variable} ${caveat.variable}`}>
      <body>
        {/* Sets data-theme (and lang) before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
