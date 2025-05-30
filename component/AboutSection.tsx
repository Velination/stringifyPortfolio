"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/component/AboutSection.module.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['800', '900'],
});


const AboutSection: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.aboutBackground}></div>
       
      
      <div className={styles.aboutContent}>
      {/* ABOUT TEXT (coming from top) */}
      <motion.h1
       className={`${styles.aboutTitle} ${figtree.className}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        ABOUT
      </motion.h1>

      {/* DESCRIPTION TEXT (coming from bottom) */}
      <motion.p
        className={`${styles.aboutDescription} ${figtree.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        FROM HOPING ON DIFFERENT SKILLS SET TO LOVING <br />
        <span className={styles.highlight}>PRODUCT DESIGN</span>
      </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;
