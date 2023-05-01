import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>

      <Navbar/>

      <div className='pt-48'>
        <Landing/>
      </div>

    </div>
  )
}
