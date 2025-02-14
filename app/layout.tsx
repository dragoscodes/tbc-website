import type { Metadata } from "next";
import { Raleway, Inter, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import classNames from "classnames";

const raleway = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TUM Blockchain Conference 24",
  description:
    "Germany's leading student-run conference exploring the frontiers of blockchain technology",
  openGraph: {
    title: "TUM Blockchain Conference 24",
    description:
      "Germany's leading student-run conference exploring the frontiers of blockchain technology",
    type: "website",
    url: "https://conference.tum-blockchain.com",
    images: [
      {
        url: "https://conference.tum-blockchain.com//metadata/metadata.png",
        width: 750,
        height: 450,
        alt: "TUM Blockchain Conference 24",
      },
    ],
  },
  twitter: {
    title: "TUM Blockchain Conference 24",
    description:
      "Germany's leading student-run conference exploring the frontiers of blockchain technology",
    images: ["https://conference.tum-blockchain.com//metadata/metadata.png"],
    creator: "@tbc_munich",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://tally.so/widgets/embed.js"></Script>
        <Script
          src={`https://cdn-cookieyes.com/client_data/6331baf83b563ec3150ad4bb/script.js`}
          strategy="beforeInteractive"
        ></Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.className} bg-black text-white`}>
        {children}
      </body>
      <Script
        defer
        data-domain="conference.tum-blockchain.com"
        src="https://plausible.rbg.tum-blockchain.com/js/script.js"
      ></Script>
    </html>
  );
}
