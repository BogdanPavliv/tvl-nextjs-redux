'use client'

import React from 'react';
import ButtonOrange from "../components/ui/buttonOrange";
import about_img_1 from "../../public/img/section-about/about-img-1.jpg";
import about_img_2 from "../../public/img/section-about/about-img-2.jpg";
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '../../utils/variants'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="about__inner">
                <div className="about__left">
                    <div className="badge">About</div>
                    <motion.h2 
                        variants={FadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }} className="section-title about-title"
                    >
                     Explore Our Planet Together
                    </motion.h2>
                    <h3 className="section-subtitle about-subtitle">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h3>
                    <div className="about__slogan--wrapper">
                        <div className="about__slogan--title"></div>
                        <div className="about__slogan--subtitle"></div>
                    </div>
                    <div className="about__bottom">
                       <ButtonOrange>About Us</ButtonOrange>
                    </div>
                </div>
                <div className="about__right">
                    <motion.div 
                        variants={FadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }} className="about__right--wrapper"
                    >
                        <Image className="about__img" width={470} height={592} src={about_img_1} alt="About image" />
                        <Image className="about__img--absolute" width={270} height={400} src={about_img_2} alt="About image" />
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;