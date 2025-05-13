import React from "react";
import styles from '@/component/EducationCard.module.css';
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

const Education: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.h2} ${brunoAce.className}`}>EDUCATION/CERTIFICATIONS</h2>
      {experience.map((item, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={`${styles.date} ${poppins.className}`}>{item.date}</div>
          <div className={styles.details}>
          <div className={`${styles.title} ${poppins.className}`}>{item.title}</div>
            <div className={`${styles.company} ${poppins.className}`}>{item.company}  
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
