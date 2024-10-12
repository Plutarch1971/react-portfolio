import React from 'react';  
const Contact = () => {
    return (
        <div className='contact-form-container'>
            <h1>Contact Me</h1>
            <form className='form'>
                <div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required rows="10" cols="50"></textarea>
                </div>
                <button className='button' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
