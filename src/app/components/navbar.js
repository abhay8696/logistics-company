"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import { Roboto, Prompt } from 'next/font/google';


const heebo = Roboto({
    subsets: ['latin'],
    weight: ["900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["600"],
})

const Navbar = () => {
    const [menuPosition, setMenuPosition] = useState("menuOFF");

    const handleClick = ()=>{
        setMenuPosition(pre=> pre === "menuDown" ? "menuUP" : "menuDown");
    }

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
                <span className='navbarLink'>Home</span>
                <span className='navbarLink'>About</span>
                <span className='navbarLink'>Careers</span>
                <span className='navbarLink'>Contact</span>
            </section>
            <section className='menuButton'>
                <img
                src="/menu-grey.svg"
                alt="menu button"
                className={"styles.vercelLogo"}
                onClick={handleClick}
                />
            </section>
            <section className={`menuItems ${prompt.className} ${menuPosition}`}>
                <span className='menuLink'>Home</span>
                <span className='menuLink'>About</span>
                <span className='menuLink'>Careers</span>
                <span className='menuLink'>Contact</span>
            </section>
        </nav>
    );
};

export default Navbar;