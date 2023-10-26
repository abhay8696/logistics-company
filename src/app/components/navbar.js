import React from 'react';
import { Roboto, Prompt } from 'next/font/google';
import Link from 'next/link';
import '../styles/navbar.css';
import NavbarMenu from './navbarMenu';


const heebo = Roboto({
    subsets: ['latin'],
    weight: ["900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["600"],
})

const Navbar = () => {

    return (
        <nav className='navbar'>
            <span className='logo'>
                <img
                src="/truck.svg"
                alt="truck Logo"
                className={"styles.vercelLogo"}
                />
                <span className={`logoText ${heebo.className}`}>Asiatico Logistics</span>
            </span>
            <section className={`navbarItems ${prompt.className}`}>
                <Link href="/" className='navbarLink'>Home</Link>
                <Link href="/services"  className='navbarLink'>Service</Link>
                <Link href="/aboutUs"  className='navbarLink'>About</Link>
                <Link href="/contact"  className='navbarLink'>Contact</Link>
            </section>
            <NavbarMenu />
        </nav>
    );
};

export default Navbar;