import Header from "@/components/Header"
import { fontSans } from "@/fonts"
import { cn } from "@/lib/utils"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <head></head>
      <body className="px-8 subpixel-antialiased">
        <Header />
        <main className="w-full mx-auto">{children}</main>
      </body>
    </html>
  )
}
