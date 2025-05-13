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


const TargetAudiences: React.FC = () => {
  return (
    <section className={styles.container}>
      
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image 
          src="/images/angle 27.png" 
          width={400} // replace with your actual dimensions
          height={300}
          alt="Oluwatobi" className={styles.image} />
        </div>
        <div className={styles.profile}>
          <h3 className={`${styles.name} ${poppins.className}`}>Sandra Philips, 32</h3>
          <p className={`${styles.role} ${poppins.className}`}>Care Professional</p>
          <p className={styles.bio}>
          Sandra is a MyCare Assistant certified care professional.  She loves rendering care services to her patient as she has been taught by the the instructors at MyCare Assistant. Most of the times, she misses available care shift when 
          it’s posted on the WhatsApp group, she really want to be get available care shift on time.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h4>Goals</h4>
              <ul>
                <li>To render care services to her patient efficiently.  </li>
                <li>To properly manage her care shifts so they are not conflicting.</li>
              </ul>
            </div>
            <div className={`${styles.box} ${poppins.className}`}>
              <h4>Pain points</h4>
              <ul>
                <li>Misses out on care shift due to not being available. </li>
                <li> Not being able to provide certain care service.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudiences;
