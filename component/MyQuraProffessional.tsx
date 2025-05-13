// components/MyQuraClient/MyQuraClient.tsx

import React from 'react';
import styles from '@/component/MyQuraProffessional.module.css';
import Image from 'next/image';
import { Figtree, Poppins } from 'next/font/google';


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['900', '400'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
  });

const features = [
  {
    image: '/images/MyCare Professional 1.png',
    title: 'Get access to the best caregivers',
    buttonText: 'Sign up',
  },
  {
    image: '/images/MyCare Professional 2.png',
    title: 'Get the professional care you deserve',
    buttonText: 'Sign up',
  },
  {
    image: '/images/MyCare Professional 3.png',
    title: 'Make payments online effortlessly',
    buttonText: 'Sign up',
  },
  {
    image: '/images/MyCare Professional 4.png',
    title: 'Make payments online effortlessly',
    buttonText: 'Sign up',
  },
];

const flashPoints = [
  'I ensured that from the onboarding screens, has a feel of human connection and care. ',
  'It’s compulsory for every care professional to be verified so the company is confident of their care professionals.  ',
  'The cards makes the most important information available to the care professional',
  'The card shows the time & date for the upcoming care service. So it’s not missed.',
  'The care professional can see their recently completed bookings. ',
  'The best match care service is a pool of care services patients have requested for. ',
  'Courses are also offered to the care professionals to help them polish their skill set'
];

const MyQuraProfessional = () => {
  return (
    <section className={styles.containers}>
      <div className={styles.textSection}>
        <h2 className={`${styles.title} ${figtree.className}`}>MYQURA CARE PROFESSIONAL</h2>
        <p className={`${styles.description} ${poppins.className}`}>
        The app is specifically tailored to help Care Professionals get care services that 
        suits there certifications and also manage various care services & payments. 
        </p>
      </div>
      <div className={styles.phoneSection}>
        {features.map((feature, idx) => (
          <div className={styles.phoneCard} key={idx}>
            <Image src={feature.image} alt={feature.title} width={300} height={620} className={styles.phoneImage} />
            
          </div>
        ))}
      </div>
      <div className={styles.icon}>
        <Image src="/images/Vector 10 (1).png" alt="User dashboard screen 1" width={400} height={400} />

      </div>
      <div className={styles.container}>
      <div className={styles.grid}>
        {flashPoints.map((point, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.circle}>{index + 1}</div>
            <p className={styles.text}>{point}</p>
          </div>
        ))}
      </div>
    </div>

  
    </section>
  );
};

export default MyQuraProfessional;
