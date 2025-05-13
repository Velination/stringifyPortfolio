import Head from "next/head";
import Link from "next/link";
import styless from "@/component/home.module.css";
import Sidebar from '@/component/SliderBar';
import ProjectCard from "../../component/RecentProjectCard";
import styles from "../../component/RecentProjectCard.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className={styless.background}>
        <div className={styless.overlay}>
          {/* SideBar */}
          <Sidebar />

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

            <Link href="/projects/real-realty">
              <div>
                <ProjectCard
                  projectName="Real Realty Limited"
                  year="2024"
                  imageSrc="/images/Shot.png"
                  title="Real Estate Website"
                  subtitle="Redesign"
                  hoverColor="#964B00"
                />
              </div>
            </Link>

            <Link href="/tantalizer">
              <div>
                <ProjectCard
                  projectName="Tantalizer"
                  year="2023"
                  imageSrc="/images/Shot.png"
                  title="Restaurant Website"
                  subtitle="Redesign"
                  hoverColor="#EA8B1B"
                />
              </div>
            </Link>

            <Link href="/projects/kwats">
              <div>
                <ProjectCard
                  projectName="Kwats"
                  year="2024"
                  imageSrc="/images/Shot.png"
                  title="Courier Service App for"
                  subtitle="Delivery Service"
                  hoverColor="#90EE90"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}