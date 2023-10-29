'use client'

import React, { useState } from 'react';
//styles
import '../styles/contact.css';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    //functions
    const handleSubmit = evt=> {
        evt.preventDefault();

    }

    return (
        <form className={`contactForm`} onSubmit={handleSubmit}>
            <input 
                placeholder='name' 
                value={name} 
                onChange={e=> setName(e.target.value)} 
                type='text' 
                id='name'
                autoComplete='off'
                required
            />
            <input 
                placeholder='email' 
                value={email} 
                onChange={e=> setEmail(e.target.value)} 
                type='email' 
                id='email'
                autoComplete='off'
                required
            />
            <textarea 
                placeholder='Type your message here...' 
                value={message} 
                onChange={e=> setMessage(e.target.value)} 
                id='message'
                maxLength="500" 
                autoComplete='off'
                required
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ContactForm;