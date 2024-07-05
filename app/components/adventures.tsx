'use client'

import React from 'react';
import { dataAdventures } from "../../utils/сountries";
import ButtonBorder from "../components/ui/buttonBorder";
import Image from 'next/image';

type AdventureItem = {
    way: string;
    date: string;
    image: string;
    price: string;
};

const Adventures: React.FC = () => {
  return (
    <section className='adventures' id='adventures'>
        <div className="container">
            <div className="adventures__inner">
                <div className="badge">Best Adventures</div>
                <h2 className="section-title adventures-title">Our Popular <br />
                Tours & Expeditions</h2>
                <div className="expeditions">
                    <ul className="expeditions__list">
                        {dataAdventures.map((item: AdventureItem, index: number ) => (
                            <li key={index} className="expeditions__list--item">
                                <div className="expeditions__list--content">
                                    <div className="expeditions__list--way">{item.way}</div>
                                    <div className="expeditions__list--date">{item.date}</div>
                                    <div className="expeditions__list--price">{item.price}</div>
                                </div>
                                <Image className="expeditions__list--image" width={270} height={176} src={item.image} alt="" />
                           </li>
                        ))}
                    </ul>
                </div>
                <div className="dataAdventures__actions">
                    <ButtonBorder>See more</ButtonBorder>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Adventures;