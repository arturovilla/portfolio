import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import localFont from 'next/font/local'

const Druk = localFont({
  src: '..//public/fonts/Druk_Wide_Bold.ttf',
  variable: '--font-Druk-bold',
})


export default function App({ Component, pageProps }) {
  return (
    <main className={`${Druk.variable}`}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  )
}