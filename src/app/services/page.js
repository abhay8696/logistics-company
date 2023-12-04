import React from 'react';
//components
import Navbar from '../components/navbar';
//styles
import '../styles/services.css'
import '../styles/about.css';
import '../styles/commonStyles.css';
import { Raleway, Prompt } from 'next/font/google';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Services = () => {
    
    //url for images
    let prefix = process.env.NODE_ENV === 'development' ? '' : '/logistics-company';

    const displayServicesBox = ()=> {

        const servicesObj = [
            {name: 'FREIGHT FORWARDING', icon: `${prefix}/freightForwarding.svg`, desc: 'We offer seamless global freight forwarding solutions'},
            {name: 'CUSTOM CLEARANCE', icon: `${prefix}/custom-clearance.svg`, desc: 'Simplify global trade with hassle-free import/export compliance through our services'},
            {name: 'TRANSPORTATION', icon: `${prefix}/transportation.svg`, desc: 'Efficient global transportation solutions for your cargo, from start to finish'},
            {name: 'TRUCKING', icon: `${prefix}/trucking.svg`, desc: "Trucking solutions for reliable cargo transport, across the nation and beyond"},
            {name: 'WAREHOUSING', icon: `${prefix}/warehousing.svg`, desc: 'Secure, flexible warehousing solutions for your storage and distribution needs'},
            {name: 'BROKING', icon: `${prefix}/broking.svg`, desc: 'Expert logistics brokering for cost-effective and efficient supply chain solutions'},
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
            {name: 'GENERATE E-WAY BILLS FOR IMPORT SHIPMENTS', icon: `${prefix}/bill.svg`, desc: 'Creating e-way bills for hassle-free import shipment documentation and tracking'},
            {name: 'GENERATE SIMS & NFMIMS FOR IMPORT SHIPMENTS', icon: `${prefix}/computer.svg`, desc: 'Streamlining import compliance with SIMS and NFMIMS documentation for smooth logistics'},
            {name: 'DPD REGISTRATION', icon: `${prefix}/register.svg`, desc: 'Efficient DPD registration for temporary import and re-export logistics solutions'},
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
            <section className='services common-padding' id='services'>
                <section>
                    <h1 className={`${raleway.className}`}>KEY SERVICES</h1>
                    <span className='h1Border'></span>
                </section>
                <section className='servicesGrid'>
                    {displayServicesBox()}
                </section>
            </section>
            <section className='valueAddedServices common-padding' id='valueAddedServices'>
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