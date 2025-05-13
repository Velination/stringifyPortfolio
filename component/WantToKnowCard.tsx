"use client";
import React from "react";
import { IoAlertOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";
import styles from "./WantToKnow.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const WantToKnowCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <IoAlertOutline className={styles.iconText} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={`${styles.title} ${poppins.className}`}>
          Want to know more about this project?
        </h3>
        <p className={`${styles.description} ${poppins.className}`}>
          Use the button below to read the full case study.
        </p>
        <button className={`${styles.button} ${poppins.className}`}>
          Go to Case Study <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

export default WantToKnowCard;
