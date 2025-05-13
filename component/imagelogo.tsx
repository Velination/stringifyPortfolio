// component/ProjectBannerCard.tsx
"use client";
import styles from "@/component/imagelogo.module.css";
import Image from "next/image";

type Props = {
  imageSrc: string;
  altText: string;
  width?: number;
  height?: number;
};

const ProjectBannerCard = ({
  imageSrc,
  altText,
  width = 600,
  height = 200,
}: Props) => {
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
        className={styles.banner}
      />
    </div>
  );
};

export default ProjectBannerCard;