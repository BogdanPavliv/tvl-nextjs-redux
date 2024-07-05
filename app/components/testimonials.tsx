'use client'

import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataTestimonials } from "../../utils/сountries";
import { sliderTestimonialsSettings } from "../../utils/testimonials";

type TestimonialsItem = {
    response: string;
    name: string;
    image: string;
    role: string
};

const Testimonials: React.FC = () => {
  return (
    <section className='testimonials'>
        <div className="container">
            <div className="testimonials__inner">
                <div className="badge">Testimonials</div>
                <h2 className="section-title testimonials-title">Travel Tips
                From Travellers</h2>
                <div className="testimonials__slider--wrapper">
                   <Slider
                    {...sliderTestimonialsSettings}
                    className='react-slick-testimonials'
                   >
                     {dataTestimonials.map((item: TestimonialsItem, index: number) => (
                       <div key={index} className='teastimonials__slide--wrapper'>
                        <div className="testimonials__slide">
                          <div className="testimonials__slide--response">
                            {item.response}
                          </div>
                          <div className="testimonials__slide--bottom">
                            <Image priority width={78} height={78} className="testimonials__slide--img" src={item.image} alt={item.name} />
                            <div className="testimonials__slide--text">
                                <div className="testimonials__slide--name">{item.name}</div>
                                <div className="testimonials__slide--role">{item.role}</div>
                            </div>
                          </div>
                        </div>
                       </div>
                     ))}
                   </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;