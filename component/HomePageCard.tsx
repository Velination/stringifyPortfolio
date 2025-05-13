'use client';

import Image from 'next/image';
import React from 'react';
import styles from './HomePageCard.module.css';

interface ImageData {
  src: string;
  alt: string;
}

interface HomePageCardProps {
  images: ImageData[];
}

const HomePageCard: React.FC<HomePageCardProps> = ({ images }) => {
  return (
    <div className={styles.homePageWrapper}>
      {images.map((image, index) => (
        <div className={styles.pageContainer} key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={900}
            className={styles.pageImage}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePageCard;



