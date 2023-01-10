import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Meta from '../components/Meta'


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Meta/>
      <body>
      <Header/>
        <main>{children}</main>
      <Footer/>
      </body>
    </html>
  )
}
