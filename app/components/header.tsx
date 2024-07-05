'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../public/img/logo.svg";
import Image from 'next/image';
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from 'react-scroll';
import { RootState } from '../store/store';
import { toggleMenu, closeMenu } from '../store/headerSlice';

type Props = {
  isTopOfPage: boolean;
};

const Header = ({ isTopOfPage }: Props) => {
  const dispatch = useDispatch();
  const isMenuToggled = useSelector((state: RootState) => state.header.isMenuToggled);
  const isAboveMediumScreens = useMediaQuery("(max-width: 991px)");
  const headerBackground = isTopOfPage ? "" : "#442eb9";
  
  return (
    <>
      <header className='header' style={{backgroundColor: headerBackground}}>
          <div className="container">
              <div className="header__inner">
                  <a className="logo" href="#">
                      <Image priority className='logo__img' width={93} height={48} src='/img/logo.svg' alt="logo" />
                  </a>
                  {isAboveMediumScreens ? (
                    <button className="menu__btn" onClick={() => dispatch(toggleMenu())}>
                      <span className={isMenuToggled ? "nav-icon nav-icon--active" : "nav-icon"}></span>
                    </button>
                  ) : (
                    <nav className="header__nav">
                      <ul className="header__nav-list">
                        <li className="header__nav-item">
                          <Link 
                            to="about" 
                            spy={true}
                            smooth={true}
                            className='header__nav-link'
                          >
                            About                                       
                          </Link>
                        </li>
                        <li className="header__nav-item">
                          <Link 
                            to="adventures" 
                            spy={true}
                            smooth={true}
                            className='header__nav-link'
                          >
                            Tours
                          </Link>
                        </li>
                        <li className="header__nav-item">
                          <Link 
                            to="blog" 
                            spy={true}
                            smooth={true}
                            className='header__nav-link' 
                          >
                            Blog  
                          </Link>
                        </li>
                        <li className="header__nav-item">
                          <Link 
                            to="contact" 
                            spy={true}
                            smooth={true}
                            className='header__nav-link' 
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                      <div className="action">
                          <a href="" className="action__button--menu">
                            Book Trip
                          </a>
                      </div>
                    </nav>
                  )}
              </div>
          </div>
      </header>

      {/* Mobile menu modal */}
      {isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu__nav">
          <ul className="mobile-menu__nav-list">
            <li className="mobile-menu__nav-item">
                <Link 
                  to="about" 
                  spy={true}
                  smooth={true} 
                  className="mobile-menu__nav-link"
                  onClick={() => dispatch(closeMenu())}
                >
                  About  
                </Link>
            </li>
            <li className="mobile-menu__nav-item">
                <Link 
                  to="adventures" 
                  spy={true}
                  smooth={true}
                  className="mobile-menu__nav-link"
                  onClick={() => dispatch(closeMenu())}
                >
                  Tours
                </Link>
            </li>
            <li className="mobile-menu__nav-item">
                <Link 
                  to="blog" 
                  spy={true}
                  smooth={true} 
                  className="mobile-menu__nav-link"
                  onClick={() => dispatch(closeMenu())}
                >
                  Blog 
                </Link>
            </li>
            <li className="mobile-menu__nav-item">
                <Link 
                  to="contact" 
                  spy={true}
                  smooth={true} 
                  className="mobile-menu__nav-link"
                  onClick={() => dispatch(closeMenu())}
                >
                  Contact
                </Link>
            </li>
          </ul>
            <div className="action">
              <a 
                href='#'
                className="action__button--menu"
                onClick={() => dispatch(closeMenu())}
              >
                Book Trip
              </a>
            </div>
        </div>
      )}
    </>
  )
}

export default Header;
