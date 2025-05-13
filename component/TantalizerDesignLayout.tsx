'use client';

import React from 'react';

import ImageCardComponent from '@/component/ImageCardStructure';
import ProjectCard from '@/component/ProductCard';
import WantToKnowCard from '@/component/WantToKnowCard';
import HomePageCard from '@/component/HomePageCard';
import Image from 'next/image';
import styles from './TantalizerDesign.module.css';
import MenuSlider from '@/component/SliderImage';
import ThankYouFooter from '@/component/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });

const images = [
  { src: '/images/Tantalizer Home Page 2.png', alt: 'Light Theme Homepage' },
  { src: '/images/Frame 115.png', alt: 'Dark Theme Homepage' },
];

const menuItems = [
  {
    src: '/images/Menu Page 1.png',
    alt: 'Light Theme Homepage',
    title: 'MENU',
  },
  {
    src: '/images/Sidebar Cart Page 1.png',
    alt: 'Dark Theme Homepage',
    title: 'SIDEBAR CART',
  },
  {
    src: '/images/shopping_cart.png',
    alt: 'Another Menu',
    title: 'CART',
  },
  {
    src: '/images/checkout.png',
    alt: 'Another Menu',
    title: 'CHECKOUT',
  },
  {
    src: '/images/success page.png',
    alt: 'Another Menu',
    title: 'SUCCESS PAGE',
  },
  {
    src: '/images/Track your order page.png',
    alt: 'Another Menu',
    title: 'TRACK YOUR ORDER',
  },
];

const TantalizerDesignLayout: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>

        
      
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/images/tantalizer_logo.png" alt="Logo" width={96} height={96} />
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          TANTALIZERS - 2023
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Restaurant Website</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Redesign
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/images/MOCKUP 5.jpg" alt="Scene 1" width={1072} height={505} />
        </div>
        

        {/* Homepage Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>HOME PAGE</h2>
        <HomePageCard images={images} />
       
        {/* Menu Section */}
        <MenuSlider items={menuItems} />
        
        
        {/* Want to know  Components */}
        <WantToKnowCard />

        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Real Estate Website"
        description="Redesign"
        imageSrc="/images/Scene 12 1 (1).png"
      />
        </div>

        {/* Thank You Footer */}
        <ThankYouFooter />
      </div>
    </div>
    </>

  );
};

export default TantalizerDesignLayout;
