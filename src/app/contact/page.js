import React from 'react';
//components
import Navbar from '../components/navbar';
//styles
import '../styles/about.css';
import '../styles/contact.css'
import { Prompt, Raleway, Roboto } from 'next/font/google';
import ContactForm from '../components/contactForm';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ["900"],
});
const roboto = Roboto({
    subsets: ['latin'],
    weight: ["900"],
});
const prompt = Prompt({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600"],
})

const Contact = () => {

    return (
        <>
            <Navbar />
            <section className={`aboutUs ${raleway.className}`} id='aboutUs'>
                <section>
                    <h1>CONTACT US</h1>
                    <span className='h1Border'></span>
                </section>
                <p className='p1'>
                    Get in touch with us today for all your inquiries and feedback.
                </p>
                
                {/* <span className='sideMsg'>YOUR TRUSTED LOGISTICS PARTNER</span> */}
            </section>
            <section className={`contactFormSection ${prompt.className}`}>
                <secton className='contactInfo'>
                    <section className='contactInfoBlock office'>
                        <span className='contactInfoBlockName'>Office</span>
                        <span className='contactInfoBlockDesc'>
                            <span>118-E, NBC COMPLEX, 1ST FLOOR, OPP.CBD BELAPUR RAILWAY STATION, SECTOR 11, CBD BELAPUR, NAVI MUMBAI-400614, MAHARASHTRA, INDIA.</span>
                        </span>
                    </section>
                    <section className='contactInfoBlock phone'>
                        <span className='contactInfoBlockName'>Call</span>
                        <span className='contactInfoBlockDesc'>
                            <span>+91 123456978</span>
                            <span>+91 123456978</span>
                        </span>
                    </section>
                    <section className='contactInfoBlock email'>
                        <span className='contactInfoBlockName'>Email</span>
                        <span className='contactInfoBlockDesc'>
                            <span>sales@logisticsCompany.com</span>
                            <span>contact@logisticsCompany.com</span>
                        </span>
                    </section>
                </secton>
                <section className={`formDiv`}> 
                    <h3>CONTACT FORM</h3>
                    <ContactForm/>
                </section>
            </section>
        </>
    );
};

export default Contact;