"use client";
import { motion } from "framer-motion";
import styles from "@/component/AnimatedDivider.module.css";

const AnimatedDivider = () => {
  const handleScrollDown = () => {
    const element = document.getElementById("connect");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.dividerContainer}>
      <div className={styles.line} />
      <div
        className={styles.centerIcon}
        onClick={handleScrollDown}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          className={styles.rotatingArc}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        <div className={styles.arrowDown} />
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default AnimatedDivider;
