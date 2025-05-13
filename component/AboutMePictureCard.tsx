import Image from 'next/image';
import styles from '@/component/AboutMePictureCard.module.css';

const AboutMePictureCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/aboutimage.png" // <-- replace with your real image path
          alt="Lawal Jimoh"
          fill
          className={styles.image}
        />
        <div className={styles.text}>
          <p>Hello 👋🏻</p>
          <span>My name is <strong>Lawal Jimoh</strong></span>
          
          <div className={styles.strong}>But you can call me <strong>LA 😉</strong></div>
          <span>
            Feel free to grab my <a href="mailto:your@email.com" className={styles.email}>email. 🤗</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMePictureCard;
