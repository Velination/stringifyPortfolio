// components/TargetAudience/TargetAudience.tsx

import React from 'react';
import styles from '@/component/TargetAudience.module.css';
import Image from 'next/image';
import { Figtree, Poppins } from 'next/font/google';


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['900', '400'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
  });


const TargetAudience: React.FC = () => {
  return (
    <section className={styles.container}>
      
      <div className={styles.content}>
        
        <div className={styles.imageWrapper}>
          <Image 
          src="/images/Rectangle 27.png" 
          width={400} // replace with your actual dimensions
          height={300}
          alt="Oluwatobi" className={styles.image} />
        </div>
        <div className={styles.profile}>
          <h3 className={`${styles.name} ${poppins.className}`}>Oluwatobi Hassan, 28</h3>
          <p className={`${styles.role} ${poppins.className}`}>Software Engineer</p>
          <p className={styles.bio}>
            Oluwatobi is a Software Engineer in Canada. She loves her family so much and the well being of her family is her priority. Recently she got the news that her father back in Nigeria,
            isn’t feeling too well. Although he has been discharged from the hospital but he needs to
            be monitored.
          </p>
          
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h4>Goals</h4>
              <ul>
                <li>To get a care healthcare professional to take care of her father.</li>
                <li>To monitor her father’s health from Canada.</li>
              </ul>
            </div>
            <div className={`${styles.box} ${poppins.className}`}>
              <h4>Pain points</h4>
              <ul>
                <li>Lack of skilled & well trained care professionals to handle her father’s condition.</li>
                <li>Not being able to monitor care professionals.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
