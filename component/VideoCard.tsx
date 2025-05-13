'use client';
import React from 'react';
import styles from './VideoCard.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroWrapper}>
      {/* Video Background */}
      <video
        className={styles.heroVideo}
        src="/video/figma.mov"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      
    </section>
  );
};

export default HeroSection;
