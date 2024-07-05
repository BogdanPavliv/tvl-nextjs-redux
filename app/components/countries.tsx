'use client'

import React from 'react';
import { dataCountries } from "../../utils/сountries";
import { sliderChooseSettings } from "../../utils/common";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CountryItem = {
  country: string;
  city: string;
  image: string;
};

const Countries: React.FC = () => {
  return (
    <section className='countries'>
      <div className="container-md">
        <div className="countries__slider--wrapper">
            <Slider
                {...sliderChooseSettings}
                className='react-slick-countries'
                
            >
                {dataCountries.map((item: CountryItem, index: number) => (
                  <div key={index} className='countries__slide--wrapper'>
                    <div className="countries__slide">
                      <Image priority width={270} height={304} className="countries__slide--img" src={item.image} alt={item.city} />
                      <div className="countries__slide--city">{item.city}</div>
                      <div className="countries__slide--country">{item.country}</div>
                    </div>
                  </div>
                ))}
            </Slider>
            </div>
        </div>
    </section>
  )
}

export default Countries;

// start