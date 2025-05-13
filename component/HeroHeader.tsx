"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/component/HeroHeader.module.css";
import { Bruno_Ace, Figtree } from 'next/font/google';
import AnimatedDivider from '@/component/AnimatedDivider';

const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['800', '500'],
});

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <img
        src="/images/headerhero.png"
        alt="Background"
        className={styles.backgroundImage}
      />

      <div className={`${styles.cardContent} ${isMobile ? styles.mobileCardContent : ""}`}>
        
        {/* HOLA or HEY Animation */}
        <motion.h1
          className={`${styles.hola} ${figtree.className}`}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {isMobile ? "HEY" : "HOLA"}
        </motion.h1>

        {/* SubText Animation - ONLY for desktop */}
        {!isMobile && (
          <div className={styles.subTextContainer}>
            <motion.span
              className={styles.productDesigner}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              Product Designer
            </motion.span>

            <motion.span
              className={styles.lawalJimoh}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              Lawal Jimoh
            </motion.span>
          </div>
        )}

        {/* IAM and Logo Animation */}
        <div className={styles.iamContainer}>
          <motion.h1
            className={styles.iamText}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            IAM
          </motion.h1>

          <motion.div
            className={styles.logoContainer}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <div className={styles.fakeLogo}>
            <img
        src="/images/logo.png"
        alt="Logo"
        
      />
            </div>
          </motion.div>
        </div>
      
        
      </div>

    </div>
  );
};

export default Hero;
