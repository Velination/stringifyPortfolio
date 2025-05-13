// components/ProjectCard.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./RecentProjectCard.module.css";

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  projectName?: string;
  year?: string;
  hoverColor?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  subtitle,
  projectName,
  year,
  hoverColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    // only toggle on touch devices
    if (window.innerWidth <= 768) setIsHovered(!isHovered);
  };
  return (
    <div 
    className={`${styles.card} ${isHovered ? styles.hovered : ""}`}
      onClick={toggleHover}
    style={{ ['--hover-color' as any]: hoverColor }}>
      {/* Header Section */}
      <div className={styles.header}>
        <span className={styles.projectName}>{projectName}</span>
        <span className={styles.year}>{year}</span>
      </div>

      {/* Image + Overlay Text */}
      <div className={styles.imageWrapper}>
        <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        className={styles.image}
        sizes="100%"
         />
        <div className={styles.textOverlay}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
