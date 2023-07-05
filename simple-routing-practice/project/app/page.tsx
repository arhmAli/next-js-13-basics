import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href='/about'>
          About
        </Link>
        
        <Link href='/contact'>
          Contact us
        </Link>
        <Link href='/'>
          Home
        </Link>
      </nav>
    </div>
  )
}
