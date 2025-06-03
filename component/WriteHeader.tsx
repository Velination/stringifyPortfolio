import { Figtree, Bruno_Ace } from 'next/font/google';
import ProjectCard from "@/component/RecentProjectCard";
import styles from "@/component/RecentProjectCard.module.css";
import Link from "next/link";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['900', '400'],
});

const brunoAce = Bruno_Ace({
    subsets: ['latin'],
    weight: [ '400'],
  });
export default function RecentProjects() {
  return (
    <section className={styles.container}>
      <div className={styles.titleRow}>
        <h2 className={`${styles.recent} ${figtree.className}`}>RECENT</h2>
        <h2 className={`${styles.projects} ${figtree.className}`}>&nbsp;PROJECTS</h2>
      </div>
      <div className={`${styles.subLinks} ${brunoAce.className}`}>
        <span >CASE STUDIES</span>
        <div className={styles.line}></div>
        <span>LIVE PROJECTS</span>
        <div className={styles.line}></div>
        <span>DESIGN PROCESS</span>
      </div>
      <div className={styles.projectGrid}>
      <Link href="/MyCare">
              <div>
                <ProjectCard
                  projectName="MyCard Assistant"
                  year="2024"
                  imageSrc="/images/Shot.png"
                  title="Care Service App for"
                  subtitle="Care Professionals & Patients"
                  hoverColor="#1e90ff"
                />
              </div>
            </Link>
         <Link href="/tantalizer">
              <div>
                <ProjectCard
                  projectName="Tantalizer"
                  year="2023"
                  imageSrc="/images/Scene 12 1 (4).png"
                  title="Restaurant Website"
                  subtitle="Redesign"
                  hoverColor="#EA8B1B"
                />
              </div>
            </Link>
      <Link href="/RockRealty">
              <div>
                <ProjectCard
                  projectName="Real Realty Limited"
                  year="2024"
                  imageSrc="/images/Scene 12 1 (5).png"
                  title="Real Estate Website"
                  subtitle="Redesign"
                  hoverColor="#964B00"
                />
              </div>
            </Link>

      
    </div>
    </section>
  );
}
