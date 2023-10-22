"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Prompt } from 'next/font/google';



const prompt = Prompt({
    subsets: ['latin'],
    weight: ["600"],
})

const NavbarMenu = () => {
    const [menuPosition, setMenuPosition] = useState("menuOFF");

    const handleClick = ()=>{
        setMenuPosition(pre=> pre === "menuDown" ? "menuUP" : "menuDown");
    }
    return (
        <>
        <section className='menuButton'>
            <img
            src="/menu-grey.svg"
            alt="menu button"
            className={"styles.vercelLogo"}
            onClick={handleClick}
            />
        </section>
        <section className={`menuItems ${prompt.className} ${menuPosition}`}>
            <Link href="/" className='menuLink'>Home</Link>
            <Link href="/about"  className='menuLink'>About</Link>
            <Link href="/careers"  className='menuLink'>Careers</Link>
            <Link href="/contact"  className='menuLink'>Contact</Link>
        </section>
        </>
    );
};

export default NavbarMenu;