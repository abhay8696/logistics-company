import React from 'react';
//components
import Navbar from '../components/navbar';
//styles
import '../styles/services.css'
import '../styles/about.css';
import { Raleway, Prompt } from 'next/font/google';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ["900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600"],
})

const Services = () => {


    const displayServicesBox = ()=> {

        const servicesObj = [
            {name: 'FREIGHT FORWARDING', icon: '/freightForwarding.svg', desc: 'We offer seamless global freight forwarding solutions'},
            {name: 'CUSTOM CLEARANCE', icon: '/custom-clearance.svg', desc: 'Simplify global trade with hassle-free import/export compliance through our services'},
            {name: 'TRANSPORTATION', icon: '/transportation.svg', desc: 'Efficient global transportation solutions for your cargo, from start to finish'},
            {name: 'TRUCKING', icon: "/trucking.svg", desc: "Trucking solutions for reliable cargo transport, across the nation and beyond"},
            {name: 'WAREHOUSING', icon: '/warehousing.svg', desc: 'Secure, flexible warehousing solutions for your storage and distribution needs'},
            {name: 'BROKING', icon: '/broking.svg', desc: 'Expert logistics brokering for cost-effective and efficient supply chain solutions'},
        ]

        let arr = []

        servicesObj.forEach((service)=> {
            const { name, icon, desc } = service;
            arr.push(
                <section className={`servicesBox ${prompt.className}`}>
                    <img src={icon} alt={name} width="100"/>
                    <span className='servicesBoxTexts'>
                        <span className='servicesBoxHead'>{name}</span>
                        <sapn className='servicesBoxDescription'>{desc}</sapn>
                    </span>
                </section>
            )
        });

        return arr;
    }

    const displyAdditional = ()=> {
        const additionalServices = [
            {name: 'GENERATE E-WAY BILLS FOR IMPORT SHIPMENTS', icon: '/bill.svg', desc: 'Creating e-way bills for hassle-free import shipment documentation and tracking'},
            {name: 'GENERATE SIMS & NFMIMS FOR IMPORT SHIPMENTS', icon: '/computer.svg', desc: 'Streamlining import compliance with SIMS and NFMIMS documentation for smooth logistics'},
            {name: 'DPD REGISTRATION', icon: '/register.svg', desc: 'Efficient DPD registration for temporary import and re-export logistics solutions'},
        ]

        let arr = [];
        
        additionalServices.forEach((service)=> {
            const { name, icon, desc } = service;
            arr.push(
                <section className={`servicesBox ${prompt.className}`}>
                    <img src={icon} alt={name} width="100"/>
                    <span className='servicesBoxTexts'>
                        <span className='servicesBoxHead'>{name}</span>
                        <sapn className='servicesBoxDescription'>{desc}</sapn>
                    </span>
                </section>
            )
        });

        return arr;
    }
    return (
        <>
            <Navbar/>
            <section className='services' id='services'>
                <section>
                    <h1 className={`${raleway.className}`}>KEY SERVICES</h1>
                    <span className='h1Border'></span>
                </section>
                <section className='servicesGrid'>
                    {displayServicesBox()}
                </section>
            </section>
            <section className='valueAddedServices' id='valueAddedServices'>
                <section>
                    <h2 className={`${raleway.className}`}>VALUE ADDED SERVICES</h2>
                    <span className='h1Border'></span>
                </section>
                <section className='servicesGrid'>
                    {displyAdditional()}
                </section>
            </section>
        </>
    );
};

export default Services;