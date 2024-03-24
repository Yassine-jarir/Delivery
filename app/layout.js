import "@/styles/globals.css";
import { Almarai } from "next/font/google";
import Console from "@/components/Console";
const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export const metadata = {
  title: "Ameex | Home",
  description:
    "AMEEX.MA شركة متخصصة في البريد السريع والتوصيل للمنازل في المغرب (الدار البيضاء ومراكش والرباط وأكادير ووجدة والرباط والقنيطرة والجديدة ومكناس والعيون والداخلة والمغرب ...) بسرعة وخفة وتضمن توزيع سلس وشامل بشغف والتزام.",
  keywords: [""],
  authors: [
    { name: "Ajicod", url: "https://ajicod.com/fr" },
    { name: "Ameex", url: "https://ameex.ma/" },
  ],
  publisher: "Ajicod Agency",
  creator: "Ajicod Agency",
  metadataBase: " http://localhost:3000/",
  alternates: {
    canonical: "./",
    languages: {
      fr: "/fr",
      en: "/en",
      ar: "/ar",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Console />
      <body className={almarai.className}>{children}</body>
    </html>
  );
}
