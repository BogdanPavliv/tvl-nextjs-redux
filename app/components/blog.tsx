'use client'

import React from 'react';
import ButtonBorderWhite from "../components/ui/buttonBorderWhite";
import { dataArticles } from "../../utils/articles"

type ArticlesItem = {
    date: string;
    name: string;
    image: string;
    author: string;
    title: string;
};

const Blog = () => {
  return (
    <section className='blog' id='blog'>
        <div className="container">
            <div className="blog__inner">
                <div className="blog__top">
                    <div className="blog__top--left">
                        <div className="badge">Our Blog</div>
                        <h2 className="section-title blog-title">Read Our
                        Travel Articles</h2>
                    </div>
                    <div className="blog__top--right">
                    <ButtonBorderWhite>See more</ButtonBorderWhite>
                    </div>
                </div>
                <div className="blog__middle">
                  <div className="articles">
                    {dataArticles.map((item: ArticlesItem, index: number) => (
                        <article key={index} className='article'>
                            <div className="article__content--wrapper">
                                <div className="article__date">{item.date}</div>
                                <div className="article__content">
                                    <div className="article__title">{item.title}</div>
                                    <img className="article__img--author" src={item.author} alt="" />
                                </div>
                                <div className="article__name">{item.name}</div>
                            </div>
                            <img className="article__img" src={item.image} alt="" />
                        </article>
                    ))}
                  </div>
                </div>
                <div className="blog__bottom">
                    <div className="blog__bottom--left">
                        <div className="blog__bottom--title">Newsletter</div>
                        <div className="blog__bottom--subtitle">Separated they live in right at the coast of the Semantics</div>
                    </div>
                    <div className="blog__bottom--right">
                      <form className="form-newsletter" id="form" action="#">
                        <input className="form-newsletter__input" type="text" placeholder='Your Email'/>
                        <button className="form-newsletter__button" type='submit'>Subscribe</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Blog;