import Header from "@/components/Header";
import inter from "@/fonts/Inter";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-carbon-900 dark:text-carbon-50 bg-white dark:bg-carbon-900 ${inter.variable}`}
    >
      <head></head>
      <body className="px-8 subpixel-antialiased">
        <Header />
        <main className="w-full max-w-2xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
