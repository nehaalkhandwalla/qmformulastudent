import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <h2 className="Heading">CONTACT</h2>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.352420325895!2d-0.04265638422941589!3d51.52504917963804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d2f7a55c589%3A0x8e8737f7c223c634!2sQueen%20Mary%20University%20of%20London!5e0!3m2!1sen!2suk!4v1684326173295!5m2!1sen!2suk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Queen Mary University of London Location"
                ></iframe>
            </div>
            <div className="contact-details">
                <div className="enquiries">
                    <h3>Enquiries</h3>
                    <p>For any enquiries or questions, please fill out the following form.</p>
                    <form className="contact-form">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email *" required />
                        <input type="text" name="subject" placeholder="Subject" />
                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="address-info">
                    <h3>Address</h3>
                    <p>
                        The School of Engineering and Materials Science<br />
                        Queen Mary, University of London<br />
                        Mile End Road<br />
                        London<br />
                        E1 4NS
                    </p>
                    <div className="email-info">
                        <h3>Email us:</h3>
                        <a href="mailto:formulastudent@qmsu.org">formulastudent@qmsu.org</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 