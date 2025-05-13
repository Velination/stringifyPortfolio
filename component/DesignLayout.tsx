'use client';

import React from 'react';

import ImageCardComponent from '@/component/ImageCardStructure';
import SlidingImageComponent from '@/component/SlidingImageCards';
import ProjectCard from '@/component/ProductCard';
import WantToKnowCard from '@/component/WantToKnowCard';

import Image from 'next/image';
import styles from './MyCareAssistants.module.css';
import ThankYouFooter from '@/component/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });

// Image list for sliding component
const images = [
  { src: "/images/Frame 53.png", alt: "First Image", width: 390, height: 500 },
  { src: "/images/Frame 54.png", alt: "Second Image", width: 390, height: 500 },
  { src: "/images/Frame 55.png", alt: "Third Image", width: 390, height: 500 },
  { src: "/images/Frame 53.png", alt: "Fourth Image", width: 390, height: 500 },
];

const DesignsView: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Background Image */}
       

     
      
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/images/MCA LOGO SVG.png" alt="Logo" width={96} height={96} />
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          MYCARE ASSISTANT (MYQURA) - 2024
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Care Service App for</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Care Professionals & Patients
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/images/scene 18(first image).png" alt="Scene 1" width={1272} height={705} />
        </div>
        

        {/* MYQURA CLIENT Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>MYQURA CLIENT</h2>
        <ImageCardComponent src="/images/shot(second image).png" alt="Scene 2" width={1272} height={705} />
        <ImageCardComponent src="/images/Slider(third image).png" alt="Scene 3" width={1272} height={705} />

        {/* MYQURA CARE PROFESSIONAL */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>MYQURA CARE</h2>
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>PROFESSIONAL</h2>
        <ImageCardComponent src="/images/Shot (fourth image).png" alt="Scene 4" width={1272} height={705} />
        <ImageCardComponent src="/images/Shot (fifth image).png" alt="Scene 5" width={1272} height={705} />

        {/* Sliding Images */}
        <div className={styles.sliderContainer}>
          <SlidingImageComponent images={images} />
        </div>

        {/* Admin Portal */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>ADMIN PORTAL</h2>
        <ImageCardComponent src="/images/iMac 24 inch (1).png" alt="Admin Portal" width={1272} height={705} />

        {/* Additional Components */}
        <WantToKnowCard />

        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Restaurant Website"
        description="Redesign"
        imageSrc="/images/Scene 12 1.png"
      />
        </div>

        {/* Thank You Footer */}
        <ThankYouFooter />
      </div>
    </div>
    </>

  );
};

export default DesignsView;
