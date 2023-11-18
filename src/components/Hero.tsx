'use client'
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3, 
        duration: 0.2, 
        ease: "easeInOut", 
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1, 
        duration: 0.2, 
        ease: "easeOut", 
      },
    },
  };


  return (
    <motion.div className="" variants={containerVariants} initial="hidden" animate="visible">
      <motion.p className='pl-2 md:pl-[12px] mb-2 lg:mb-[-5px] 2xl:mb-[-10px] h-medium text-[24px] 2xl:text-[26px]' variants={textVariants}>I&apos;M KAMEL SINGH</motion.p>
      <motion.h1 className='mb-2 text-main h-bold text-[75px] sm:text-[86px] md:text-[100px] lg:text-[124px] xl:text-[160px] 2xl:text-[180px] leading-[.9] tracking-tighter' variants={textVariants}>DESIGNING &amp; DEPLOYING</motion.h1>
      <motion.p className='pl-2 md:pl-[12px] text-[18px] md:text-[26px] lg:text-[32px] h-light tracking-wider' variants={textVariants}>WEBSITES, APPLICATIONS, AND MORE</motion.p>
    </motion.div>
  )
}

export default Hero;
