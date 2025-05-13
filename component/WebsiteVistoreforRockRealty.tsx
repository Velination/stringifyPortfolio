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
  { title: 'Home Page', text: 'The calls-to-action are vague, and I don&apos;t know where to start or what my next step should be.' },
  { title: 'Property Listings ;', text: 'Property listings lack detailed information, such as floor plans, virtual tours, or comprehensive descriptions.' },
  { title: 'General', text: 'The navigation is confusing and inconsistent, making it difficult to find the information I need.' },
  { title: 'Home Page', text: 'TThe website lacks a modern and professional design, making me question the credibility of the company.' },
  { title: 'General', text: 'The website is not mobile-friendly, making it difficult to navigate on my phone.' },
  { title: 'Property Listing', text: 'It&apos;s difficult to filter or search for properties based on specific criteria, like location, price range, or property type.' },
  
];

const VisitorPainpoints: React.FC = () => {
  return (
    <div className={styles.container}>
       <div className={styles.leftWrapper}>
  <div className={`${styles.leftHeading} ${figtree.className}`}>Website Visitor’s Painpoint</div>
  <div className={styles.leftPanel}>
    <div className={`${styles.visitorStats} ${poppins.className}`}>
      I had 10 users visit the website,<br/><span className={styles.extra}> 6 were new visitors</span> 
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