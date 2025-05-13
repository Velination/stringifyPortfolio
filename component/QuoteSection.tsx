'use client';

import { motion } from 'framer-motion';
import styles from '@/component/QuoteSection.module.css';
import { Figtree , Poppins } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  weight: '900',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: '500',
  });

const DesignSection: React.FC = () => {
  return (
    <section className={styles.card}>
        <div className={styles.section}>
      <motion.div
        className={styles.leftText}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={`${styles.h1} ${figtree.className}`}>
          <span>GREAT DESIGN <br />
          IS HARD,</span> <br />
          <strong>I MAKE IT EASY</strong>
        </h1>
      </motion.div>

      <motion.div
        className={styles.rightText}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className={`${styles.p} ${poppins.className}`}>
          For me, <strong>design</strong> is more than <strong>aesthetics</strong>; it’s about
          <br />
          <strong>creating solutions</strong> that seamlessly integrate into
          <br />
          <strong> people's</strong> lives and make a <strong>positive impact</strong>.
        </p>
      </motion.div>
      </div>
    </section>
  );
};

export default DesignSection;
