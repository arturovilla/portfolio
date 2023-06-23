import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>

      <div className='mt-96'>
        <About/>
      </div>

      <div className='mt-96 flex justify-center flex-col items-center'>
        <Newsletter/>
      </div>

      <div className='mt-40'>
        <Footer/>
      </div>
    </div>
  )
}
