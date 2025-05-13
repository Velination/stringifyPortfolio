"use client";
import { Dispatch, SetStateAction } from "react";
import styles from "@/component/ToggleButton.module.css";
import Image from 'next/image';

type Section = "caseStudy" | "design";

type Props = {
  currentSection: Section;
  setCurrentSection: Dispatch<SetStateAction<Section>>;
};

const ToggleSwitch = ({ currentSection, setCurrentSection }: Props) => {
  const isCaseStudy = currentSection === "caseStudy";

  return (
    <div className={styles.container}>
      <div
  className={styles.option}
  style={{ color: isCaseStudy ? "#fff" : "#bbb" }}
  onClick={() => setCurrentSection("caseStudy")}
>
  {/* Desktop Image */}
  <Image 
    src="/images/Frame 48.png" 
    width={25}
    height={25}
    alt="Full View"
    className={`${styles.image} ${styles.desktopOnly}`} 
  />
  {/* Mobile Image */}
  <Image 
    src="/images/Frame 49 (1).png" 
    width={20}
    height={20}
    alt="Full View Mobile"
    className={`${styles.image} ${styles.mobileOnly}`} 
  />
  <span className={styles.label}>Full</span>
</div>

<div
  className={styles.option}
  style={{ color: !isCaseStudy ? "#fff" : "#bbb" }}
  onClick={() => setCurrentSection("design")}
>
  {/* Desktop Image */}
  <Image 
    src="/images/Frame 49.png" 
    width={25}
    height={25}
    alt="Design View"
    className={`${styles.image} ${styles.desktopOnly}`} 
  />
  {/* Mobile Image */}
  <Image 
    src="/images/book.png" 
    width={20}
    height={20}
    alt="Design View Mobile"
    className={`${styles.image} ${styles.mobileOnly}`} 
  />
  <span className={styles.label}>Design</span>
</div>
      <div
        className={styles.innerCircle}
        style={{ left: isCaseStudy ? "0" : "47%" }}
      />
    </div>
  );
};

export default ToggleSwitch;