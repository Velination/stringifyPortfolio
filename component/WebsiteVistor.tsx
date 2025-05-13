// VisitorPainpoints.tsx
"use client";
import React from 'react';
import styles from '@/component/WebsiteVistor.module.css';
import { Poppins, Figtree } from 'next/font/google';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '400'],
});

const figtree = Figtree({
    subsets: ['latin'],
    weight: '400',
  });

const painpoints = [
  { title: 'Home Page', text: 'The menu items on the homepage are too small to see clearly, and there’s no way to filter by dietary restrictions.' },
  { title: 'Ordering Process', text: 'The online ordering process is confusing, and I’m not sure if my order went through.' },
  { title: 'Customer Support', text: 'There’s no easy way to contact customer support when I had a problem with my order.' },
  { title: 'Home Page', text: 'There’s no clear indication of what makes Tantalizers unique or why I should order from them.' },
  { title: 'General', text: 'The website lacks a clear and consistent visual design, making it look unprofessional.' },
  { title: 'Ordering Process', text: 'The “add to cart” button is hard to find, and the process is not intuitive.' },
  { title: 'Delivery Information', text: 'The website doesn’t provide an estimated time of arrival, just a broad delivery window.' },
  { title: 'Home Page', text: 'The loading speed of the homepage is very slow, especially on mobile data.' },
  { title: 'Menu Page', text: 'There are no user reviews or ratings for the menu items, so I don’t know what’s popular.' },
];

const VisitorPainpoints: React.FC = () => {
  return (
    <div className={styles.container}>
       <div className={styles.leftWrapper}>
  <div className={`${styles.leftHeading} ${figtree.className}`}>Website Visitor’s Painpoint</div>
  <div className={styles.leftPanel}>
    <div className={`${styles.visitorStats} ${poppins.className}`}>
      I had 18 users visit the website,<br/><span className={styles.extra}> 12 were new visitors</span> 
    </div>
  </div>
</div>
   
<motion.div
    
    initial={{ opacity: 0, x: -50 }}           // Start left
    whileInView={{ opacity: 1, x: 0 }}         // Slide to center
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.rightPanel}>
        {painpoints.map((point, index) => (
          <div key={index} className={styles.card}>
            <span className={`${styles.cardTitle} ${poppins.className}`}>{point.title}</span>
            <p className={`${styles.cardText} ${poppins.className}`}>{point.text}</p>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default VisitorPainpoints;