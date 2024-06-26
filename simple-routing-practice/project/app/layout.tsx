import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <nav>
        <Link href='/about'>About</Link>
        <Link href='/'>Home</Link>
        </nav>
        </header>
      <body >{children}</body>
      <footer>
    <p>&copy; 2023 Your Company. All rights reserved.</p>
    <ul >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </ul>
</footer>

    </html>
  )
}
