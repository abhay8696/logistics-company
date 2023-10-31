import Navbar from './components/navbar';

import './styles/app.css'
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import AboutUs from './aboutUs/page';
import Services from './services/page';
import Contact from './contact/page';
import { Prompt } from 'next/font/google';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ["900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function Home() {
  //url for images
  let prefixClassName = process.env.NODE_ENV === 'development' ? 'backgroundForHeader-dev' : 'backgroundForHeader-prod';

  return (
    <main className={""}>
      <Navbar/>
      <section className={`site-header ${prompt.className} ${prefixClassName}`} id='home'>
          <h1 className={`${raleway.className}`}>YOUR TRUSTED LOGISTICS PARTNER</h1>
          <p>We are providing import/export services to all sectors and from all sectors like China, USA, Europe, Far East, Gulf and Upper Gulf etc.</p>
          <section className='site-header-actions'>
              <a href="#contact" className='site-header-buttons headerButton1'>GET IN TOUCH</a>
              <a href="#aboutUs" className='site-header-buttons headerButton2'>ABOUT US</a>
          </section>
      </section>
      <Services/>
      <AboutUs/>
      <Contact/>
    </main>
  )
}
