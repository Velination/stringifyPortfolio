// components/CaseStudySection.tsx
import React from 'react';
import styles from '@/component/MyCareCaseStudySection.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '400', '500'],
});

type CaseStudySectionProps = {
  title: string;
  content: Array<string | React.ReactNode>;
};

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ title, content }) => {
  return (
    <div className={`${styles.section} ${poppins.className}`}>
      <h3 className={styles.title}>{title}</h3>
      {content.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default CaseStudySection;
