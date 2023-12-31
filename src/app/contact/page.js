import React from 'react';
//components
import Navbar from '../components/navbar';
//styles
import '../styles/about.css';
import '../styles/contact.css'
import '../styles/commonStyles.css'
import { Prompt, Raleway } from 'next/font/google';
import ContactForm from '../components/contactForm';


const raleway = Raleway({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
  const prompt = Prompt({
      subsets: ['latin'],
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  })

const Contact = () => {

    //url for images
    let prefixClassName = process.env.NODE_ENV === 'development' ? 'backgroundForAboutHeader-dev' : 'backgroundForAboutHeader-prod';
    let backgroundForContactFormSection = process.env.NODE_ENV === 'development' ? 'backgroundForContactFormSection-dev' : 'backgroundForContactFormSection-prod';
    let prefixSrc = process.env.NODE_ENV === 'development' ? '' : '/logistics-company';

    return (
        <>
            <Navbar />
            <section className={`common-padding aboutUs ${raleway.className} offsetForScrollTop ${prefixClassName}`} id='contact'>
                <section>
                    <h1>CONTACT US</h1>
                    <span className='h1Border'></span>
                </section>
                <p className='p1'>
                    Get in touch with us today for all your inquiries and feedback.
                </p>
                
                {/* <span className='sideMsg'>YOUR TRUSTED LOGISTICS PARTNER</span> */}
            </section>
            <section className={`contactFormSection ${prompt.className} ${backgroundForContactFormSection}`}>
                <secton className='common-padding-left contactInfo'>
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
                <section className={`common-padding-right formDiv`}> 
                    <h3>CONTACT FORM</h3>
                    <ContactForm/>
                </section>
            </section>
        </>
    );
};

export default Contact;