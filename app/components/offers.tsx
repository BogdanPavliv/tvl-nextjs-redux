'use client'

import React from 'react';
import { dataOffers } from "../../utils/offers";
import Image from 'next/image';

type DestinationsItem = {
    country: string;
    city: string;
    image: string;
    price: string;
};

const Offers = () => {
  return (
    <section className='offers'>
       <div className="container">
         <div className="offers__inner">
           <div className="badge">Exclusive offers</div>
           <h2 className="section-title offers-title">Discover Popular Destinations</h2>
           <div className="destinations">
             <ul className="destinations__list">
               {dataOffers.map((item: DestinationsItem, index: number) => (
                <li key={index} className="destinations__list--item">
                    <div className="destinations__list--imege-wrapper">
                        <Image width={370} height={400} className="destinations__list--imege" src={item.image} alt="" />
                        <div className="circle">
                            <div className="circle__price">{item.price}</div>
                        </div>
                    </div>
                    <div className="destinations__list--city">{item.city}</div>
                    <div className="destinations__list--country">{item.country}</div>
                </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
    </section>
  )
}

export default Offers;