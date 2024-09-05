import "./globals.css"

export const metadata = {
  title: "Advisor Availability",
  description: "Information regarding Advisor Availiablity",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
