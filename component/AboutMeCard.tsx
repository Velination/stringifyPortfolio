"use client";
import styles from './AboutMeCard.module.css';
import Image from 'next/image';
import { Bruno_Ace } from 'next/font/google';

const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.heading} ${brunoAce.className}`}>
        ABOUT ME
      </h2>
      <p className={styles.text}>
        Product design is more than a career; it&apos;s the result of a lifelong passion for exploration.
        <span className={styles.subText}>
          From building WordPress sites and blogging as a teen, I&apos;ve always been drawn to creating and problem-solving.
          Post-graduation, I tried data analytics and affiliate marketing, drawn by my math skills and their appeal respectively.
        </span>
        Though I found enjoyment and some success, neither provided the meaningful impact I sought.
      </p>
      <p className={styles.section}>
        Driven by a strong desire to create meaningful impact, I spent considerable time searching for the right fit.
        <span className={styles.highlight}>
          The turning point came with my mentor, Alex Oyebade, who suggested I investigate UX writing.
        </span>
        This sparked profound interest, leading me to discover the powerful potential of
        <span className={styles.highlight}>
          product design in solving complex user and business problems.
        </span>
      </p>
      <div className={styles.logo}>
      <Image
        src="/images/smalllogo.png"
        alt="Logo"
        width= {24}
    height= {24}
      />
      </div>
    </div>
  );
};

export default AboutMe;
