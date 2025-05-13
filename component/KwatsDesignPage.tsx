'use client';

import React from 'react';


import ProjectCard from '@/component/ProductCard';

import ComingSoonComponent from '@/component/ComingSoon';
import Image from 'next/image';
import styles from '@/component/KwatsPageDesign.module.css';
import ThankYouFooter from '@/component/ThankYouCard';
import { Bruno_Ace, Poppins } from 'next/font/google';


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });




const KwatsDesign: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>
        
      
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/images/Asset 3.png" 
          alt="Logo" 
          width={304} 
          height={96}
          className={styles.logo}/>
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          KWATS - 2024
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Courier Service App for </h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
        Delivery Service
        </span>

        <ComingSoonComponent />

        {/* Logo */}
        <div className={styles.imageContainer}>
          <Image src="/images/Vector 10.png" 
          alt="Logo" 
          width={204} 
          height={96}
          className={styles.image}/>
        </div>


        

        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Courier Service App"
        description="for Delivery Service"
        imageSrc="/images/Scene 12 1 (3).png"
      />
        </div>

        {/* Thank You Footer */}
        <ThankYouFooter />
      </div>
    </div>
    </>

  );
};

export default KwatsDesign;
