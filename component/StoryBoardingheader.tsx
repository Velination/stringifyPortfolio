// components/Storyboarding/StoryboardingHeader.tsx
"use client";

import React from "react";
import styles from "@/component/StoryboardingHeader.module.css";
import { Figtree, Poppins } from "next/font/google";

// Load Google Fonts
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["900", "400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

type StoryboardingHeaderProps = {
  title: string;
  description: string;
};

const StoryboardingHeader: React.FC<StoryboardingHeaderProps> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={`${styles.title} ${figtree.className}`}>
          {title}
        </h2>
        <p className={`${styles.description} ${poppins.className}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoryboardingHeader;