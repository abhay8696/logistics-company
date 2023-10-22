import Image from 'next/image';
import Navbar from './components/navbar';

import './styles/app.css'
import { Montserrat } from 'next/font/google';
import Link from 'next/link';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["900"],
});

export default function Home() {
  return (
    <main className={""}>
      <Navbar/>
      <section className={`site-header`}>
          <h1 className={`${montserrat.className}`}>YOUR TRUSTED LOGISTICS PARTNER</h1>
          <p>We are providing import/export services to all sectors and from all sectors like China, USA, Europe, Far East, Gulf and Upper Gulf etc.</p>
          <section className='site-header-actions'>
              <Link href="/contact" className='site-header-buttons headerButton1'>GET IN TOUCH</Link>
              <Link href="/about" className='site-header-buttons headerButton2'>ABOUT US</Link>
          </section>
      </section>
    </main>
  )
}
