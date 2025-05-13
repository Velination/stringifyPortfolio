'use client';

import React from 'react';

import ImageCardComponent from '@/component/ImageCardStructure';
import ProjectCard from '@/component/ProductCard';
import WantToKnowCard from '@/component/WantToKnowCard';
import HomePageCard from '@/component/HomePageCard';
import Image from 'next/image';
import  HeroSection from '@/component/VideoCard';
import styles from '@/component/RockRealtyLimitedDesign.module.css';
import ThankYouFooter from '@/component/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });

const images = [
  { src: '/images/Rock Realty Homepage 1.png', alt: 'Light Theme Homepage' },
  { src: '/images/Rock Realty Homepage 2.png', alt: 'Dark Theme Homepage' },
];

const RockRealtyDesignLayout: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>
        
      
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/images/image 2.png" 
          alt="Logo" 
          width={304} 
          height={96}
          className={styles.logo}/>
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          ROCK REALTY LIMITED - 2024
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Real Estate Website</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Redesign
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/images/Rock Realty Main.png" alt="Scene 1" width={1072} height={505} />
        </div>
        

        {/* Homepage Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>HOME PAGE</h2>
        <HeroSection />
        <HomePageCard images={images} />
        

        {/* Project Page Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>PROJECT PAGE</h2>
        <ImageCardComponent src="/images/Free iPad Pro mockup on white table (Mockuuups Studio).png" alt="Scene 1" width={1072} height={505} />
        
         {/* Project Page Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>INVESTMENT PAGE</h2>
        <ImageCardComponent src="/images/Mockup 22.png" alt="Scene 1" width={1072} height={505} />
        

        {/* Want to know  Components */}
        <WantToKnowCard />

        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Courier Service App"
        description="for Delivery Service"
        imageSrc="/images/Scene 12 1 (2).png"
      />
        </div>

        {/* Thank You Footer */}
        <ThankYouFooter />
      </div>
    </div>
    </>

  );
};

export default RockRealtyDesignLayout;
