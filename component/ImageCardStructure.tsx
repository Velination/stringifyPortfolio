'use client';
import Image from 'next/image';
import React from 'react';
import styles from './ImageStructure.module.css';

interface ImageCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageCardComponent: React.FC<ImageCardProps> = ({ src, alt, width, height }) => {
  return (
    <div className={styles.imageCardContainer}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="image-card-img"
      />
    </div>
  );
};

export default ImageCardComponent;
