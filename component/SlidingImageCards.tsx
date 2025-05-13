"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SlidingImage.module.css";

interface SlidingImageProps {
  images: { src: string; alt: string; width: number; height: number }[];
}

const SlidingImageComponent: React.FC<SlidingImageProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${(currentIndex * 100) / images.length}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide} style={{ minWidth: '20%' }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          </div>
        ))}
        {/* Seamless loop - duplicate first image */}
        <div className={styles.slide}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={images[0].width}
            height={images[0].height}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default SlidingImageComponent;
