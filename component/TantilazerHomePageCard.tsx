'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/component/ImageCard.module.css';


interface MenusItem {
  src: string;
  alt: string;
  title: string;
}

interface MenuSliderProps {
  items: MenusItem[];
}

const TantilazerImageCard: React.FC<MenuSliderProps> = ({ items }) => {
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
      

      <div className={styles.imageWrapper}>
        <Image
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          width={1400}
          height={600}
          className={styles.menuImage}
        />
      </div>
    </div>
  ) : null;
};

export default TantilazerImageCard;
