"use client";
import Image from 'next/image';
import ButtonWithIcon from './Buttons';
import styles from './LetWorkTogetherCard.module.css';
import { Figtree, Bruno_Ace } from 'next/font/google';


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['900', '400'],
});

const brunoAce = Bruno_Ace({
    subsets: ['latin'],
    weight: [ '400'],
  });

const WorkTogether: React.FC = () => {
  return (
    <section className={styles.containers}>
      <div className={styles.titleRow}>
        <h2 className={`${styles.recent} ${figtree.className}`}>GET</h2>
        <h2 className={`${styles.projects} ${figtree.className}`}>&nbsp;CONNECTED</h2>
      </div>
      <div className={`${styles.subLinks} ${brunoAce.className}`}>
        <span >OPEN TO NEW OPPORTUNITIES</span>
        <div className={styles.line}></div>
        <span></span>
        <div className={styles.line}></div>
        <span>HIRE ME</span>
      </div>
      
      <div className={styles.container}>
      {/* Image Section */}
      <div className={styles.imageSection}>
        <Image
          className={styles.profileImage}
          src="/images/image.png"
          alt="Profile"
          width={376}
          height={439}
        />
      </div>

      {/* Text and Button Section */}
      <div className={styles.textSection}>
        <p className={styles.mainText}>
          Let’s <span className={styles.highlightText}>work</span> together on your
        </p>
        <p>
          <span className={styles.subText}>next project</span>
        </p>
        <div className={styles.buttonContainer}>
          <ButtonWithIcon email="lajimohofficial@gmail.com" />
        </div>
      </div>
    </div>
      
    </section>
    
  );
};

export default WorkTogether;
