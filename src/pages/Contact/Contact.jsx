import React from 'react';  
const Contact = () => {
    return (
        <div className='contact-form-container'>
            <h2>Contact Me</h2>     
            <form className='form'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required rows="10" cols="50"></textarea>
                <button className='button' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
