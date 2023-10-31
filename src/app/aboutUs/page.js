import React from 'react';
import '../styles/about.css';
import Navbar from '../components/navbar';

import { Raleway, Prompt } from 'next/font/google';
import { Roboto } from 'next/font/google';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ["900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600"],
});
const roboto = Roboto({
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
            {name: 'Services', icon: '/services1.avif', desc: 'Aisatico values Global Logistics is also providing custom clearance/customs broking and transportation/trucking services in India.'},
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

    const displayMissions = ()=>{
        const missions = [
            {
                name: "customerValue",
                mission: "TO DELIVER SUPERIOR VALUE TO OUR CUSTOMERS",
                icon: '/namaste.svg'
            },
            {
                name: "growth",
                mission: "TO CREATE GROWTH AND DEVELOPMENT OPPORTUNITIES AND A SAFE WORK",
                icon: '/growth.svg'
            },
            {
                name: "environment",
                mission: "ENVIRONMENT FOR OUR EMPLOYEES",
                icon: '/happy.svg'
            },
            {
                name: "growth2",
                mission: "TO IMPROVE QUALITY SERVICES FOR GROWTH OF OUR COMPANY",
                icon: '/quality.svg'
            },
        ]
        let arr = [];
        
        missions.forEach((service)=> {
            const { name, mission, icon } = service;
            arr.push(
                <section className={`missionBox`} id={`mission-${name}`}>
                    <img src={icon} alt={mission} width="75"/>
                    <span className='missionBoxDescription'>{mission}</span>
                </section>
            )
        });

        return arr;
    }

    const displayValues = ()=> {
        const values = [
            {
                name: "legal",
                mission: "ACT HONESTLY, ETHICALLY, AND LEGALLY",
                icon: '/legal.svg'
            },
            {
                name: "responsibility",
                mission: "ACCEPT PERSONAL RESPONSIBILITY",
                icon: '/person.svg'
            },
            {
                name: "respect",
                mission: "SHOW RESPECT FOR THE INDIVIDUAL",
                icon: '/handshake.svg'
            },
            {
                name: "productive",
                mission: "BE MORE PRODUCTIVE AND EFFICIENT",
                icon: '/light-bulb.svg'
            },
            {
                name: "finance",
                mission: "BE FISCALLY RESPONSIBLE",
                icon: '/dollar.svg'
            },
        ]
        let arr = [];
        
        values.forEach((service)=> {
            const { name, mission, icon } = service;
            arr.push(
                <section className={`missionBox`} id={`mission-${name}`}>
                    <img src={icon} alt={name} width="75"/>
                    <span className='missionBoxDescription'>{mission}</span>
                </section>
            )
        });

        return arr;
    }
    return (
        <>
            <Navbar/>
            <section className={`aboutUs ${prompt.className} offsetForScrollTop`} id='aboutUs'>
                <section>
                    <h1 className={`${raleway.className}`}>ABOUT US</h1>
                    <span className='h1Border'></span>
                </section>
                <p className='p1'>
                    Asiatico Vision Global Logistics Pvt. Ltd established in 2020, is trusted logistics partner for all of our clients in Logistics Industry.
                </p>
                
                <section className='about-header-actions'>
                    <a href="#ourPresence" className='about-header-buttons aboutButton1'>OUR PRESENCE</a>
                    <a href="#ourMission" className='about-header-buttons aboutButton2'>OUR MISSION AND VALUES</a>
                </section>
                <span className='sideMsg'>YOUR TRUSTED LOGISTICS PARTNER</span>
            </section>
            <section className={`aboutUsCards ${prompt.className}`}>
                {displayCards()}
            </section>
            <section className={`ourPresence ${prompt.className} offsetForScrollTop`} id='ourPresence'>
                <section className='mapDiv'>
                    <h2>OUR PRESENCE</h2>
                    <span className='h1Border h2Border'></span>
                    {displayLocations()}
                </section>
                <section className='mapImgDiv'>
                    <img src='map.jpeg'/>
                </section>
            </section>
            <section className={`mission-values-container ${prompt.className}`}>
                <section className='mission-values ourMission offsetForScrollTop' id='ourMission'>
                    <h2>Our Mission</h2>
                    <span className='h1Border h2Border'></span>
                    <section className='mission-values-grid'>
                        {displayMissions()}
                    </section>
                </section>
                <section className='mission-values ourvalues' id='ourValues'>
                    <h2>Our Values</h2>
                    <span className='h1Border h2Border'></span>
                    <section className='mission-values-grid'>
                        {displayValues()}
                    </section>
                </section>
            </section>
        </>
    );
};

export default AboutUs;