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

const BrowseToBite: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2   className={`${styles.heading} ${figtree.className}`}>
        From Browse to Bite: Optimizing the Menu for Orders
      </h2>
      <p  className={`${styles.paragraph} ${poppins.className}`}>
        Acknowledging that the menu is the heart of the Tantalizers experience, <strong>I redesigned the page to be intuitive and visually appealing.</strong>
      </p>
      <p className={`${styles.paragraph} ${poppins.className}`}>
        Clear categorisation and high-resolution food images were prioritised, allowing users to easily browse and discover their favourite dishes. <strong>Detailed descriptions and nutritional information were provided to empower informed choices.</strong> A streamlined ordering process, integrated directly within the menu, minimised friction and encouraged immediate action.
      </p>
      <p className={`${styles.paragraph} ${poppins.className}`}>
        <strong>The design reinforced Tantalizers’ brand values of variety, quality, and convenience, transforming the menu page into a delightful and efficient gateway to culinary satisfaction.</strong>
      </p>
    </section>
  );
};

export default BrowseToBite;