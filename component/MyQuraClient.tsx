// components/MyQuraClient/MyQuraClient.tsx

import React from 'react';
import styles from '@/component/MyQuraClient.module.css';
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
    image: '/images/MyCare Flash 1.png',
    title: 'Get access to the best caregivers',
    buttonText: 'Sign up',
  },
  {
    image: '/images/MyCare Onbarding 1.png',
    title: 'Get the professional care you deserve',
    buttonText: 'Sign up',
  },
  {
    image: '/images/MyCare Onbarding 2.png',
    title: 'Make payments online effortlessly',
    buttonText: 'Sign up',
  },
  {
    image: '/images/MyCare Onbarding 3.png',
    title: 'Make payments online effortlessly',
    buttonText: 'Sign up',
  },
];

const flashPoints = [
  'I ensured that from the flash screen, has a feel of human connection and care.',
  'Intentionally, I used the pictures of humans, to build up the expectation of the new users.',
  'A picture of a caregiver rendering help to a patient pictures what the user should expect.',
  'Intentionally, I used the pictures of humans, to build up the expectation of the new users.'
];



const MyQuraClient = () => {
  return (
    <section className={styles.containers}>
      <div className={styles.textSection}>
        <h2 className={`${styles.title} ${figtree.className}`}>MYQURA<br/>CLIENT</h2>
        <p className={`${styles.description} ${poppins.className}`}>
          The MyQura Client app was designed to intentionally ensure the user’s needs are 
          catered for, and they enjoy a seamless experience when ordering for a care service.
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

export default MyQuraClient;
