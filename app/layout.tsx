import React from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

interface layoutProps {
    children: JSX.Element,
}

export default function RootLayout({children}:layoutProps) {
  return (
    <html lang="en">
      <Meta/>
      <body>
      <Navbar/>
        <main>{children}</main>
      <Footer/>
      </body>
    </html>
  )
}
