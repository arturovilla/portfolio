
import { Html, Head, Main, NextScript } from 'next/document'


const themecolor = '#0C0D1C' 

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="theme-color" content={themecolor}></meta>
      <body className='bg-[#0C0D1C]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
