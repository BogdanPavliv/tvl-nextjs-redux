"use client"

import React from 'react';
import { useEffect, useState } from "react";
import Header from "../components/header";


const HeaderTop = () => {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setIsTopOfPage(true);
          }
          if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <Header isTopOfPage={isTopOfPage}/>
  )
}

export default HeaderTop;