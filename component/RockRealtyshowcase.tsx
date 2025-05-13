'use client';
import React from 'react';
import styles from '@/component/Browser.module.css';
import { Poppins, Figtree } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '400'],
});

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['400','900']
  });

const ShowCase: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2   className={`${styles.heading} ${figtree.className}`}>
      Showcasing products and services with relevant details
      </h2>

      
      
      <p  className={`${styles.paragraph} ${poppins.className}`}>
      The Rock Realty products and services page was designed to
      <strong>deliver clear, concise information. 
      .&nbsp;</strong>We prioritized detailed property listings and service descriptions, ensuring users could easily understand 
      offerings and make informed decisions. A user-friendly interface and intuitive navigation allowed for
      <strong> seamless 
      exploration, enhancing accessibility and driving engagement.
      .&nbsp;</strong>
      </p>
      
      
    </section>
  );
};

export default ShowCase;