'use client';
import React from 'react';
import styles from './ComingSoon.module.css';
import Image from 'next/image';
import { Bruno_Ace, Poppins } from 'next/font/google';


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const ComingSoonComponent: React.FC = () => {
  return (
    <div className={styles.comingSoonWrapper}>
      {/* Left Side Image */}
      <div className={styles.imageContainer}>
        <Image 
          src="/images/Memoji Component.png" 
          alt="Coming Soon Image"
          width={200}
          height={200}
          className={styles.avatarImage}
        />
      </div>

      {/* Right Side Text */}
      <div className={styles.textContainer}>
        <h2 className={`${brunoAce.className} ${styles.mainHeading}`}>COMING SOON!!!</h2>
        <p className={`${poppins.className} ${styles.subHeading}`}>Kawts’ case study is being carefully prepared! Kindly check back later.</p>
        <span className={`${poppins.className} ${styles.nextProject}`}>Check out the next project..</span>
      </div>
    </div>
  );
};

export default ComingSoonComponent;
