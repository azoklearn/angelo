import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://angelo-elagage-nancy.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Élagage et débarras à Nancy | Coussantien Angelo",
    template: "%s | Coussantien Angelo",
  },
  description:
    "Coussantien Angelo intervient 7j/7 à Nancy et alentours pour l'élagage, l'abattage d'arbres, le débarras, le nettoyage de chantier et l'entretien de jardin.",
  keywords: [
    "élagage Nancy",
    "débarras Nancy",
    "abattage arbre Nancy",
    "entretien jardin Nancy",
    "nettoyage chantier Nancy",
    "élagage Laxou",
    "élagage Vandoeuvre",
    "débarras Tomblaine",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Expert en élagage et débarras à Nancy",
    description:
      "Intervention rapide, devis gratuit, travail sécurisé et nettoyage final à Nancy et dans les communes voisines.",
    url: siteUrl,
    siteName: "Coussantien Angelo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/hero-elagueur.jpg",
        width: 1600,
        height: 1000,
        alt: "Élagueur sécurisé en intervention à Nancy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1f3d2b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
