import styles from './MobileMockUp.module.css';
import Image from 'next/image';
import { Figtree, Poppins } from 'next/font/google';


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['900', '400'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
  });

const MobileMockup = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.mockupContainer}>
        <Image
          src='/images/MyCare Home 1 (1).png' // make sure image is in public/
          alt="Phone mockup"
          className={styles.phoneImage}
          width={400}
          height={800}
        />
        <Image
          src='/images/MyCare Home 2 (1).png' // make sure image is in public/
          alt="Phone mockup"
          className={styles.phoneImage}
          width={400}
          height={800}
        />
      </div>

      <div className={styles.icon}>
        <Image src="/images/Vector 12 (1).png" alt="User dashboard screen 1" width={400} height={400} />

      </div>

      <div className={styles.infoContainer}>
        <ol className={`${styles.infoList} ${poppins.className}`}>
          <li>
            <span className={styles.number} >1</span>
            <p>A warm of welcome from the home screen to help personalise the experience.</p>
          </li>
          <li>
            <span className={styles.number}>2</span>
            <p>The messages can be easily accessible in the case of support cases.</p>
          </li>
          <li>
            <span className={styles.number}>3</span>
            <p>There’s no second guessing of how to get started the card explains the first thing to do.</p>
          </li>
          <li>
            <span className={styles.number}>4</span>
            <p>The services the users orders for more is placed before them so it’s easily accessible.</p>
          </li>
          <li>
            <span className={styles.number}>5</span>
            <p>After a patient has been added, the card changes based on what’s next for the user.</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default MobileMockup;
