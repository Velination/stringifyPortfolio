'use client';

import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from '@/component/SlidingImageCardForAboutPage.module.css'; 

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1, // Important: show 1 image per view
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // 🕒 Auto-slide every 3 seconds
  useEffect(() => {
    if (!instanceRef.current) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className={styles.sliderWrapper}>
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
          <div key={idx} className={`keen-slider__slide ${styles.slide}`}>
            <img src={src} alt={`Slide ${idx}`} className={styles.image} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

