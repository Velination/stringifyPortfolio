"use client";
import Link from 'next/link';
import AllProjectButton from '@/component/AllProjectButton'; 
import styles from "@/component/AnimatedButton.module.css";

const AnimatedDivider = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.line} />
      <div>
        <Link href="/RecentProjectCard">
         
          <div style={{ cursor: 'pointer' }}>
            <AllProjectButton email="all projects" />
          </div>
        </Link>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default AnimatedDivider;