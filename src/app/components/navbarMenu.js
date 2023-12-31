"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Prompt } from 'next/font/google';



const prompt = Prompt({
    subsets: ['latin'],
    weight: ["600"],
})

const NavbarMenu = () => {
    const [menuPosition, setMenuPosition] = useState("");

    //url for images
    let prefix = process.env.NODE_ENV === 'development' ? '' : '/logistics-company';

    const handleClick = ()=>{
        setMenuPosition(pre=> pre === "menuCentre" ? "menuRight" : "menuCentre");
    }
    return (
        <>
        <section className='menuButton'>
            <img
            src={`${prefix}/menu-grey.svg`}
            alt="menu button"
            className={"styles.vercelLogo"}
            onClick={handleClick}
            />
        </section>
        <section className={`menuItems ${prompt.className}`}>
            <Link href="/" className={`menuLink menuLink1  ${menuPosition}`}>Home</Link>
            <Link href="/services"  className={`menuLink menuLink2  ${menuPosition}`}>Serivces</Link>
            <Link href="/aboutUs"  className={`menuLink menuLink3  ${menuPosition}`}>About</Link>
            <Link href="/contact"  className={`menuLink menuLink4  ${menuPosition}`}>Contact</Link>
            <section onClick={handleClick} className={`dummyForNavbarMenu ${menuPosition}`}></section>
        </section>
        </>
    );
};

export default NavbarMenu;