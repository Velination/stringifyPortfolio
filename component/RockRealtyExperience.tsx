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
      Building a Foundation of Trust: The Rock Realty Homepage Experience
      </h2>
      <p className={`${styles.paragraph} ${figtree.className}`}>
      In a real estate market where trust is paramount, the Rock Realty homepage was designed to  <strong>establish 
        credibility and transparency from the first click.</strong>  Recognizing the prevalence of fraud concerns, 
        we prioritized authentic property imagery and clear contact pathways, ensuring visitors felt secure and connected.
      </p>
      <p className={`${styles.paragraph} ${figtree.className}`}>
      The homepage's UX writing was carefully crafted with a content strategist, portraying Rock Realty as a reliable and
      accessible partner. <strong>We aimed to simplify complex real estate concepts, providing clear value propositions and guiding
      users towards their investment goals.</strong>
      </p>
      <p className={`${styles.paragraph} ${figtree.className}`}>
      Through iterative design and stakeholder input, we created a<strong> welcoming and 
      informative homepage.</strong> Clear calls-to-action encourage exploration of property listings and direct engagement with 
      Rock Realty's team, laying the groundwork for a successful client relationship.
      </p>
    </section>
  );
};

export default DigitalExperience;