import React from 'react';
import '../styles/navbar.css';
import Navbar from '../components/navbar';

const HomePage = () => {
    return (
        <section>
            <Navbar/>
            <section className='site-header'>
                <h1>YOUR TRUSTED LOGISTICS PARTNER</h1>
                <p>Here at Wilsonport we pride ourselves in being known for our quality services. Your satisfaction and happiness is our number one priority all the time</p>
                <section>
                    <span>GET IN TOUCH</span>
                    <span>ABOUT US</span>
                </section>
            </section>
        </section>
    );
};

export default HomePage;