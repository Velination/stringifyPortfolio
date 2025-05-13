"use client";
import styles from './AboutMeFirstCard.module.css';
import { FaLinkedin, FaDribbble, FaXTwitter } from 'react-icons/fa6';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});


const AboutMeFirstCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <span className={`${styles.description} ${poppins.className}`}>
          As an exceptional product designer with three (3) years of experience, I thrive on merging creativity and functionality to achieve user-centric solutions.
        </span>
      </div>

      <div className={styles.iconsWrapper}>
        <div className={styles.iconBox}>
          <a href="https://x.com/lajimohofficial" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>

        <div className={styles.iconBox}>
          <a href="https://www.linkedin.com/in/lawal-jimoh/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <div className={styles.iconBox}>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <FaDribbble />
          </a>
        </div>

        <a href="mailto:your-email@example.com" className={styles.cvButton}>
          read cv
        </a>
      </div>
    </div>
  );
};

export default AboutMeFirstCard;
