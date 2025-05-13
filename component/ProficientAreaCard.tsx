"use client";
import React from 'react';
import Image from 'next/image';
import styles from '@/component/ProficientAreaCard.module.css';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface ProficientCardProps {
  icon: string;
  title: string;
  description: string;
}

const ProficientCard: React.FC<ProficientCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
    className={styles.card}
    initial={{ opacity: 0, x: -50 }}           // Start left
    whileInView={{ opacity: 1, x: 0 }}         // Slide to center
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.icon}>
        <Image src={icon} alt={title} width={64} height={64} />
      </div>
      <h3 className={`${styles.cardTitle} ${poppins.className}`}>{title}</h3>
      <p className={`${styles.cardDescription} ${poppins.className}`}>{description}</p>
    </motion.div>
  );
};

export default ProficientCard;
