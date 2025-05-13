'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SliderImage.module.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface MenuItem {
  src: string;
  alt: string;
  title: string;
}

interface MenuSliderProps {
  items: MenuItem[];
}

const MenuSlider: React.FC<MenuSliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // ✅ Move inside the component

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return isClient ? (
    <div className={styles.menuWrapper}>
      <div className={styles.menuHeader}>
        <h2 className={styles.menuTitle}>
          {items[currentIndex].title}
        </h2>
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className={styles.navButton} onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          width={900}
          height={500}
          className={styles.menuImage}
        />
      </div>
    </div>
  ) : null;
};

export default MenuSlider;
