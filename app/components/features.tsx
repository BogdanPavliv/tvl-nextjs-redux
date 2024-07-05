'use client'

import React from 'react';
import ButtonOrange from "../components/ui/buttonOrange";
import features_img_1 from "../../public/img/section-features/features-img-1.jpg";
import features_img_2 from "../../public/img/section-features/features-img-2.jpg";
import Image from 'next/image';

const Features = () => {
  return (
    <section className='features'>
        <div className="container">
            <div className="features__inner">
                <div className="features__left">
                    <div className="features__left--img-wrapper">
                        <Image className="features__img" width={470} height={592} src={features_img_1} alt="Features image" />
                        <Image className="features__img--absolute" width={305} height={438} src={features_img_2} alt="" />
                    </div>
                </div>
                <div className="features__right">
                    <div className="badge">Features</div>
                    <h2 className="section-title features-title">Get Unique 
                    Experience</h2>
                    <div className="features__right--text">
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language. 
                    </div>
                    <ul className="features__list">
                        <li className="features__item check">
                         Transfers
                        </li>
                        <li className="features__item check">
                          Guides
                        </li>
                        <li className="features__item check">
                          Optimal
                        </li>
                        <li className="features__item check">
                          Locals
                        </li>
                    </ul>
                    <div className="features__action">
                      <ButtonOrange>Service</ButtonOrange>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features;