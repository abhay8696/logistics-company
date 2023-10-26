import React from 'react';
import '../styles/about.css';
import Navbar from '../components/navbar';

import { Raleway } from 'next/font/google';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ["900"],
});

const AboutUs = () => {

    const displayLocations = ()=> {
        const locations = ['DELHI', 'SURAT', 'MUMBAI', 'CHENNAI', 'BANGALORE'];

        let arr = [];

        locations.forEach(city=> {
            arr.push(
                <span className='locationsSpans'>
                    <img src='/locationIcon.svg' width='25' alt='location icon'/>
                    <span className='locationsSpansTexts'>
                        <span className='cityName'>{city}</span>
                        {/* <span>CALL: +91 123 456 789</span> */}
                    </span>
                </span>
            )
        })
        return arr;
    }

    const displayCards = ()=> {
        const data = [
            {name: 'Trusted Partner', icon: '/trust2.avif', desc: 'We are trusted and total logistics provider for all Logistics related services all over Globe.'},
            {name: 'Shipments', icon: '/shipments.avif', desc: 'We are handling all types of shipments by Air & Sea from India to all parts of world and vice versa.'},
            {name: 'Services', icon: '/services1.avif', desc: 'Aisatico Vision Global Logistics is also providing custom clearance/customs broking and transportation/trucking services in India.'},
            {name: 'Relations', icon: '/trust1.avif', desc: 'All our employees are very respective to all our clients. Our clients are very happy with our logistics services. We are easily introduced by our clients so our business is growing easily.'},
            {name: 'Overseas Serivces', icon: '/overseas.avif', desc: 'We are providing import/export services to all sectors and from all sectors like China, USA, Europe, Far East, Gulf and Upper Gulf etc.'},
        ];

        let arr = [];

        data.forEach(card=> {
            arr.push(
                <section className='aboutCard'>
                    <img src={card?.icon} alt={card?.name}/>
                    <h4>{card?.name}</h4>
                    <p>{card?.desc}</p>
                </section>
            )
        })

        return arr;
    }
    return (
        <>
            <Navbar/>
            <section className='aboutUs' id='aboutUs'>
                <section>
                    <h1 className={`${raleway.className}`}>ABOUT US</h1>
                    <span className='h1Border'></span>
                </section>
                <p className='p1'>
                    Asiatico Vision Global Logistics Pvt. Ltd established in 2020, is trusted logistics partner for all of our clients in Logistics Industry.
                </p>
                
                <span className='sideMsg'>YOUR TRUSTED LOGISTICS PARTNER</span>
            </section>
            <section className='aboutUsCards'>
                {displayCards()}
            </section>
            <section className='ourPresence'>
                <h2>Find Us</h2>
                <section className='mapDiv'>
                    {displayLocations()}
                </section>
                <section className='mapImgDiv'>
                    <img src='map.jpeg'/>
                </section>
            </section>
        </>
    );
};

export default AboutUs;