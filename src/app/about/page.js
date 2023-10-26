import React from 'react';
import '../styles/about.css';
import Navbar from '../components/navbar';

import { Raleway } from 'next/font/google';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ["900"],
});

const AboutUs = () => {
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
                <section className='aboutCard'>
                    <img src='/trust2.avif' alt='trust image'/>
                    <h4>Trusted Partner</h4>
                    <p>We are trusted and total logistics provider for all Logistics related services all over Globe.</p>
                </section>
                <section className='aboutCard'>
                    <img src='/shipments.avif' alt='shipments image'/>
                    <h4>Shipments</h4>
                    <p>We are handling all types of shipments by Air & Sea from India to all parts of world and vice versa.</p>
                </section>
                <section className='aboutCard'>
                    <img src='/services1.avif' alt='services1 image'/>
                    <h4>Services</h4>
                    <p>Aisatico Vision Global Logistics is also providing custom clearance/customs broking and transportation/trucking services in India.</p>
                </section>
                <section className='aboutCard'>
                    <img src='/trust1.avif' alt='trust1 image'/>
                    <h4>Relations</h4>
                    <p>All our employees are very respective to all our clients. Our clients are very happy with our logistics services. We are easily introduced by our clients so our business is growing easily.</p>
                </section>
                <section className='aboutCard'>
                    <img src='/overseas.avif' alt='overseas'/>
                    <h4>Overseas Serivces</h4>
                    <p>We are providing import/export services to all sectors and from all sectors like China, USA, Europe, Far East, Gulf and Upper Gulf etc.</p>
                </section>
            </section>
            <section className='ourPresence'>
                <h2>Find Us</h2>
                <section className='mapDiv'>
                    <span className='locationsSpans'>
                        <img src='/locationIcon.svg' width='25' alt='location icon'/>
                        <span className='locationsSpansTexts'>
                            <span className='cityName'>DELHI</span>
                            {/* <span>CALL: +91 123 456 789</span> */}
                        </span>
                    </span>
                    <span className='locationsSpans'>
                        <img src='/locationIcon.svg' width='25' alt='location icon'/>
                        <span className='locationsSpansTexts'>
                            <span className='cityName'>SURAT</span>
                            {/* <span>CALL: +91 123 456 789</span> */}
                        </span>
                    </span>
                    <span className='locationsSpans'>
                        <img src='/locationIcon.svg' width='25' alt='location icon'/>
                        <span className='locationsSpansTexts'>
                            <span className='cityName'>MUMBAI</span>
                            {/* <span>CALL: +91 123 456 789</span> */}
                        </span>
                    </span>
                    <span className='locationsSpans'>
                        <img src='/locationIcon.svg' width='25' alt='location icon'/>
                        <span className='locationsSpansTexts'>
                            <span className='cityName'>CHENNAI</span>
                            {/* <span>CALL: +91 123 456 789</span> */}
                        </span>
                    </span>
                    <span className='locationsSpans'>
                        <img src='/locationIcon.svg' width='25' alt='location icon'/>
                        <span className='locationsSpansTexts'>
                            <span className='cityName'>BANGALORE</span>
                            {/* <span>CALL: +91 123 456 789</span> */}
                        </span>
                    </span>
                </section>
                <section className='mapImgDiv'>
                    <img src='map.jpeg'/>
                </section>
            </section>
        </>
    );
};

export default AboutUs;