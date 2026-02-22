import './globals.css'

export const metadata = {
  title: "KV – Exclusivity Redefined",
  description: "Western Ultra Luxury Brand"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blackLuxury text-ivoryLuxury">
        {children}
      </body>
    </html>
  )
}