import React from "react";
import Image from "next/image";
import styles from '@/component/ExperienceCard.module.css';
import { Bruno_Ace, Poppins  } from 'next/font/google';

const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

// Define the interface for the props
interface ExperienceItem {
  title: string;
  company: string;
  date: string;

}

interface ExperienceProps {
  experience: ExperienceItem[];
  
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.h2} ${brunoAce.className}`}>EXPERIENCE</h2>
      {experience.map((item, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={`${styles.date} ${poppins.className}`}>{item.date}</div>
          <div className={styles.details}>
          <div className={`${styles.title} ${poppins.className}`}>{item.title}</div>
            <div className={`${styles.company} ${poppins.className}`}>{item.company} 
              <span className={styles.sign}> ↗</span>
             <span className={styles.remote}>Remote</span> 
            </div>
          </div>
        </div>
      ))}
      <div className={`${styles.companiesList} ${poppins.className}`}>
        <h3>Companies I've collaborated with:</h3>
        <div className={styles.logoSlider}>
          <div className={styles.logoTrack}>
            {/* Add multiple logos here */}
            <Image src="/images/logo1.png" alt="Logo 1" width={80} height={20} />
            <Image src="/images/logo2.png" alt="Logo 2" width={80} height={20} />
            <Image src="/images/logo3.png" alt="Logo 3" width={80} height={20} />
            <Image src="/images/logo4.png" alt="Logo 4" width={80} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
