import Header from "@/components/Header"
import { inter } from "@/fonts"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950 ${inter.variable}`}
    >
      <head></head>
      <body className="px-8 subpixel-antialiased">
        <Header />
        <main className="w-full max-w-2xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
