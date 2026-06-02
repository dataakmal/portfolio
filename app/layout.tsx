import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Akmal Fauzan | Senior Data Analyst",
  description: "Turning complex operational data into clear, actionable business insights",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
