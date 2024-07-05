'use client'

import React from 'react';
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper">
           <div className="footer__top">
              <div className="footer__logo--wrapper">
                <a className="logo" href="#">
                    <Image priority className='logo__img' width={93} height={48} src='/img/logo.svg' alt="logo" />
                </a>
              </div>
              <nav className="footer__menu">
                <ul className="footer__menu--list">
                    <li className="footer__menu--item">
                        <p className="footer__menu--title">Menu</p>
                    </li>
                    <li className="footer__menu--item">
                        <Link 
                          to="about" 
                          spy={true}
                          smooth={true}
                          className="footer__menu--link" 
                        >
                        About
                      </Link>
                    </li>
                    <li className="footer__menu--item">
                        <Link 
                          to="adventures" 
                          spy={true}
                          smooth={true}
                          className="footer__menu--link"
                        >
                          Tours
                        </Link>
                    </li>
                    <li className="footer__menu--item">
                        <Link 
                          to="blog" 
                          spy={true}
                          smooth={true}
                          className="footer__menu--link"
                        >
                          Blog
                        </Link>
                    </li>
                    <li className="footer__menu--item">
                        <Link 
                          to="contact" 
                          spy={true}
                          smooth={true}
                          className="footer__menu--link"
                        >
                          Contact
                        </Link>
                    </li>
                </ul>
              </nav>
              <div className="footer__service">
                <ul className="footer__menu--list">
                    <li className="footer__menu--item">
                        <p className="footer__menu--title">Service</p>
                    </li>
                    <li className="footer__menu--item">
                        <a className="footer__menu--link" href="">Transfers</a>
                    </li>
                    <li className="footer__menu--item">
                        <a className="footer__menu--link" href="">Guides</a>
                    </li>
                    <li className="footer__menu--item">
                        <a className="footer__menu--link" href="">Locals</a>
                    </li>
                    <li className="footer__menu--item">
                        <a className="footer__menu--link" href="">Optimal</a>
                    </li>
                </ul>
              </div>
              <div className="footer__social">
              <ul className="footer__menu--list">
                <li className="footer__menu--item">
                  <p className="footer__menu--title">Social</p>
                </li>
                <li className="footer__menu--item">
                  <ul className="footer__social--list">
                      <li className="footer__social--item">
                          <a className="footer__social--link" href="https://www.facebook.com/" target="_blank">
                            <Image priority width={48} height={48} className="footer__social--img" src="/img/footer/facebook.svg" alt="facebook" />
                          </a>
                      </li>
                      <li className="footer__social--item">
                          <a className="footer__social--link" href="https://x.com/" target="_blank">
                            <Image priority width={48} height={48} className="footer__social--img" src="/img/footer/twitter.svg" alt="twitter" />
                          </a>
                      </li>
                      <li className="footer__social--item">
                          <a className="footer__social--link" href="https://www.instagram.com/" target="_blank">
                            <Image priority width={48} height={48} className="footer__social--img" src="/img/footer/instagram.svg" alt="instagram" />
                          </a>
                      </li>
                  </ul>
                </li>
              </ul>
              </div>
                
           </div>
           <div className="footer__bottom">
             <p className="footer__bottom--copy">Copyright © 2020 Laaqiq. All Rights Reserved.</p>
             <div className="footer__bottom--actions">
                <a className="footer__bottom--actions--text" href="">Terms of Use</a>
                <a className="footer__bottom--actions--text" href="">Privacy Policy</a>
             </div>
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;