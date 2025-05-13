// UxAuditResearch.tsx
"use client";
import React from 'react';
import styles from '@/component/TheWebsite.module.css';
import { Poppins, Figtree } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '400', '500'],
});

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['400', '900'],
  });

const UxAuditResearch: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={`${styles.heading} ${figtree.className}`}>THE WEBSITE UX AUDIT AND RESEARCH PROCESS</h1>
      <p  className={`${styles.paragraph} ${poppins.className}`}>
        To get started with the website redesign project, <strong className={styles.pan}>I had a meeting with the stakeholders about the changes they were looking forward to in the new website.</strong> This was necessary to understand and align on the desired goals
      </p>
      <p  className={`${styles.processTitle} ${poppins.className}`}>The process I took includes;</p>
      <ul className={`${styles.list} ${poppins.className}`}>
        <li>Worked on a <strong className={styles.pan}>detailed audit</strong> of the existing platform</li>
        <li><strong className={styles.pan}>Design thinking</strong> workshops with key stakeholders.</li>
        <li>Map out the <strong className={styles.pan}>content structure and design</strong> layout to convert customers.</li>
        <li>Test our discovery.</li>
      </ul>
      <p  className={`${styles.subText} ${figtree.className}`}>
        Below is the summary of the challenges users faced with Tantalizer’s old website.
      </p>
    </section>
  );
};

export default UxAuditResearch;