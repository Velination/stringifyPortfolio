"use client";
import React, { useEffect, useState } from "react";
import styles from "@/component/TimeCard.module.css";
import { motion } from "framer-motion";
import { Figtree, Poppins } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["700", "400", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const OutComeComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const learnings = [
    {
      id: "01",
      title: "Designing for Social Impact",
      description:
        "A deep dive into the healthcare sector revealed the urgent need for user-centred solutions in Nigeria and surrounding regions. This project channeled my passion for designing for social impact.",
    },
    {
      id: "02",
      title: "Inclusive Interface Design",
      description:
        "Designing for a multi-generational audience required a nuanced approach to accessibility and usability. I gained valuable experience in creating inclusive interfaces.",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={`${styles.heading} ${figtree.className}`}>
        {isMobile ? "TIME TO RETROSPECT" : "THE OUTCOME"}
      </h1>
      <p className={`${styles.subheading} ${poppins.className}`}>
        So these were my learnings after working on this project:
      </p>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.grid}>
          {learnings.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.cardId}>{item.id}</div>
              <h2 className={`${styles.cardTitle} ${poppins.className}`}>
                {item.title}
              </h2>
              <p className={`${styles.cardDescription} ${poppins.className}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OutComeComponent;