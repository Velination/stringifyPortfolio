'use client';
import React from 'react';
import styles from '@/component/curating.module.css';
import { Poppins, Figtree } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '400'],
});

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['400','900'],
  });

const DigitalExperience: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.heading} ${figtree.className}`}>
        Curating a Delectable Digital Experience to Satisfy Cravings and Build Loyalty
      </h2>
      <p className={`${styles.paragraph} ${figtree.className}`}>
        Recognising the need for trust in online food ordering, <strong>I designed the Tantalizers website to prioritise reliability and ease of use.</strong> Authentic food photography replaced generic images, and multiple contact channels were provided.
      </p>
      <p className={`${styles.paragraph} ${figtree.className}`}>
        The UX writing, carefully crafted with a content strategist, portrayed Tantalizers as a friendly, accessible, and value-driven brand. <strong>A responsive design was implemented, ensuring a seamless experience and easy content updates.</strong>
      </p>
      <p className={`${styles.paragraph} ${figtree.className}`}>
        The homepage features clear copy and prominent calls-to-action, simplifying menu exploration and order placement, ultimately building customer loyalty.
      </p>
    </section>
  );
};

export default DigitalExperience;