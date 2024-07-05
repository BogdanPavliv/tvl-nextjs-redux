'use client'

import React from 'react';
import ButtonGreen from "../components/ui/buttonGreen";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div className="container">
           <div className="contact__inner">
              <div className="contact__left">
                <iframe 
                    src="https://maps.google.com/maps?width=100%25&amp;height=592&amp;hl=en&amp;q=875%20School%20Street%20Ormond%20Beach,%20FL%2032174+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width={"100%"} 
                    height={"592"} 
                    frameBorder="0" 
                    style={{ border: 0 }}
                    aria-hidden="false"
                    scrolling="no"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="contact__right">
                    <div className="badge">Contact</div>
                    <h2 className="section-title contact-title">Get In Touch 
                    With Us</h2>
                    <div className="contact__right--text">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language. </div>
                    <ul className="contact__list">
                        <li className="contact__item phone-contact">+1 (234) 567-89-02</li>
                        <li className="contact__item email-contact">travel@adventure.com</li>
                    </ul>
                    <div className="contact__action">
                        <ButtonGreen>Contact Us</ButtonGreen>
                    </div>
              </div>
           </div>
        </div>
    </section>
  )
};

export default Contact;