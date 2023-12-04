import React from 'react';
import { Roboto, Prompt } from 'next/font/google';
import Link from 'next/link';
import '../styles/navbar.css';
import "../styles/commonStyles.css"
import NavbarMenu from './navbarMenu';


const roboto = Roboto({
    subsets: ['latin'],
    weight: ["100", "300", "400", "500", "700", "900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Navbar = () => {

    //url for images
    let prefix = process.env.NODE_ENV === 'development' ? '' : '/logistics-company';

    return (
        <nav className={`navbar ${prompt.className} common-padding`}>
            <span className='logo'>
                <img
                src={`${prefix}/truck.svg`}
                alt="truck Logo"
                className={"styles.vercelLogo"}
                />
                <span className={`logoText ${roboto.className}`}>Logistics Company</span>
            </span>
            <section className={`navbarItems`}>
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