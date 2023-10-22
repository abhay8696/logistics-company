import Image from 'next/image';
import './styles/navbar.css';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <main className={""}>
      <Navbar/>
    </main>
  )
}
