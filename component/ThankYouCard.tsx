"use client";
import Image from 'next/image';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';
import { FaLinkedin, FaDribbble, FaXTwitter} from 'react-icons/fa6';
import styles from './ThankYou.module.css';

// Font configurations
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const figtree = Figtree({ subsets: ['latin'], weight: ['400','800'] });

const ThankYouFooter = () => {
  return (
    <div className={styles.container} >
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Left Text */}
        <div className={`${styles.leftText} ${poppins.className}`} >
          © 2025 - All rights reserved
          <br />
          <span className={`${styles.designerText} ${brunoAce.className}`}>DESIGNED BY </span>
          <strong className={`${styles.developerName} ${brunoAce.className}`}>LAWAL JIMOH</strong>
          
          <br />
          <span className={`${styles.developerText} ${brunoAce.className}`}>DEVELOPED BY</span>
        </div>

        {/* Horizontal Line */}
        <div className={styles.horizontalLine} ></div>

        {/* Center Logo */}
        <div className={styles.logoContainer} >
          <Image src="/images/LAJ logo 4.png" alt="Logo" width={60} height={40} className={styles.logo} />
        </div>

        {/* Horizontal Line */}
        <div className={styles.horizontalLine}></div>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <div className={styles.iconContainer}>
            <a href="https://x.com/lajimohofficial" target="_blank" rel="noopener noreferrer">
              <FaXTwitter style={{ color: 'white', fontSize: '20px' }} />
            </a>
          </div>
          <div className={styles.iconContainer}>
            <a href="https://www.linkedin.com/in/lawal-jimoh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: 'white', fontSize: '20px' }} />
            </a>
          </div>
          <div className={styles.iconContainer}>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <FaDribbble style={{ color: 'white', fontSize: '20px' }} />
            </a>
          </div>
        </div>
      </div>

      {/* THANK YOU Message */}
      <div className={`${styles.thankYouMessage} ${figtree.className}`}>
        THANK 
        <span className={styles.highlight}>YOU ❤</span>
      </div>
    </div>
  );
};

export default ThankYouFooter;
