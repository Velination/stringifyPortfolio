import React from 'react';
import type { JSX } from 'react';
import styles from '@/component/MyCareCaseStudy.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '400', '500'],
});

type CaseStudyOverviewProps = {
  client: string;
  role: string;
  timeline: string;
  responsibilities: string[];
  overviewTitle: string;
  overviewText: (string | JSX.Element)[];
};

const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({
  client,
  role,
  timeline,
  responsibilities,
  overviewTitle,
  overviewText,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.leftColumn} ${poppins.className}`}>
        <p><strong>Client:</strong><br />{client}</p>
        <p><strong>My Role:</strong><br />{role}</p>
        <p><strong>Timeline:</strong><br />{timeline}</p>
        <div>
          <strong>Responsibilities:</strong>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${styles.rightColumn} ${poppins.className}`}>
        <h3>{overviewTitle}</h3>
        {overviewText.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyOverview;
