import "./globals.css";
import "@fontsource/poppins";
import Nav from "./components/Nav";

export const metadata = {
  metadataBase: new URL("https://eatandeat.jeromeandre.dev"),
  title: "Eats and Eats",
  description: "Jerome's Food Review Blog",
  creator: "Jerome Wong",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "MDX",
    "Tailwind CSS",
    "Blog",
  ],
  openGraph: {
    title: "Eats and Eats",
    description: "Jerome's Food Review Blog",
    url: "https://eatandeat.jeromeandre.dev",
    siteName: "Eats and Eats",
    images: [
      {
        url: "/eatandeat.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
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
        </main>
      </body>
    </html>
  );
}
