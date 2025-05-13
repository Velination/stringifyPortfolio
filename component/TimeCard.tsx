"use client"
import React from "react";
import styles from "@/component/TimeCard.module.css";
import { motion } from 'framer-motion';
import { Figtree, Poppins } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['700', '400', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '400', '700'],
});


const RetrospectComponent = () => {
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
    {
      id: "03",
      title: "Admin Workflow & UX",
      description:
        "Understanding the administrator's workflow was paramount. I learned how to design intuitive admin interfaces that directly impact the end-user experience.",
    },
    {
      id: "04",
      title: "Data-Driven Design Rationale",
      description:
        "Data-driven design is essential. Every UI element must be justified and aligned with user needs and business goals. I honed my ability to articulate design rationale to stakeholders.",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={`${styles.heading} ${figtree.className}`}>TIME TO RETROSPECT!</h1>
      <p className={`${styles.subheading} ${poppins.className}`}>
        So these were my learnings after working on this project:
      </p>

      <motion.div
    initial={{ opacity: 0, x: -50 }}           // Start left
    whileInView={{ opacity: 1, x: 0 }}         // Slide to center
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.grid}>
        {learnings.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.cardId}>{item.id}</div>
            <h2 className={`${styles.cardTitle} ${poppins.className}`}>{item.title}</h2>
            <p className={`${styles.cardDescription} ${poppins.className}`}>{item.description}</p>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default RetrospectComponent;