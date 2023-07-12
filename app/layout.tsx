import "./globals.css";
import "@fontsource/poppins";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Blog",
    "contentlayer",
    "MDX",
  ],
  authors: [
    {
      name: "Jerome",
      url: "https://github.com/jeromeandrewong",
    },
  ],
  creator: "Jerome",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@jeromeandrewong",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative flex max-h-screen min-h-screen flex-col items-center bg-primary">
          <div className="flex h-full w-full flex-col md:w-4/5 lg:w-[70%]">
            <div className="fixed top-0 z-50 w-full px-8 pt-4 md:w-4/5 lg:fixed lg:left-16 lg:top-[42vh] lg:w-12 lg:px-0 lg:py-0">
              <Nav />
            </div>

            <div className="mt-16 lg:mt-0 p-8">{children}</div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
